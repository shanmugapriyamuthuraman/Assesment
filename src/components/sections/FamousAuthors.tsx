"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import AuthorImg1 from "@/assets/FamousAuthorImg1.png";
import AuthorImg2 from "@/assets/FamousAuthorImg2.png";
import AuthorImg3 from "@/assets/FamousAuthorImg3.png";
import AuthorImg4 from "@/assets/FamousAuthorImg4.png";
import AuthorImg5 from "@/assets/FamousAuthorImg5.png";

const famousAuthors: { id: string; name: string; photo: StaticImageData }[] = [
  { id: "jk-rowling",    name: "J.K. Rowling",   photo: AuthorImg1 },
  { id: "chetan-bhagat", name: "Chetan Bhagat",  photo: AuthorImg2 },
  { id: "jk-rowling",    name: "J.K. Rowling",   photo: AuthorImg3 },
  { id: "arundhati-roy", name: "Arundhati Roy",  photo: AuthorImg4 },
  { id: "ruskin-bond",   name: "Ashwin",          photo: AuthorImg5 },
  { id: "jk-rowling",    name: "J.K. Rowling",   photo: AuthorImg1 },
  { id: "chetan-bhagat", name: "Chetan Bhagat",  photo: AuthorImg2 },
  { id: "arundhati-roy", name: "Arundhati Roy",  photo: AuthorImg4 },
];

export default function FamousAuthors() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft]   = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir: "left" | "right") =>
    scrollRef.current?.scrollBy({ left: dir === "right" ? 200 : -200, behavior: "smooth" });

  const onScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  };

  return (
    <section className="py-6 px-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-gray-900">Famous Authors</h2>
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

      <div ref={scrollRef} onScroll={onScroll}
        className="flex gap-5 overflow-x-auto scrollbar-hide pb-2">
        {famousAuthors.map((author, i) => (
          <Link key={i} href={`/author/${author.id}`} className="flex-shrink-0 flex flex-col items-center gap-2 group">
            <div className="w-[80px] h-[80px] rounded-xl overflow-hidden border-2 border-transparent group-hover:border-amber-400 transition-colors bg-gray-100">
              <Image
                src={author.photo}
                alt={author.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-[11px] text-gray-600 text-center w-20 truncate group-hover:text-gray-900 transition-colors">
              {author.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
