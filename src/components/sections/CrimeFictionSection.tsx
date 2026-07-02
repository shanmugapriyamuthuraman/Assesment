"use client";

import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

import Img1 from "@/assets/crimeFictionImg1.png";
import Img2 from "@/assets/crimeFictionImg2.png";
import Img3 from "@/assets/crimeFictionImg3.png";
import Img4 from "@/assets/crimeFictionImg4.png";
import Img5 from "@/assets/crimeFictionImg5.png";

const books: { id: string; title: string; author: string; cover: StaticImageData }[] = [
  { id: "past-is-rising",       title: "The Past Is Rising",        author: "Morgan Housel", cover: Img1 },
  { id: "death-before-breakfast", title: "The Psychology of Money", author: "Morgan Housel", cover: Img2 },
  { id: "five-feet-apart",      title: "The Psychology of Money",   author: "Morgan Housel", cover: Img3 },
  { id: "looking-for-la-la",   title: "The Psychology of Money",    author: "Morgan Housel", cover: Img4 },
  { id: "curtain-call",         title: "The Psychology of Money",   author: "Morgan Housel", cover: Img5 },
  { id: "past-is-rising",       title: "The Psychology of Money",   author: "Morgan Housel", cover: Img5 },
  { id: "death-before-breakfast", title: "The Psychology of Money", author: "Morgan Housel", cover: Img4 },
];

function BookCard({ item }: { item: (typeof books)[0] }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [beating, setBeating] = useState(false);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setWishlisted(!wishlisted);
    setBeating(true);
    setTimeout(() => setBeating(false), 350);
  };

  return (
    <div className="flex-shrink-0 w-[155px] flex flex-col group">
      <Link href={`/book/${item.id}`} className="block">
        <div className="relative w-full h-[210px] rounded-xl overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-lg transition-all duration-300">
          <Image src={item.cover} alt={item.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="155px" />
          <button
            onClick={toggleWishlist}
            className="absolute top-2 right-2 w-6 h-6 bg-white/90 rounded-full flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
          >
            <Heart size={12} className={`transition-colors duration-200 ${beating ? "heart-beat" : ""} ${wishlisted ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
          </button>
        </div>
      </Link>
      <div className="mt-2 px-0.5 flex flex-col flex-1">
        <p className="text-[12px] font-semibold text-gray-800 leading-tight h-[34px] line-clamp-2 hover:text-gray-600 transition-colors">{item.title}</p>
        <p className="text-[11px] text-blue-500 mt-1 truncate">{item.author}</p>
        <div className="mt-auto pt-2">
          <button className="btn-press w-full py-2 bg-gray-900 text-white text-[11px] font-medium rounded-lg hover:bg-gray-700 transition-colors">
            Read &amp; Chat
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CrimeFictionSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft]   = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir: "left" | "right") =>
    scrollRef.current?.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });

  const onScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  };

  return (
    <section className="py-6 px-6">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-base font-bold text-gray-900">Crime Fiction</h2>
        <div className="flex gap-1.5">
          <button onClick={() => scroll("left")} disabled={!canScrollLeft}
            className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
            <ChevronLeft size={14} />
          </button>
          <button onClick={() => scroll("right")} disabled={!canScrollRight}
            className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
      <p className="text-xs text-gray-400 mb-4">Trending books among readers</p>
      <div ref={scrollRef} onScroll={onScroll}
        className="flex items-stretch gap-4 overflow-x-auto scrollbar-hide pb-2">
        {books.map((item, i) => <BookCard key={i} item={item} />)}
      </div>
    </section>
  );
}
