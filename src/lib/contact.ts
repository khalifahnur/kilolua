import type { InquiryType } from './contactSchema';

/** Opens the site-wide contact drawer, optionally with the inquiry type pre-selected. */
export function openContact(type?: InquiryType) {
  window.dispatchEvent(new CustomEvent('openContact', { detail: { type } }));
}
