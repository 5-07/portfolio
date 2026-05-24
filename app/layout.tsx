import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-zeynas-projects.vercel.app'),
  title: 'Muzaina Munir — Artist & Engineer | Karachi',
  description: 'Muzaina Munir is a creative technologist and full-stack developer based in Karachi, Pakistan. Available for freelance web development, AI integration, and MVPs.',
  keywords: ['web developer karachi', 'freelance developer pakistan', 'creative technologist', 'muzaina munir', 'next.js developer', 'AI integration'],
  authors: [{ name: 'Muzaina Munir' }],
  openGraph: {
    title: 'Muzaina Munir — Artist & Engineer',
    description: 'Creative technologist building websites, AI apps & MVPs. Based in Karachi.',
    url: 'https://portfolio-zeynas-projects.vercel.app',
    siteName: 'Muzaina Munir',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Muzaina Munir Portfolio' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muzaina Munir — Artist & Engineer',
    description: 'Creative technologist building websites, AI apps & MVPs.',
    images: ['/images/og-image.jpg'],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Muzaina Munir',
  url: 'https://portfolio-zeynas-projects.vercel.app',
  jobTitle: 'Creative Technologist & Full-Stack Developer',
  worksFor: { '@type': 'Organization', name: 'Freelance' },
  address: { '@type': 'PostalAddress', addressLocality: 'Karachi', addressCountry: 'PK' },
  sameAs: [
    'https://github.com/5-07',
    // add your linkedin/instagram URLs here
  ],
  knowsAbout: ['Web Development', 'Artificial Intelligence', 'UI/UX Design', 'React', 'Next.js'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
