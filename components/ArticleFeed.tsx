// "use client"
// import data from "@/data/news.json";
// import { useState , MouseEvent} from "react";

// const categories = [
//   "All stories",
//   ...new Set(Data.map((article) => article.category)),
// ];

// const ArticleFeed = () => {
//   const [category, setCategory] = useState("All stories");
// };

// const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
//   setCategory(event.currentTarget.id);
// }

// const filtered = data.filter((article)=>article.category !=="All stories" || article.category === category);

//   return (
//     <div>

//     <div className="max-w-7xl w-full mx-auto">
//       <header className="pt-[40px]">
//         <div className="text-[#C44724] font-['Inter'] font-bold text-[10px] leading-[145%] tracking-normal">
//           STAY CURIOUS
//         </div>
//         <div className="flex justify-between">
//           <div className="text-[#22241F] font-['Inter'] font-bold text-[36px] leading-[145%] tracking-normal">
//             The latest stories.
//           </div>
//           <div className="text-[#65675F] font-['Inter'] font-normal text-[12px] mt-[20px] leading-[145%] tracking-normal">
//             Big ideas. Fresh voices. Worth your time.
//           </div>
//         </div>
//         <div className="w-full mt-[24px] mx-auto h-[1px] bg-[#E2E2DA]"></div>
//         <div className="mt-[26px] flex gap-[28px]">
//           <button className="text-[#65675F] font-['Inter'] font-normal text-[12px] leading-[145%] tracking-[0%]">All stories</button>
//           <button className="text-[#65675F] font-['Inter'] font-normal text-[12px] leading-[145%] tracking-[0%]">World</button>
//           <button className="text-[#65675F] font-['Inter'] font-normal text-[12px] leading-[145%] tracking-[0%]">Technology</button>
//           <button className="text-[#65675F] font-['Inter'] font-normal text-[12px] leading-[145%] tracking-[0%]">Culture</button>
//           <button className="text-[#65675F] font-['Inter'] font-normal text-[12px] leading-[145%] tracking-[0%]">Travel</button>
//           <button className="text-[#65675F] font-['Inter'] font-normal text-[12px] leading-[145%] tracking-[0%]">Design</button>
//           <button className="text-[#65675F] font-['Inter'] font-normal text-[12px] leading-[145%] tracking-[0%]">Science</button>
//           <button className="text-[#65675F] font-['Inter'] font-normal text-[12px] leading-[145%] tracking-[0%]">Business</button>
//         </div>
//         <div className="w-full mt-[26px] mx-auto h-[1px] bg-[#E2E2DA]"></div>
//         <div className="text-[#65675F] mt-[20px] font-['Inter'] font-normal text-[12px] leading-[145%] tracking-normal">
//           20 stories to explore
//         </div>
//       </header>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px] pt-[20px]">
//         {news.map((article, index) => (
//           <ArticleCard key={index} {...article} />
//         ))}
//       </div>

//       <footer></footer>
//     </div>

//     </div>
//   )

// export default ArticleFeed

"use client";

import data from "@/data/news.json";
import { useState, type MouseEvent } from "react";
import { ArticleCard } from "@/components/ArticleCard";

const categories = [
  "All stories",
  ...new Set(data.map((article) => article.category)),
];

const ArticleFeed = () => {
  const [category, setCategory] = useState("All stories");

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setCategory(event.currentTarget.id);
  };

  const filtered = data.filter(
    (article) => category === "All stories" || article.category === category,
  );

  return (
    <div>
      <div className="max-w-7xl w-full mx-auto">
        <header className="pt-[40px]">
          <div className="text-[#C44724] font-['Inter'] font-bold text-[10px] leading-[145%] tracking-normal">
            STAY CURIOUS
          </div>
          <div className="flex justify-between flex-wrap ">
            <div className="flex items-end gap-[2px]">
              <div className="text-[#22241F] font-['Inter'] font-bold text-[36px] leading-[145%] tracking-normal">
                The latest stories
              </div>
              <div className="w-[5px] h-[5px] mb-[13px] bg-[#C44724]"></div>
            </div>
            <div className="text-[#65675F] font-['Inter'] font-normal text-[12px] mt-[20px] leading-[145%] tracking-normal">
              Big ideas. Fresh voices. Worth your time.
            </div>
          </div>
          <div className="w-full mt-[24px] mx-auto h-[1px] bg-[#E2E2DA]"></div>

          <div className="mt-[26px] flex flex-wrap gap-[28px]">
            {categories.map((item) => (
              <button
                key={item}
                id={item}
                onClick={handleClick}
                className={`${
                  category === item
                    ? "bg-black text-white"
                    : "text-[#65675F] hover:bg-gray-100 "
                } font-['Inter'] font-normal h-[40px] text-[12px] leading-[145%] tracking-[0%] px-[12px] py-[6px] rounded-[5px]`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="w-full mt-[26px] mx-auto h-[1px] bg-[#E2E2DA]"></div>
          <div className="text-[#65675F] mt-[20px]  font-['Inter'] font-normal text-[12px] leading-[145%] tracking-normal">
            20 stories to explore
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-[28px] pt-[20px]">
          {filtered.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>

        <footer></footer>
      </div>
    </div>
  );
};

export default ArticleFeed;
