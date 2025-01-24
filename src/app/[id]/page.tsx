import { casinos } from "@/lib/casinos-data";
import { marked } from "marked";
import type { Metadata } from "next";
import Head from 'next/head';

export async function generateStaticParams() {
  return casinos.map((casino) => ({
    id: casino.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const casino = casinos.find(
    (c) => c.title.toLowerCase().replace(/\s+/g, "-") === params.id
  );

  if (!casino) {
    return {
      title: 'Casino Not Found',
      description: 'Casino not found',
      icons: {
        icon: '/favicon.ico',
      },
    };
  }

  return {
    title: `En recension av ${casino.title}  - skriven av Slotsa.se`,
    description: casino.metaDescription,
  };
}

export default function CasinoPage({ params }: { params: { id: string } }) {
  const casino = casinos.find(
    (c) => c.title.toLowerCase().replace(/\s+/g, "-") === params.id
  );

  if (!casino) {
    return <p>Casino not found</p>;
  }

  const htmlContent = marked(casino.content);

  // Comprehensive Schema JSON-LD
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": casino.title,
      "url": casino.affiliateLink,
      "logo": {
        "@type": "ImageObject",
        "url": `/images/logos/${casino.logoObject.logoName}`,
        "width": 600,
        "height": 60
      },
      "slogan": "Bästa casinon i Sverige",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": casino.rating.toString(),
        "reviewCount": "24" // Example static value; ideally dynamic
      }
    },
    "author": {
      "@type": "Person",
      "name": "Slotsa.se"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": casino.rating.toString(),
      "bestRating": "5"
    },
    "reviewBody": casino.excerpt,
    "publisher": {
      "@type": "Organization",
      "name": "Slotsa.se",
      "logo": {
        "@type": "ImageObject",
        "url": "/images/logo.png",
        "width": 600,
        "height": 60
      }
    },
    "datePublished": "2023-10-01", // Example date; make dynamic if possible
    "url": `/casino/${casino.title.toLowerCase().replace(/\s+/g, "-")}`
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <div>
        <h1>{casino.title}</h1>
        <p>{casino.excerpt}</p>
        <a href={casino.affiliateLink}>Visit {casino.title}</a>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </>
  );
}
