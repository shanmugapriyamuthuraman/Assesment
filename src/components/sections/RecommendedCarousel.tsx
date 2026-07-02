"use client";

import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronRight } from "lucide-react";

import Img1 from "@/assets/RecommentImg1.png";
import Img2 from "@/assets/RecommentImg2.png";
import Img3 from "@/assets/RecommentImg3.png";
import Img4 from "@/assets/RecommentImg4.png";
import BorderRadius1 from "@/assets/borderRadius1.png";
import BorderRadius2 from "@/assets/borderRadius2.png";

const recommendedBooks: { id: number; cover: StaticImageData }[] = [
  { id: 1, cover: Img1 },
  { id: 2, cover: Img4 },
  { id: 3, cover: Img2 },
  { id: 4, cover: Img3 },
];

const cards = [
  { id: 1, books: recommendedBooks },
  { id: 2, books: [...recommendedBooks].reverse() },
];

export default function RecommendedCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = () => {
    const w = scrollRef.current?.clientWidth ?? 0;
    scrollRef.current?.scrollBy({ left: w, behavior: "smooth" });
  };

  const onScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  };

  return (
    <section className="py-6 px-6 relative">
      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0 w-full snap-start rounded-[11px] overflow-hidden relative"
            style={{
              background: "rgba(255, 246, 239, 1)",
              border: "0.93px solid rgba(255, 228, 207, 1)",
              minHeight: "420px",
              width: "70%",
            }}
          >
            {/* Top-right decorative */}
            <Image
              src={BorderRadius2}
              alt=""
              width={150}
              height={150}
              className="absolute top-0 right-0 pointer-events-none"
            />
            {/* Bottom-left decorative */}
            <Image
              src={BorderRadius1}
              alt=""
              width={150}
              height={150}
              className="absolute bottom-0 left-0 pointer-events-none"
            />

            {/* Card content */}
            <div className="p-7">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Recommended For You
              </h2>
              <p className="text-base text-gray-500 max-w-md leading-relaxed mb-8">
                A global publishing technology pavilion designed to run
                alongside major international book fairs.
              </p>

              {/* Books row */}
              <div className="flex gap-4 pb-2 overflow-x-auto scrollbar-hide">
                {card.books.map((book) => (
                  <div
                    key={book.id}
                    className="flex-shrink-0 relative w-[210px] h-[320px] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <Image
                      src={book.cover}
                      alt="Recommended book"
                      fill
                      className="object-cover"
                      sizes="210px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right arrow sits in the px-6 gap, outside the card */}
      {canScrollRight && (
        <button
          onClick={scroll}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200 z-10"
        >
          <ChevronRight size={18} />
        </button>
      )}
    </section>
  );
}
