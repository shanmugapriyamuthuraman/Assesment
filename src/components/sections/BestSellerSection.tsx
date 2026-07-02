"use client";

import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

import Img1 from "@/assets/BestSellerImg1.png";
import Img2 from "@/assets/BestSellerImg2.png";
import Img3 from "@/assets/BestSellerImg3.png";
import Img4 from "@/assets/BestSellerImg4.png";
import Img5 from "@/assets/BestSellerImg5.png";

const bestSellers: {
  id: string;
  title: string;
  author: string;
  cover: StaticImageData;
}[] = [
  {
    id: "million-to-one",
    title: "A Million to One",
    author: "Tony Faggioli",
    cover: Img1,
  },
  {
    id: "richest-man-babylon",
    title: "The Richest Man in Babylon",
    author: "George S. Clason",
    cover: Img2,
  },
  {
    id: "know-this-story",
    title: "I Know How This Story Ends",
    author: "Morgan Housel",
    cover: Img3,
  },
  {
    id: "psychology-of-money",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    cover: Img4,
  },
  {
    id: "a-girl-named-harper",
    title: "A Girl Named Harper",
    author: "Morgan Housel",
    cover: Img5,
  },
  {
    id: "a-girl-named-harper",
    title: "A Girl Named Harper",
    author: "Morgan Housel",
    cover: Img1,
  },

  {
    id: "a-girl-named-harper",
    title: "A Girl Named Harper",
    author: "Morgan Housel",
    cover: Img2,
  },
  {
    id: "a-girl-named-harper",
    title: "A Girl Named Harper",
    author: "Morgan Housel",
    cover: Img3,
  },
  {
    id: "a-girl-named-harper",
    title: "A Girl Named Harper",
    author: "Morgan Housel",
    cover: Img4,
  },
];

function BestSellerCard({ item }: { item: (typeof bestSellers)[0] }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    /* flex-col + h-full so every card stretches to the same row height */
    <div className="flex-shrink-0 w-[155px] flex flex-col group">
      {/* Cover */}
      <Link href={`/book/${item.id}`} className="block">
        <div className="relative w-full h-[210px] rounded-xl overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
          <Image
            src={item.cover}
            alt={item.title}
            fill
            className="object-cover"
            sizes="155px"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setWishlisted(!wishlisted);
            }}
            className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow"
          >
            <Heart
              size={12}
              className={
                wishlisted ? "fill-red-500 text-red-500" : "text-gray-400"
              }
            />
          </button>
        </div>
      </Link>

      {/* Info — flex-1 pushes button to the same row across all cards */}
      <div className="mt-2 px-0.5 flex flex-col flex-1">
        <Link href={`/book/${item.id}`}>
          {/* Fixed height for title — always 2 lines regardless of length */}
          <p className="text-[12px] font-semibold text-gray-800 leading-tight h-[34px] line-clamp-2">
            {item.title}
          </p>
        </Link>
        <Link href={`/author/morgan-housel`}>
          <p className="text-[11px] text-blue-500 mt-1 truncate hover:underline">
            {item.author}
          </p>
        </Link>
        {/* mt-auto ensures button always sits at the same level */}
        <Link href={`/book/${item.id}`} className="mt-auto pt-2 block">
          <button className="w-full py-2 bg-gray-900 text-white text-[11px] font-medium rounded-lg hover:bg-gray-700 transition-colors">
            Read &amp; Chat
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function BestSellerSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? 340 : -340,
      behavior: "smooth",
    });
  };

  const onScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  };

  return (
    <section className="py-6 px-6">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-base font-bold text-gray-900">Our Best Sellers</h2>
        <div className="flex gap-1.5">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
      <p className="text-xs text-gray-400 mb-4">Trending books among readers</p>

      {/* items-stretch → all cards same height → buttons align */}
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex items-stretch gap-4 overflow-x-auto scrollbar-hide pb-2"
      >
        {bestSellers.map((item, i) => (
          <BestSellerCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
