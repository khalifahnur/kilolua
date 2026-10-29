import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { SITE } from '../../../src/data/site';
import {
  INQUIRY_LABEL,
  validateContact,
  type ContactPayload,
} from '../../../src/lib/contactSchema';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_BODY_BYTES = 20_000;
const RATE_LIMIT = 5; // submissions
const RATE_WINDOW_MS = 10 * 60 * 1000; // per 10 minutes per IP

// Best-effort, per-instance throttle. A shared store (e.g. Redis) would be needed for strict limits.
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > RATE_LIMIT;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

/** Header values must be single-line. */
const oneLine = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();

function recipientFor(type: ContactPayload['type']) {
  const specific = type === 'buyer' ? process.env.CONTACT_TO_BUYER : process.env.CONTACT_TO_FARMER;
  return specific || process.env.CONTACT_TO || SITE.email;
}

function detailRows(data: ContactPayload): [string, string][] {
  const common: [string, string][] = [
    ['Name', data.name],
    ['Email', data.email],
    ['Phone', data.phone],
  ];
  const specific: [string, string][] =
    data.type === 'buyer'
      ? [
          ['Company', data.company],
          ['Coffee of interest', data.interest],
          ['Estimated annual volume', data.volume],
          ['Destination country', data.destination],
        ]
      : [
          ['Farm / cooperative', data.farmName],
          ['Location', data.location],
          ['Variety', data.variety],
          ['Processing', data.processing],
          ['Expected volume', data.volume],
        ];
  return [...common, ...specific].filter(([, value]) => value);
}

function buildEmail(data: ContactPayload) {
  const label = INQUIRY_LABEL[data.type];
  const rows = detailRows(data);
  const who = data.type === 'buyer' ? data.company : data.farmName;
  const subject = oneLine(
    `[${data.type === 'buyer' ? 'Buyer' : 'Farmer/Cooperative'} enquiry] ${data.name}${who ? ` (${who})` : ''}`,
  );

  const text = [
    `New website enquiry: ${label}`,
    '',
    ...rows.map(([key, value]) => `${key}: ${value}`),
    '',
    'Message:',
    data.message,
  ].join('\n');

  const html = `<div style="font-family:Arial,Helvetica,sans-serif;color:#111a30;max-width:640px">
  <h2 style="margin:0 0 4px;color:#ba172a">New website enquiry</h2>
  <p style="margin:0 0 16px;font-weight:bold">${escapeHtml(label)}</p>
  <table style="border-collapse:collapse;width:100%">
    ${rows
      .map(
        ([key, value]) =>
          `<tr><td style="padding:6px 12px 6px 0;color:#555;white-space:nowrap;vertical-align:top">${escapeHtml(key)}</td><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`,
      )
      .join('')}
  </table>
  <h3 style="margin:20px 0 6px">Message</h3>
  <p style="white-space:pre-wrap;margin:0">${escapeHtml(data.message)}</p>
  <p style="margin:24px 0 0;font-size:12px;color:#777">Sent from ${escapeHtml(SITE.url)}. Reply to this email to respond to ${escapeHtml(data.name)}.</p>
</div>`;

  return { subject, text, html };
}

function createTransport() {
  const host = process.env.SMTP_HOST;
  if (!host) return null;
  const port = Number(process.env.SMTP_PORT) || 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465,
    auth: user && pass ? { user, pass } : undefined,
  });
}

export async function POST(request: Request) {
  const length = Number(request.headers.get('content-length') ?? 0);
  if (length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'too_large' }, { status: 413 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'rate_limited' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  // Honeypot: pretend it worked so bots don't retry, but send nothing.
  if (body && typeof body === 'object' && (body as Record<string, unknown>).website) {
    return NextResponse.json({ ok: true });
  }

  const result = validateContact(body);
  if (!result.ok) {
    return NextResponse.json({ error: 'validation', fields: result.errors }, { status: 400 });
  }
  const { data } = result;

  const transport = createTransport();
  if (!transport) {
    console.error('[contact] SMTP_HOST is not configured; enquiry from %s was NOT delivered.', data.email);
    return NextResponse.json({ error: 'not_configured' }, { status: 503 });
  }

  const { subject, text, html } = buildEmail(data);
  const from = process.env.CONTACT_FROM || process.env.SMTP_USER || SITE.email;

  try {
    await transport.sendMail({
      from: `"${SITE.name} website" <${from}>`,
      to: recipientFor(data.type),
      replyTo: `"${oneLine(data.name).replace(/"/g, '')}" <${data.email}>`,
      subject,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[contact] Failed to send enquiry email:', error);
    return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  }
}
