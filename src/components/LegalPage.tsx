import type { ReactNode } from 'react';

/** Shared shell for the static legal pages (server component). */
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="relative w-full min-h-screen bg-sand text-royal-navy overflow-hidden">
      <div className="noise-overlay" aria-hidden="true" />
      <article className="relative px-6 md:px-12 max-w-3xl mx-auto pt-32 md:pt-48 pb-24 [&_h2]:font-playfair [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-1 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-royal-red">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold leading-[0.9] uppercase mb-4">{title}</h1>
        <p className="text-sm opacity-60 mb-10">Last updated: {updated}</p>
        {children}
      </article>
    </div>
  );
}
