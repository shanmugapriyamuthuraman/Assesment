"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookCard from "@/components/ui/BookCard";
import { Book } from "@/types";

interface BookCarouselProps {
  title: string;
  subtitle?: string;
  books: Book[];
  cardSize?: "sm" | "md" | "lg";
  showArrows?: boolean;
  bgColor?: string;
}

export default function BookCarousel({
  title,
  subtitle,
  books,
  cardSize = "md",
  showArrows = true,
  bgColor,
}: BookCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  const onScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  };

  return (
    <section className={`py-6 ${bgColor || ""}`}>
      <div className="px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-base font-bold text-gray-900">{title}</h2>
          {showArrows && (
            <div className="flex gap-1.5">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="p-1.5 rounded-full border border-gray-200 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="p-1.5 rounded-full border border-gray-200 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          )}
        </div>
        {subtitle && <p className="text-xs text-gray-400 mb-4">{subtitle}</p>}

        {/* Scroll container */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
        >
          {books.map((book) => (
            <BookCard key={book.id} book={book} size={cardSize} />
          ))}
        </div>
      </div>
    </section>
  );
}
