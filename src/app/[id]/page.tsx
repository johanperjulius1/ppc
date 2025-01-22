import { casinos } from "@/lib/casinos-data";

export async function generateStaticParams() {
  return casinos.map((casino) => ({
    id: casino.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default function CasinoPage({ params }: { params: { id: string } }) {
  const casino = casinos.find(
    (c) => c.title.toLowerCase().replace(/\s+/g, "-") === params.id
  );

  if (!casino) {
    return <p>Casino not found</p>;
  }

  return (
    <div>
      <h1>{casino.title}</h1>
      <p>{casino.excerpt}</p>
      <a href={casino.affiliateLink}>Visit {casino.title}</a>
    </div>
  );
}
