import data from "@/data/news.json";
import { Metadata } from "next";
import { notFound } from "next/navigation";


type ArticleDetailPage = {
  params: Promise<{ slug: string }>;
};

type Props = { params : Promise <{ slug: string}>};

export async function generateStaticParams() {
  return data.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: props): Promise<Metadata> {
  const {slug} = await params;
  const article = articles.find((article)=> article.slug === slug);
  if (!article) notFound();
}

const ArticleDetailPage = async ({ params }: ArticleDetailPage) => {
  const { slug } = await params;



  const foundArtickle = data.find((article) => article.slug === slug);
  if (!foundArtickle) {
    notFound();
  }

  return (
    <div>
      <div>{foundArtickle?.title}</div>
    </div>
  );
};

export default ArticleDetailPage;
