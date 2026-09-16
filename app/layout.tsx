import '../src/index.css';
import ClientLayout from '../src/components/ClientLayout';

export const metadata = {
  title: 'Kilolua',
  description: 'Experience true freshness and quality, where taste meets innovation.',
  openGraph: {
    title: 'Kilolua',
    description: 'Experience true freshness and quality, where taste meets innovation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
