import { ArticleCard } from "@/components/ArticleCard";
import news from "@/data/news.json";

const Home = () => {
  return (
    <div>
      <header className="justify-center w-fit mx-auto">
        <div className="text-[#C44724] font-['Inter'] font-bold text-[10px] leading-[145%] tracking-normal">STAY CURIOUS</div>
        <div className="flex">
          <div className="text-[#22241F] font-['Inter'] font-bold text-[36px] leading-[145%] tracking-normal">The latest stories.</div>
          <div className="text-[#65675F] font-['Inter'] font-normal text-[12px] leading-[145%] tracking-normal">Big ideas. Fresh voices. Worth your time.</div>
        </div>
        <div className="w-full max-w-[1184px] mx-auto h-[1px] bg-[#E2E2DA]"></div>
        <div className="flex gap-[28px]">
          <button className="">All stories</button>
          <button className="">World</button>
          <button className="">Technology</button>
          <button className="">Culture</button>
          <button className="">Travel</button>
          <button className="">Design</button>
          <button className="">Science</button>
          <button className="">Business</button>
        </div>
        <div className="w-full max-w-[1184px] mx-auto h-[1px] bg-[#E2E2DA]"></div>
        <div className="text-[#65675F] font-['Inter'] font-normal text-[12px] leading-[145%] tracking-normal">20 stories to explore</div>
      </header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px] justify-center pt-[41px] w-fit mx-auto">
        {news.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>

      <footer></footer>
    </div>
  );
};

export default Home;
