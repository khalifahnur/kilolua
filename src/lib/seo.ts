import type { Metadata } from 'next';
import { OG_IMAGE, SITE, absoluteUrl } from '../data/site';

type PageSeo = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

/** Shared per-page metadata: canonical URL plus matching Open Graph and Twitter cards. */
export function pageMetadata({ title, description, path, noIndex }: PageSeo): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website', siteName: SITE.name, images: [OG_IMAGE] },
    twitter: { card: 'summary_large_image', title, description, images: [OG_IMAGE] },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
