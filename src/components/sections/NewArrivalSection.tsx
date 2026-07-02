"use client";

import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Img1 from "@/assets/NewArrivalImg1.png";
import Img2 from "@/assets/NewArrivalImg2.png";
import Img3 from "@/assets/NewArrivalImg3.png";
import Img4 from "@/assets/NewArrivalImg4.png";
import Img5 from "@/assets/NewArrivalImg5.png";
import Img6 from "@/assets/NewArrivalImg6.png";

const newArrivals: {
  id: string;
  title: string;
  author: string;
  cover: StaticImageData;
}[] = [
  {
    id: "psychology-of-money",
    title: "The Psychology of...",
    author: "by Morgan Housel",
    cover: Img1,
  },
  {
    id: "death-before-breakfast",
    title: "Death before Breakfast",
    author: "by George Bellairs",
    cover: Img2,
  },
  {
    id: "a-girl-named-harper",
    title: "A Girl Named Harper",
    author: "by Morgan House",
    cover: Img3,
  },
  {
    id: "harry-potter-1",
    title: "Harry Potter",
    author: "by J.K Rowling",
    cover: Img4,
  },
  {
    id: "harry-potter-2",
    title: "Harry Potter II",
    author: "by J.K Rowling",
    cover: Img5,
  },
  {
    id: "casual-vacancy",
    title: "The Casual Vacancy",
    author: "by J.K Rowling",
    cover: Img1,
  },
  {
    id: "casual-vacancy",
    title: "The Casual Vacancy",
    author: "by J.K Rowling",
    cover: Img2,
  },
  {
    id: "casual-vacancy",
    title: "The Casual Vacancy",
    author: "by J.K Rowling",
    cover: Img3,
  },
  {
    id: "casual-vacancy",
    title: "The Casual Vacancy",
    author: "by J.K Rowling",
    cover: Img4,
  },
  {
    id: "casual-vacancy",
    title: "The Casual Vacancy",
    author: "by J.K Rowling",
    cover: Img5,
  },
];

function NewArrivalCard({ item }: { item: (typeof newArrivals)[0] }) {
  return (
    <Link href={`/book/${item.id}`} className="flex-shrink-0 w-[155px] group">
      <div className="relative w-full h-[220px] rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
        <Image
          src={item.cover}
          alt={item.title}
          fill
          className="object-cover"
          sizes="155px"
        />
        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        {/* Text at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
          <p className="text-white text-[11px] font-semibold leading-tight line-clamp-2">
            {item.title}
          </p>
          <p className="text-white/70 text-[10px] mt-0.5">{item.author}</p>
        </div>
      </div>
    </Link>
  );
}

export default function NewArrivalSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? 320 : -320,
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
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-base font-bold text-gray-900">New Arrivals</h2>
        <div className="flex gap-1.5">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="p-1.5 rounded-full border border-gray-200 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="p-1.5 rounded-full border border-gray-200 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
      <p className="text-xs text-gray-400 mb-4">Trending books among readers</p>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
      >
        {newArrivals.map((item, i) => (
          <NewArrivalCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
