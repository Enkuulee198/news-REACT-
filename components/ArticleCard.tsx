import { categoryColors } from "@/lib/Category-colors";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ArticleCardtype = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  author: string;
  date: string;
  content: string[];
};

export const ArticleCard = (props: ArticleCardtype) => {
  const {
    id,
    title,
    slug,
    category,
    imageAlt,
    description,
    content,
    author,
    date,
    image,
  } = props;

  const categoryColor = categoryColors[category];

  return (
    <Link
      href={`/news/${slug}`}
      className="group shadow-[0_1px_5px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[4px_6px_14px_rgba(0,0,0,0.08),-4px_6px_14px_rgba(0,0,0,0.08)] transition-all duration-300 h-[500px] rounded-[16px] overflow-hidden bg-[#FAF9F6] w-full max-w-[376px]"
    >
      <div className="relative overflow-hidden rounded-t-[16px]">
        <img
          className="transition-transform duration-300 group-hover:scale-105 w-full min-w-[376px] mx-auto h-[235px] object-cover rounded-tl-[16px] rounded-tr-[16px]"
          src={image}
          alt={imageAlt}
        />
        <div
          className={`absolute top-4 left-4 w-[62px] h-[27px] text-[10px] flex justify-center items-center text-[#065F46] rounded-[100px] bg-[#ECFDF5] font-['Inter'] font-bold text-[10px] leading-[145%] tracking-[0%] ${categoryColor}`}
        >
          {category}
        </div>
      </div>
      <div className=" w-full min-w-[376px] mx-auto h-[265px] bg-[#FFFFFF] pl-[24px] pt-[24px] rounded-tl-none rounded-tr-none border border-[1px] rounded-[16px] border-[#E7E5E4]">
        <div className="transition-colors duration-300 group-hover:text-[#C44724] font-['Inter'] font-bold text-[20px] leading-[138%] tracking-[0%]">
          {title}
        </div>
        <div className="font-['Inter'] font-normal text-[14px] leading-[163%] tracking-[0%] mt-[12px]">
          {description}
        </div>
        <div className="w-[326px] h-[1px] bg-[#E2E2DA] mt-[44px]"></div>
        <div className="flex mt-[18.5px]">
          <div className={`w-10 h-10 rounded-[50%] flex justify-center items-center bg-[#ECFDF5] font-['Inter'] font-bold text-[12px] leading-[145%] tracking-[0%] ${categoryColor}`}>
            {author
              .split(" ")
              .map((word) => word[0].toUpperCase())
              .join("")}
          </div>
          <div className="ml-[12px]">
            <div className={`font-['Inter'] font-bold text-xs leading-[145%] tracking-[0%]`}>
              {author}
            </div>
            <div className="font-['Inter'] font-normal text-[11px] leading-[145%] tracking-[0%]">
              {date}
            </div>
          </div>
          <div className="ml-[152px] w-[36px] h-[36px] flex justify-center items-center rounded-full bg-[#FFF7ED] transition-colors duration-300 group-hover:bg-[#C44724]">
            <ArrowUpRight
              className="text-[#C44724] group-hover:text-white transition-colors duration-300"
              size={17}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
