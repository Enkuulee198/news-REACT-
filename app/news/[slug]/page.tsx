import { ArticleCard } from "@/components/ArticleCard";
import data from "@/data/news.json";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
export const instant = false;
import Link from "next/link";

const WORD = "font-['Inter'] font-normal  leading-[145%] tracking-[0%]";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return data.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = data.find((article) => article.slug === slug);

  if (!article) notFound();



  return {};
}



const ArticleDetailPage = async ({ params }: Props) => {
  const { slug } = await params;

  const foundArtickle = data.find((article) => article.slug === slug);

  if (!foundArtickle) {
    notFound();
  }
  const Recomended = data
 .filter (
  (article) => (
    article.category === foundArtickle.category && article.slug !== foundArtickle.slug
   ) 
  ) 
  .slice(0, 2);

  return (
    <div className="Dinamic page pl-[128px] pr-[128px] ">
      <header className="pl-[80px]">
        <div className="ml-[-80px] mt-[24px] gap-[12px] flex items-center">
          <Link href="/" className=" text-[#22241F] font-['Inter'] hover:text-[#C44724] transition-colors duration-300 font-bold text-[12px] leading-[145%] tracking-[0%]">
            ← All stories
          </Link>
          <div className="text-[#65675F] font-['Inter'] font-normal text-[12px] leading-[145%] tracking-[0%]">
            /
          </div>
          <div className="text-[#65675F] font-['Inter'] font-normal text-[12px] leading-[145%] tracking-[0%]">
            World
          </div>
          <div className="text-[#65675F] font-['Inter'] font-normal text-[12px] leading-[145%] tracking-[0%]">
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
          className="w-full mt-[40px] h-[514.78px]"
          src={foundArtickle.image}
          alt={foundArtickle.imageAlt}
        />
        <div className="text-[#65675F] font-['Inter'] font-normal text-[10px] leading-[145%] tracking-[0%] mt-[12px]">
          Modern architecture surrounded by greenery Illustrative photography ·
          Unsplash
        </div>
        <div className="The story w-[full] h-[854px] flex items-center flex-col">
          <div className="aimaar ih text  text-[#44403C] bg-[#FFFFFF] mt-[56px] pl-[40px] pr-[40px] max-w-[768px] h-[596px] border border-[1px] rounded-[16px] border-[#E2E2DA]">
            <div className="text-[#C44724] font-['Inter'] font-bold text-[10px] leading-[145%] tracking-[0%] mt-[40px]">
              ━━ THE STORY
            </div>
            <div className="text-[#44403C] font-['Noto_Serif'] font-normal text-[20px] leading-[190%] mt-[24px]">
              {foundArtickle.content}
            </div>
            <div className="text-[#C44724] font-['Inter'] font-bold text-[16px] leading-[145%] tracking-[0%] mt-[24px] text-center">
              • • •
            </div>
          </div>
          <div className="text-[#65675F] font-['Inter'] font-normal text-[11px] leading-[145%] tracking-[0%] mt-[16px] text-center">
            Fictional sample story · The Daily learning edition
          </div>
          <div className="w-[694px] h-[98px] mt-[16px] justify-between flex bg-[#FFF7ED] rounded-[16px]  items-center p-[24px]">
            <div className="">
              <div className="text-[#22241F] font-['Inter'] font-semibold text-[18px] leading-[145%] tracking-[0%]">
                A little more curiosity?
              </div>
              <div className="text-[#65675F] font-['Inter'] font-normal text-[14px] leading-[145%] tracking-[0%]">
                Your next good read is just around the corner.
              </div>
            </div>
            <button className="text-[#FFFFFF] bg-[#22241F] w-[98px] h-[37px] rounded-[100px] font-['Inter'] font-normal text-[12px] leading-[145%] tracking-[0%]">
              All stories ↗
            </button>
          </div>
        </div>
      </main>
      <section>
        <div className="text-[#C44724] font-['Inter'] font-bold text-[10px] leading-[145%] tracking-[0%]">KEEP YOUR CURIOSITY GOING</div>
        <div className="text-[#22241F] font-['Inter'] font-bold text-[30px] leading-[145%] tracking-[0%]">More to discover.</div>
        <div className="Small page grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {Recomended.map((article)=> (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticleDetailPage;




