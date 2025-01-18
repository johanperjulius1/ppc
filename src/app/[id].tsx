// app/reviews/[id]/page.tsx
import { useCasinoContext } from '@/context/CasinoContext';
import { notFound } from 'next/navigation';

type ReviewPageProps = {
  params: { id: string }; // Dynamic route parameter
};

export default function ReviewPage({ params }: ReviewPageProps) {
  const { casinos } = useCasinoContext();

  const casino = casinos.find(
    (c) => c.title.toLowerCase().replace(/\s+/g, '-') === params.id
  );

  if (!casino) {
    notFound();
  }

  return (
    <>
      <h1>{casino.title}</h1>
      <p>{casino.excerpt}</p>
      <a href={casino.affiliateLink}>Visit {casino.title}</a>
    </>
  );
}

// Define static paths
export async function generateStaticParams() {
  const { getAllPostsData } = await import('@/lib/toplist-utils');
  const casinos = getAllPostsData();

  return casinos.map((casino) => ({
    id: casino.title.toLowerCase().replace(/\s+/g, '-'),
  }));
}
