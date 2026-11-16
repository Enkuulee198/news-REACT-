

import { Metadata } from "next";
import articles from "@/data/news.json";
// import { useState , MouseEvent} from "react";
import ArticleFeed from "@/components/ArticleFeed";

import React from "react";
import { log } from "console";

const firstArticle = articles[0];

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    siteName: "The Daily",
    title: "The Daily — A fresh perspective",
    description:
      "A little curiosity goes a long way. Explore 20 sample stories about design, technology, culture, and the world around us.",
    images: firstArticle
      ? [{ url: firstArticle.image, alt: firstArticle.imageAlt }]
      : [],
  },
};

const HomePage = () => {
  return <ArticleFeed/>;
};

export default HomePage;



// const categories = [
//   "All stories",
//   ...new Set(Data.map((article) => article.category)),
// ];

// const Home = () => {
//   const [category, setCategory] = useState("All stories");
// };

// const handleClick =(event:MouseEvent<HTMLButtonElement> )=> {
//   setCategory{event.currentTarget.id)}
  
// }

// const filtered = data.filter((article)=>article.category !=="All stories" || article.category === category);

// const Home = () => {
//   return (
//     <div className="px-30 space-x-3">
//       {categories.map((category) => (
//         <button id={category} onClick={(handleClick)=>{}} key={category}>{category} </button>
//       ))}

//       <div className="grid grid-cols-3 gap-3 mt-30">
//         {Data.map((article) => (
//           <div key={article.id}>{article.title}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


// import { ArticleCard } from "@/components/ArticleCard";
// import news from "@/data/news.json";

// const Home = () => {
//   return (
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
//   );
// };

// export default Home;
