import LegalPage from '../../src/components/LegalPage';
import { SITE, emailHref } from '../../src/data/site';
import { pageMetadata } from '../../src/lib/seo';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: `How ${SITE.legalName} collects and uses personal information submitted through the kilolua.co.ke contact form.`,
  path: '/privacy',
});

export default function Page() {
  return (
    <LegalPage title="Privacy Policy" updated="29 October 2026">
      <p>
        {SITE.legalName} (“Kilolua”, “we”, “us”) operates this website. This policy explains what personal
        information we collect through the site and how we use it.
      </p>

      <h2>Information we collect</h2>
      <p>When you use our contact form we collect the details you choose to give us:</p>
      <ul>
        <li>your name, email address and (optionally) phone number;</li>
        <li>whether you are a coffee buyer or a farmer / cooperative selling coffee;</li>
        <li>
          business details relevant to your enquiry, such as company or farm name, location, coffee variety,
          volumes and destination country;
        </li>
        <li>the message you write to us.</li>
      </ul>
      <p>
        Your browser may also share technical information (such as IP address and browser type) with our hosting
        provider when you visit the site. We use your IP address in a limited way to prevent spam on the contact form.
      </p>

      <h2>How we use it</h2>
      <p>
        We use this information only to respond to your enquiry and to discuss buying or selling coffee with you. We
        do not sell your personal information, and we do not use it for unrelated marketing without your consent.
      </p>

      <h2>Who receives it</h2>
      <p>
        Your enquiry is delivered by email to the Kilolua team. We rely on email and website hosting providers to
        operate the site and deliver messages, and they process data on our behalf. We may disclose information where
        required by law.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiries for as long as needed to handle your request and to maintain a record of our business
        dealings, and then delete them.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask us at any time to access, correct or delete the personal information we hold about you, in line
        with the Kenya Data Protection Act, 2019 and other applicable law. Contact us at{' '}
        <a href={emailHref}>{SITE.email}</a>.
      </p>

      <h2>Contact</h2>
      <p>
        {SITE.legalName}, {SITE.address.organization}, {SITE.address.locality}, {SITE.address.countryName}.
        <br />
        Email: <a href={emailHref}>{SITE.email}</a> · Phone: <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>
      </p>
    </LegalPage>
  );
}
