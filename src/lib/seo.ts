import { Metadata } from 'next';

const SITE_URL = 'https://sickleaverights.com';
const SITE_NAME = 'SickLeaveRights';

export function generateMetadata({
  title,
  description,
  path = '',
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image || `${SITE_URL}/og-default.png`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Free workplace rights tools: sick leave calculator, resignation letter generator, and employee rights checker.',
    sameAs: [],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function howToSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Write a Resignation Letter',
    description:
      'Step-by-step guide to writing a professional resignation letter using our free generator.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Your Details',
        text: 'Fill in your name, manager name, company, and last working day.',
      },
      {
        '@type': 'HowToStep',
        name: 'Choose a Tone',
        text: 'Select the style that fits your situation: professional, friendly, immediate, or others.',
      },
      {
        '@type': 'HowToStep',
        name: 'Generate & Preview',
        text: 'Click generate to see your personalized resignation letter instantly.',
      },
      {
        '@type': 'HowToStep',
        name: 'Copy or Download',
        text: 'Copy to clipboard or download as a .txt file for immediate use.',
      },
    ],
  };
}
