"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import AuthorImg1 from "@/assets/AuthorImg1.png";
import AuthorImg2 from "@/assets/AuthorImg2.png";
import AuthorImg3 from "@/assets/AuthorImg3.png";
import AuthorBook1 from "@/assets/AuthorBook1.png";
import AuthorBook2 from "@/assets/AuthorBook2.png";
import AuthorBook3 from "@/assets/AuthorBook3.png";

const authorCards: {
  authorImg: StaticImageData;
  bookImg: StaticImageData;
  title: string;
  author: string;
  authorId: string;
}[] = [
  { authorImg: AuthorImg1, bookImg: AuthorBook1, title: "The Psychology of Money", author: "by Morgan Housel",   authorId: "morgan-housel" },
  { authorImg: AuthorImg2, bookImg: AuthorBook2, title: "The Psychology of Money", author: "by Morgan Housel",   authorId: "morgan-housel" },
  { authorImg: AuthorImg3, bookImg: AuthorBook3, title: "The Psychology of Money", author: "by Morgan Housel",   authorId: "morgan-housel" },
  // repeat for more carousel items
  { authorImg: AuthorImg1, bookImg: AuthorBook2, title: "The Psychology of Money", author: "by Morgan Housel",   authorId: "morgan-housel" },
  { authorImg: AuthorImg2, bookImg: AuthorBook3, title: "The Psychology of Money", author: "by Morgan Housel",   authorId: "morgan-housel" },
  { authorImg: AuthorImg3, bookImg: AuthorBook1, title: "The Psychology of Money", author: "by Morgan Housel",   authorId: "morgan-housel" },
];

function AuthorCard({ card }: { card: (typeof authorCards)[0] }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="flex-shrink-0 w-[230px] flex flex-col group">
      {/* Two images side by side */}
      <div className="relative w-full h-[200px] rounded-xl overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition-shadow flex">
        {/* Author photo — left half */}
        <div className="relative w-1/2 h-full">
          <Image src={card.authorImg} alt="Author" fill className="object-cover" sizes="115px" />
        </div>
        {/* Book cover — right half */}
        <div className="relative w-1/2 h-full">
          <Image src={card.bookImg} alt="Book" fill className="object-cover" sizes="115px" />
        </div>
        {/* Heart */}
        <button
          onClick={(e) => { e.preventDefault(); setWishlisted(!wishlisted); }}
          className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow z-10"
        >
          <Heart size={11} className={wishlisted ? "fill-red-500 text-red-500" : "text-gray-400"} />
        </button>
      </div>

      {/* Info */}
      <div className="mt-2 px-0.5 flex flex-col flex-1">
        <p className="text-[12px] font-semibold text-gray-800 leading-tight h-[34px] line-clamp-2">
          {card.title}
        </p>
        <p className="text-[11px] text-gray-400 mt-0.5">{card.author}</p>
        <div className="mt-auto pt-2">
          <button className="w-full py-2 bg-gray-900 text-white text-[11px] font-medium rounded-lg hover:bg-gray-700 transition-colors">
            Chat with Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AuthorSpotlight() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft]   = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 260 : -260, behavior: "smooth" });
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
        <h2 className="text-base font-bold text-gray-900">Speak with Authors</h2>
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
      <p className="text-xs text-gray-400 mb-4">Chat directly with author AI</p>

      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex items-stretch gap-4 overflow-x-auto scrollbar-hide pb-2"
      >
        {authorCards.map((card, i) => (
          <AuthorCard key={i} card={card} />
        ))}
      </div>
    </section>
  );
}
