import Link from 'next/link';
import LegalPage from '../../src/components/LegalPage';
import { SITE, emailHref } from '../../src/data/site';
import { pageMetadata } from '../../src/lib/seo';

export const metadata = pageMetadata({
  title: 'Terms & Conditions',
  description: `Terms for using the ${SITE.name} website.`,
  path: '/terms',
});

export default function Page() {
  return (
    <LegalPage title="Terms & Conditions" updated="29 October 2026">
      <p>
        By using this website you agree to these terms. The site is operated by {SITE.legalName} (“Kilolua”).
      </p>

      <h2>Information on this site</h2>
      <p>
        The content on this site is provided for general information about Kilolua and the coffee we trade. It is not
        a binding offer. Availability, specifications and prices of any coffee are confirmed only in writing between
        Kilolua and the buyer or seller.
      </p>

      <h2>Enquiries</h2>
      <p>
        Sending an enquiry through the contact form does not create a contract. Please do not include confidential or
        sensitive information in your message. How we handle the information you send is described in our{' '}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The Kilolua name, logo, text, images and other content on this site belong to Kilolua or its licensors and may
        not be copied or reused without our permission.
      </p>

      <h2>Third-party links</h2>
      <p>
        This site may link to third-party websites, such as Stadipass. We are not responsible for the content or
        practices of those sites.
      </p>

      <h2>Liability</h2>
      <p>
        We work to keep the site accurate and available, but provide it “as is”. To the fullest extent permitted by
        law, Kilolua is not liable for losses arising from your use of the site.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of Kenya.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={emailHref}>{SITE.email}</a>.
      </p>
    </LegalPage>
  );
}
