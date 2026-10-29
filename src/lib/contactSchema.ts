export type InquiryType = 'buyer' | 'farmer';

export const INQUIRY_TYPES: InquiryType[] = ['buyer', 'farmer'];

export type ContactPayload = {
  type: InquiryType;
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
  /** Buyer-only */
  company: string;
  interest: string;
  destination: string;
  /** Farmer / cooperative-only */
  farmName: string;
  location: string;
  variety: string;
  processing: string;
  /** Free-text volume: annual requirement for buyers, expected harvest for farmers. */
  volume: string;
  /** Honeypot: real visitors never see or fill this field. */
  website: string;
};

export type FieldErrorCode = 'required' | 'invalid' | 'too_long';
export type FieldErrors = Partial<Record<keyof ContactPayload, FieldErrorCode>>;

export const emptyContact = (type: InquiryType = 'buyer'): ContactPayload => ({
  type,
  name: '',
  email: '',
  phone: '',
  message: '',
  consent: false,
  company: '',
  interest: '',
  destination: '',
  farmName: '',
  location: '',
  variety: '',
  processing: '',
  volume: '',
  website: '',
});

const MAX: Partial<Record<keyof ContactPayload, number>> = {
  name: 100,
  email: 254,
  phone: 30,
  message: 4000,
  company: 150,
  interest: 100,
  destination: 100,
  farmName: 150,
  location: 150,
  variety: 100,
  processing: 100,
  volume: 100,
  website: 200,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s.-]{6,30}$/;

const str = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

/**
 * Validates and normalises a contact submission. Used by the form (for instant feedback)
 * and by the API route, which is the authoritative check.
 */
export function validateContact(input: unknown): {
  ok: boolean;
  data: ContactPayload;
  errors: FieldErrors;
} {
  const raw = (input && typeof input === 'object' ? input : {}) as Record<string, unknown>;
  const type: InquiryType = raw.type === 'farmer' ? 'farmer' : 'buyer';
  const data = emptyContact(type);
  const errors: FieldErrors = {};

  (Object.keys(MAX) as (keyof ContactPayload)[]).forEach((key) => {
    const value = str(raw[key]);
    (data as Record<string, unknown>)[key] = value;
    if (value.length > (MAX[key] as number)) errors[key] = 'too_long';
  });
  data.consent = raw.consent === true;

  // Fields that don't apply to the chosen inquiry type are dropped so they never reach the email.
  const buyerOnly: (keyof ContactPayload)[] = ['company', 'interest', 'destination'];
  const farmerOnly: (keyof ContactPayload)[] = ['farmName', 'location', 'variety', 'processing'];
  (type === 'buyer' ? farmerOnly : buyerOnly).forEach((key) => {
    (data as Record<string, unknown>)[key] = '';
    delete errors[key];
  });

  if (!data.name) errors.name = 'required';
  if (!data.email) errors.email = 'required';
  else if (!EMAIL_RE.test(data.email)) errors.email = 'invalid';
  if (data.phone && !PHONE_RE.test(data.phone)) errors.phone = 'invalid';
  if (!data.message) errors.message = 'required';
  else if (data.message.length < 10 && !errors.message) errors.message = 'invalid';
  if (!data.consent) errors.consent = 'required';

  return { ok: Object.keys(errors).length === 0, data, errors };
}

export const INQUIRY_LABEL: Record<InquiryType, string> = {
  buyer: 'Coffee buyer',
  farmer: 'Farmer / cooperative selling coffee',
};
