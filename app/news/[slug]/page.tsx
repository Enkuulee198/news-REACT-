import { ArticleCard } from "@/components/ArticleCard";
import data from "@/data/news.json";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
export const instant = false;
import Link from "next/link";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = data.find((article) => article.slug === slug);
  if (!article) notFound();

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      type: "article",
      siteName: "The Daily",
      title: article.title,
      description: article.description,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

const WORD = "font-['Inter'] font-normal  leading-[145%] tracking-[0%]";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return data.map((article) => ({
    slug: article.slug,
  }));
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { slug } = await params;

//   const article = data.find((article) => article.slug === slug);

//   if (!article) notFound();

//   return {};
// }

const ArticleDetailPage = async ({ params }: Props) => {
  const { slug } = await params;

  const foundArtickle = data.find((article) => article.slug === slug);

  if (!foundArtickle) {
    notFound();
  }
  const Recomended = data
    .filter(
      (article) =>
        article.category === foundArtickle.category &&
        article.slug !== foundArtickle.slug,
    )
    .slice(0, 2);

  return (
    <div className="Dinamic page flex flex-col flex-wrap max-w-7xl w-full mx-auto">
      <header className="pl-[80px]">
        <div className="flex pt-[24px] justify-between">
          <div className="flex items-center gap-[12px]">
            <Link
              href="/"
              className="ml-[-80px] hover:text-[#C44724] flex items-center"
            >
              ← All stories
            </Link>

            <div className="text-[#65675F] font-['Inter'] font-normal text-[12px] leading-[145%] tracking-[0%]">
              /
            </div>

            <div className="text-[#65675F] font-['Inter'] font-normal text-[12px] leading-[145%] tracking-[0%]">
              {foundArtickle.category}
            </div>
          </div>
          <div className="text-[#65675F] font-['Inter'] font-normal mt-[5px] text-[12px] leading-[145%] tracking-[0%]">
            THE DAILY EDIT
          </div>
        </div>
        <div className="flex  items-center mt-[56px] gap-[12px]">
          <div className="text-[#065F46] w-[62px] h-[27px] rounded-[100px] bg-[#ECFDF5] font-['Inter'] font-bold text-[10px] leading-[145%] tracking-[0%] flex justify-center items-center">
            WORLD
          </div>
          <div className="text-[#65675F] font-['Inter'] font-normal text-[11px] leading-[145%] tracking-[0%]">
            — THE DAILY
          </div>
        </div>
        <div className="w-[62px] h-[27px] text-[#065F46] font-['Inter'] font-bold text-[10px] leading-[145%] tracking-[0%]"></div>
        <div className="text-[#65675F] font-['Inter'] font-normal text-[11px] leading-[145%] tracking-[0%]"></div>
        <div className="text-[#0C0A09] font-['Inter'] font-bold text-[60px] leading-[112%] tracking-[0%]">
          The future of cities is greener than you think
        </div>
        <div className="text-[#57534E] mt-[20px] font-['Inter'] font-normal text-[20px] leading-[163%] tracking-[0%]">
          From rooftop gardens to car-free streets, a quieter urban revolution
          is taking root.
        </div>
        <div className="w-[full] h-[1px] bg-[#E2E2DA] mt-[20px]"></div>
        <div className="flex mt-[20px] gap-[24px]">
          <div className="bg-[#ECFDF5] text-[#065F46] w-[48px] h-[48px] rounded-[50%] flex justify-center items-center font-['Inter'] font-bold text-[14px] leading-[145%] tracking-[0%]">
            {foundArtickle.author
              .split(" ")
              .map((word) => word[0].toUpperCase())
              .join("")}
          </div>
          <div className="author">
            <div className="text-[#65675F] font-['Inter'] font-bold text-[10px] leading-[145%] tracking-[0%]">
              WRITTEN BY
            </div>
            <div className="text=[#22241F] font-['Inter'] font-bold text-[14px] leading-[145%] tracking-[0%]">
              {foundArtickle.author}
            </div>
          </div>
          <div className="date">
            <div className="text-[#65675F] font-['Inter'] font-bold text-[10px] leading-[145%] tracking-[0%]">
              PUBLISHED
            </div>
            <div className="text-[#22241F] font-['Inter'] font-normal text-[14px] leading-[145%] tracking-[0%]">
              {foundArtickle.date}
            </div>
          </div>
          <div className="time">
            <div className="text-[#65675F] font-['Inter'] font-bold text-[10px] leading-[145%] tracking-[0%]">
              READING TIME
            </div>
            <div className="text-[#22241F] font-['Inter'] font-normal text-[14px] leading-[145%] tracking-[0%]">
              1 min read
            </div>
          </div>
        </div>
      </header>
      <main>
        <img
          className="mx-auto mt-[40px] w-[1184px] flex justify-center h-[514.78px]"
          src={foundArtickle.image}
          alt={foundArtickle.imageAlt}
        />
        <div className="text-[#65675F] font-['Inter'] font-normal text-[10px] leading-[145%] tracking-[0%] mt-[12px]">
          Modern architecture surrounded by greenery Illustrative photography ·
          Unsplash
        </div>
        <div className="The story w-[full] h-[854px] flex items-center flex-col">
          <div className="aimaar ih text  text-[#44403C] bg-[#FFFFFF] mt-[56px] pl-[40px] pr-[40px] max-w-[768px] h-[596px] border border-[1px] rounded-[16px] border-[#E2E2DA]">
            <div className="flex gap-[8px]">
              <div className="bg-[#C44724] w-[35px] h-[5px] rounded-[999px] mt-[47px]"></div>
              <div className="text-[#65675F] font-['Inter'] font-bold text-[13px] leading-[145%] tracking-[0%] mt-[40px]">
                THE STORY
              </div>
            </div>
            <div className="text-[#44403C] font-['Noto_Serif'] font-normal text-[20px] leading-[190%] mt-[24px]">
              {foundArtickle.content.map((paragraph, index) => (
                <p key={index} className="mb-[32px]">
                  {index === 0 ? (
                    <>
                      <span className="float-left text-[#C44724] text-[44px] leading-[0.9] mr-[8px] mt-[4px]">
                        {paragraph[0]}
                      </span>
                      {paragraph.slice(1)}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
            <div className="text-[#C44724] font-['Inter'] font-bold text-[16px] leading-[145%] tracking-[0%] mt-[24px] text-center">
              • • •
            </div>
          </div>
          <div className="text-[#65675F] font-['Inter'] font-normal text-[11px] leading-[145%] tracking-[0%] mt-[16px] text-center">
            Fictional sample story · The Daily learning edition
          </div>
          <div className="w-full max-w-[694px] min-h-[98px] mt-[16px] justify-between flex bg-[#FFF7ED] rounded-[16px] items-center p-[24px]">
            <div className="">
              <div className="text-[#22241F] font-['Inter'] font-semibold text-[18px] leading-[145%] tracking-[0%]">
                A little more curiosity?
              </div>
              <div className="text-[#65675F] font-['Inter'] font-normal text-[14px] leading-[145%] tracking-[0%]">
                Your next good read is just around the corner.
              </div>
            </div>
            <Link
              href="/"
              className="hover:bg-[#C44724] transition-colors duration-300 flex justify-center items-center text-[#FFFFFF] bg-[#22241F] w-[98px] h-[37px] rounded-[100px] font-['Inter'] font-normal text-[12px] leading-[145%] tracking-[0%]"
            >
              All stories ↗
            </Link>
          </div>
        </div>
      </main>
      <section>
        <div className="text-[#C44724] font-['Inter'] font-bold text-[10px] leading-[145%] tracking-[0%]">
          KEEP YOUR CURIOSITY GOING
        </div>
        <div className="text-[#22241F] font-['Inter'] font-bold text-[30px] leading-[145%] tracking-[0%]">
          More to discover.
        </div>
        <div className="Small page grid grid-cols-1 gap-x-7 gap-y-10 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
          {Recomended.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticleDetailPage;

