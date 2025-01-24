import { casinos } from "@/lib/casinos-data";
import { marked } from "marked";
import Head from "next/head";

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

  const htmlContent = marked(casino.content);

  return (
    <div>
      <Head>
        <title>{casino.title}</title>
        <meta name="description" content={casino.metaDescription} />
      </Head>
      <h1>{casino.title}</h1>
      <p>{casino.excerpt}</p>
      <a href={casino.affiliateLink}>Visit {casino.title}</a>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
