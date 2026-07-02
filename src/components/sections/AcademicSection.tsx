"use client";

import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

import Img1 from "@/assets/AcademicImg1.png";
import Img2 from "@/assets/AcademicImg2.png";
import Img3 from "@/assets/Academic3.png";
import Img4 from "@/assets/AcademicImg4.png";
import Img5 from "@/assets/AcademicImg5.png";

const books: { id: string; title: string; author: string; cover: StaticImageData }[] = [
  { id: "indian-polity",   title: "The Psychology of Money", author: "Morgan Housel", cover: Img1 },
  { id: "upsc-guide",      title: "The Psychology of Money", author: "Morgan Housel", cover: Img2 },
  { id: "physics-book",    title: "The Psychology of Money", author: "Morgan Housel", cover: Img3 },
  { id: "indian-polity",   title: "The Psychology of Money", author: "Morgan Housel", cover: Img4 },
  { id: "upsc-guide",      title: "The Psychology of Money", author: "Morgan Housel", cover: Img5 },
  { id: "physics-book",    title: "The Psychology of Money", author: "Morgan Housel", cover: Img2 },
  { id: "indian-polity",   title: "The Psychology of Money", author: "Morgan Housel", cover: Img4 },
];

function BookCard({ item }: { item: (typeof books)[0] }) {
  const [w, setW] = useState(false);
  return (
    <div className="flex-shrink-0 w-[155px] flex flex-col group">
      <Link href={`/book/${item.id}`} className="block">
        <div className="relative w-full h-[210px] rounded-xl overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
          <Image src={item.cover} alt={item.title} fill className="object-cover" sizes="155px" />
          <button onClick={(e) => { e.preventDefault(); setW(!w); }}
            className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow">
            <Heart size={12} className={w ? "fill-red-500 text-red-500" : "text-gray-400"} />
          </button>
        </div>
      </Link>
      <div className="mt-2 px-0.5 flex flex-col flex-1">
        <p className="text-[12px] font-semibold text-gray-800 leading-tight h-[34px] line-clamp-2">{item.title}</p>
        <p className="text-[11px] text-blue-500 mt-1 truncate">{item.author}</p>
        <div className="mt-auto pt-2">
          <button className="w-full py-2 bg-gray-900 text-white text-[11px] font-medium rounded-lg hover:bg-gray-700 transition-colors">Read &amp; Chat</button>
        </div>
      </div>
    </div>
  );
}

export default function AcademicSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [cl, setCl] = useState(false);
  const [cr, setCr] = useState(true);
  const scroll = (d: "left" | "right") => scrollRef.current?.scrollBy({ left: d === "right" ? 340 : -340, behavior: "smooth" });
  const onScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCl(scrollLeft > 0); setCr(scrollLeft < scrollWidth - clientWidth - 4);
  };
  return (
    <section className="py-6 px-6">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-base font-bold text-gray-900">Academics</h2>
        <div className="flex gap-1.5">
          <button onClick={() => scroll("left")} disabled={!cl} className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"><ChevronLeft size={14} /></button>
          <button onClick={() => scroll("right")} disabled={!cr} className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"><ChevronRight size={14} /></button>
        </div>
      </div>
      <p className="text-xs text-gray-400 mb-4">Trending books among readers</p>
      <div ref={scrollRef} onScroll={onScroll} className="flex items-stretch gap-4 overflow-x-auto scrollbar-hide pb-2">
        {books.map((item, i) => <BookCard key={i} item={item} />)}
      </div>
    </section>
  );
}
