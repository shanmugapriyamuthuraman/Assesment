"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useState } from "react";
import { Book } from "@/types";

interface BookCardProps {
  book: Book;
  size?: "sm" | "md" | "lg";
}

export default function BookCard({ book, size = "md" }: BookCardProps) {
  const [wishlisted, setWishlisted] = useState(false);

  const dimensions = {
    sm: { w: 100, h: 140, cardW: "w-[100px]", imgH: "h-[140px]" },
    md: { w: 130, h: 180, cardW: "w-[130px]", imgH: "h-[180px]" },
    lg: { w: 150, h: 210, cardW: "w-[150px]", imgH: "h-[210px]" },
  }[size];

  return (
    <div className={`${dimensions.cardW} flex-shrink-0 group`}>
      <Link href={`/book/${book.id}`}>
        <div className="relative">
          <div
            className={`relative ${dimensions.imgH} w-full rounded-lg overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition-shadow`}
          >
            <Image
              src={book.cover}
              alt={book.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100px, 150px"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Wishlist button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setWishlisted(!wishlisted);
            }}
            className="absolute top-2 right-2 p-1 rounded-full bg-white/90 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Add to wishlist"
          >
            <Heart
              size={12}
              className={wishlisted ? "fill-red-500 text-red-500" : "text-gray-600"}
            />
          </button>
        </div>
      </Link>

      <div className="mt-2 px-0.5">
        <Link href={`/book/${book.id}`}>
          <p className="text-[11px] font-semibold text-gray-800 leading-tight line-clamp-2 hover:text-gray-600 transition-colors">
            {book.title}
          </p>
          <p className="text-[10px] text-gray-400 mt-0.5 truncate">{book.author}</p>
        </Link>
        <Link href={`/book/${book.id}`}>
          <button className="mt-2 w-full py-1.5 bg-gray-900 text-white text-[10px] font-medium rounded-md hover:bg-gray-700 transition-colors">
            Read &amp; Chat
          </button>
        </Link>
      </div>
    </div>
  );
}
