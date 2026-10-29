'use client';

import { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { SITE, emailHref } from '../data/site';
import {
  emptyContact,
  validateContact,
  type ContactPayload,
  type FieldErrors,
  type InquiryType,
} from '../lib/contactSchema';

type Status = 'idle' | 'sending' | 'success' | 'error' | 'rate_limited';

const VARIETIES = ['SL28', 'SL34', 'Ruiru 11', 'Batian'];

const inputClass =
  'w-full bg-transparent border-b border-royal-navy/40 py-3 lg:py-4 text-royal-navy placeholder:text-royal-navy/50 focus:outline-none focus:border-royal-red transition-colors text-base lg:text-lg';

export default function ContactForm({ initialType = 'buyer' }: { initialType?: InquiryType }) {
  const { t } = useTranslation();
  const uid = useId();
  const [form, setForm] = useState<ContactPayload>(() => emptyContact(initialType));
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  // The drawer stays mounted between openings, so follow the type requested by the opener.
  useEffect(() => {
    setForm((prev) => (prev.type === initialType ? prev : { ...prev, type: initialType }));
  }, [initialType]);

  const isBuyer = form.type === 'buyer';
  const set = <K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const { [key]: _removed, ...rest } = prev;
      return rest;
    });
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === 'sending') return;

    const result = validateContact(form);
    if (!result.ok) {
      setErrors(result.errors);
      const first = Object.keys(result.errors)[0];
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      });
      if (res.ok) {
        setStatus('success');
        setForm(emptyContact(form.type));
        return;
      }
      if (res.status === 400) {
        const body = await res.json().catch(() => null);
        if (body?.fields) {
          setErrors(body.fields);
          setStatus('idle');
          return;
        }
      }
      setStatus(res.status === 429 ? 'rate_limited' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const fieldError = (key: keyof ContactPayload) =>
    errors[key] ? (
      <p id={`${uid}-${key}-err`} className="mt-1 text-sm text-royal-red font-medium" role="alert">
        {t(`contact_form.err_${errors[key]}`)}
      </p>
    ) : null;

  const textField = (
    key: keyof ContactPayload,
    label: string,
    opts: { type?: string; required?: boolean; autoComplete?: string } = {},
  ) => (
    <div>
      <label htmlFor={`${uid}-${key}`} className="sr-only">
        {label}
      </label>
      <input
        id={`${uid}-${key}`}
        name={key}
        type={opts.type ?? 'text'}
        value={form[key] as string}
        onChange={(e) => set(key, e.target.value as never)}
        placeholder={`${label}${opts.required ? ' *' : ''}`}
        autoComplete={opts.autoComplete}
        aria-required={opts.required}
        aria-invalid={Boolean(errors[key])}
        aria-describedby={errors[key] ? `${uid}-${key}-err` : undefined}
        className={inputClass}
      />
      {fieldError(key)}
    </div>
  );

  const selectField = (key: keyof ContactPayload, label: string, options: { value: string; label: string }[]) => (
    <div>
      <label htmlFor={`${uid}-${key}`} className="sr-only">
        {label}
      </label>
      <select
        id={`${uid}-${key}`}
        name={key}
        value={form[key] as string}
        onChange={(e) => set(key, e.target.value as never)}
        className={`${inputClass} ${form[key] ? '' : 'text-royal-navy/50'} cursor-pointer`}
      >
        <option value="">{label}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value} className="text-royal-navy">
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );

  if (status === 'success') {
    return (
      <div role="status" className="py-10">
        <h3 className="font-playfair text-4xl lg:text-5xl text-royal-navy mb-4">{t('contact_form.success_title')}</h3>
        <p className="text-royal-navy/80 text-base lg:text-lg leading-relaxed mb-8">{t('contact_form.success_body')}</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-royal-red font-bold underline underline-offset-4 hover:text-red-800 cursor-pointer"
        >
          {t('contact_form.send_another')}
        </button>
      </div>
    );
  }

  const typeOptions: { type: InquiryType; label: string }[] = [
    { type: 'buyer', label: t('contact_form.type_buyer') },
    { type: 'farmer', label: t('contact_form.type_farmer') },
  ];

  return (
    <form className="flex flex-col gap-4 lg:gap-5 w-full" onSubmit={submit} noValidate>
      <fieldset className="border-0 p-0 m-0">
        <legend className="text-royal-navy/70 text-sm font-bold uppercase tracking-widest mb-3">
          {t('contact_form.type_label')}
        </legend>
        <div className="flex flex-col sm:flex-row gap-3" role="radiogroup">
          {typeOptions.map(({ type, label }) => (
            <button
              key={type}
              type="button"
              role="radio"
              aria-checked={form.type === type}
              onClick={() => set('type', type)}
              className={`flex-1 px-4 py-3 text-sm lg:text-base font-bold border transition-colors cursor-pointer text-left ${
                form.type === type
                  ? 'bg-royal-navy text-sand border-royal-navy'
                  : 'border-royal-navy/40 text-royal-navy hover:border-royal-red'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="mt-3 text-royal-navy/70 text-sm lg:text-base">
          {isBuyer ? t('contact_form.intro_buyer') : t('contact_form.intro_farmer')}
        </p>
      </fieldset>

      {textField('name', t('contact_form.name'), { required: true, autoComplete: 'name' })}
      {textField('email', t('contact_form.email'), { type: 'email', required: true, autoComplete: 'email' })}
      {textField('phone', t('contact_form.phone'), { type: 'tel', autoComplete: 'tel' })}

      {isBuyer ? (
        <>
          {textField('company', t('contact_form.company'), { autoComplete: 'organization' })}
          {selectField('interest', t('contact_form.interest'), [
            ...VARIETIES.map((v) => ({ value: v, label: v })),
            { value: 'Not sure yet', label: t('contact_form.interest_any') },
          ])}
          {textField('volume', t('contact_form.volume_buyer'))}
          {textField('destination', t('contact_form.destination'), { autoComplete: 'country-name' })}
        </>
      ) : (
        <>
          {textField('farmName', t('contact_form.farm_name'))}
          {textField('location', t('contact_form.location'))}
          {selectField('variety', t('contact_form.variety'), [
            ...VARIETIES.map((v) => ({ value: v, label: v })),
            { value: 'Other / not sure', label: t('contact_form.variety_other') },
          ])}
          {selectField('processing', t('contact_form.processing'), [
            { value: 'Fully washed', label: t('contact_form.processing_washed') },
            { value: 'Natural', label: t('contact_form.processing_natural') },
            { value: 'Honey', label: t('contact_form.processing_honey') },
            { value: 'Not sure', label: t('contact_form.processing_unsure') },
          ])}
          {textField('volume', t('contact_form.volume_farmer'))}
        </>
      )}

      <div>
        <label htmlFor={`${uid}-message`} className="sr-only">
          {isBuyer ? t('contact_form.message_buyer') : t('contact_form.message_farmer')}
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={4}
          value={form.message}
          onChange={(e) => set('message', e.target.value)}
          placeholder={`${isBuyer ? t('contact_form.message_buyer') : t('contact_form.message_farmer')} *`}
          aria-required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${uid}-message-err` : undefined}
          className={`${inputClass} resize-y`}
        />
        {fieldError('message')}
      </div>

      {/* Honeypot: hidden from people, irresistible to bots. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
        <label htmlFor={`${uid}-website`}>Website</label>
        <input
          id={`${uid}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => set('website', e.target.value)}
        />
      </div>

      <div>
        <div className="flex items-center gap-3 mt-2">
          <input
            id={`${uid}-consent`}
            type="checkbox"
            checked={form.consent}
            onChange={(e) => set('consent', e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? `${uid}-consent-err` : undefined}
            className="w-5 h-5 accent-royal-red cursor-pointer shrink-0"
          />
          <label htmlFor={`${uid}-consent`} className="text-royal-navy/80 text-sm lg:text-base font-medium">
            {t('contact_form.consent')}{' '}
            <Link href="/privacy" target="_blank" className="underline underline-offset-4 hover:text-royal-red">
              {t('contact_form.privacy_link')}
            </Link>{' '}
            *
          </label>
        </div>
        {fieldError('consent')}
      </div>

      <div aria-live="polite">
        {(status === 'error' || status === 'rate_limited') && (
          <p className="text-royal-red font-medium text-sm lg:text-base" role="alert">
            {status === 'rate_limited' ? t('contact_form.error_rate_limited') : t('contact_form.error_generic')}{' '}
            <a href={emailHref} className="underline underline-offset-4">
              {SITE.email}
            </a>
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-2 self-start bg-royal-red hover:bg-red-800 disabled:opacity-60 disabled:cursor-wait text-sand font-playfair text-2xl lg:text-3xl px-12 lg:px-14 py-4 lg:py-5 transition-colors tracking-wide cursor-pointer"
      >
        {status === 'sending' ? t('contact_form.sending') : t('contact_form.submit')}
      </button>
    </form>
  );
}
