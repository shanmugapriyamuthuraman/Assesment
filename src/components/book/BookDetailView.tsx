"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { Heart, ChevronRight, ChevronLeft, ShoppingCart } from "lucide-react";
import { Book, Author } from "@/types";

import AuthorDetailsImg from "@/assets/AuthorDetailsImg.png";
import ReviewerImg from "@/assets/ReviewerImg.png";
import readMoreIcon from "@/assets/readMoreArrow.png";

// New Arrival covers
import NAImg1 from "@/assets/NewArrivalImg1.png";
import NAImg2 from "@/assets/NewArrivalImg2.png";
import NAImg3 from "@/assets/NewArrivalImg3.png";
import NAImg4 from "@/assets/NewArrivalImg4.png";
import NAImg5 from "@/assets/NewArrivalImg5.png";
import NAImg6 from "@/assets/NewArrivalImg6.png";

// Best Seller covers
import BSImg1 from "@/assets/BestSellerImg1.png";
import BSImg2 from "@/assets/BestSellerImg2.png";
import BSImg3 from "@/assets/BestSellerImg3.png";

// Crime Fiction covers (also used for "You might also like")
import CrimeImg1 from "@/assets/crimeFictionImg1.png";
import CrimeImg2 from "@/assets/crimeFictionImg2.png";
import CrimeImg3 from "@/assets/crimeFictionImg3.png";
import CrimeImg4 from "@/assets/crimeFictionImg4.png";
import CrimeImg5 from "@/assets/crimeFictionImg5.png";

const coverMap: Record<string, StaticImageData> = {
  // New Arrivals
  "psychology-of-money": NAImg1,
  "death-before-breakfast": NAImg2,
  "a-girl-named-harper": NAImg3,
  "harry-potter-1": NAImg4,
  "harry-potter-2": NAImg5,
  "casual-vacancy": NAImg6,
  // Best Sellers
  "million-to-one": BSImg1,
  "richest-man-babylon": BSImg2,
  "know-this-story": BSImg3,
  // Crime / Similar
  "past-is-rising": CrimeImg1,
  "five-feet-apart": CrimeImg2,
  "looking-for-la-la": CrimeImg3,
  "curtain-call": CrimeImg4,
};

const similarCovers: StaticImageData[] = [
  CrimeImg1,
  CrimeImg2,
  CrimeImg3,
  CrimeImg4,
  CrimeImg5,
  CrimeImg1,
  CrimeImg2,
];

interface Props {
  book: Book;
  author: Author | null;
}

export default function BookDetailView({ book, author }: Props) {
  const [wishlisted, setWishlisted] = useState(false);
  const [authorExpanded, setAuthorExpanded] = useState(false);
  const [bookExpanded, setBookExpanded] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const scroll = (dir: "left" | "right") =>
    scrollRef.current?.scrollBy({
      left: dir === "right" ? 340 : -340,
      behavior: "smooth",
    });

  const onScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanLeft(scrollLeft > 0);
    setCanRight(scrollLeft < scrollWidth - clientWidth - 4);
  };

  const coverSrc: StaticImageData | string = coverMap[book.id] ?? book.cover;

  return (
    <div style={{ background: "#ffffff" }}>
      {/* Sticky breadcrumb header — replaces global header on book pages */}
      <div
        className="sticky top-0 z-20 h-16 flex items-center px-6 gap-4 border-b border-gray-100"
        style={{ background: "#ffffff" }}
      >
        <div className="flex items-center gap-1.5 text-xs text-gray-500 flex-1">
          <Link href="/" className="hover:text-gray-800 transition-colors">
            Browse
          </Link>
          <ChevronRight size={12} />
          <span className="text-gray-900 font-medium">{book.title}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
            aria-label="Wishlist"
          >
            <Heart size={19} />
          </button>
          <button
            className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart size={19} />
          </button>
          <button
            className="ml-1 px-4 py-1.5 text-sm font-medium rounded-full hover:bg-gray-50 transition-colors"
            style={{
              border: "1px solid rgb(24, 22, 27)",
              color: "rgb(24, 22, 27)",
            }}
          >
            Login
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="px-6 pb-8 pt-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Book cover */}
          <div className="flex-shrink-0">
            <div className="relative w-[160px] h-[230px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={coverSrc}
                alt={book.title}
                fill
                className="object-cover"
                priority
                sizes="160px"
              />
            </div>
            <div className="flex gap-2 mt-4">
              <button className="flex-1 py-2 bg-gray-100 text-gray-800 text-xs font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                Read
              </button>
              <button className="flex-1 py-2 bg-gray-900 text-white text-xs font-semibold rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-1">
                Chat Now
              </button>
            </div>
          </div>

          {/* Book info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {book.title}
                </h1>
                <p className="text-xs text-gray-500 mt-1 ">
                  Written by :{" "}
                  {author ? (
                    <Link
                      href={`/author/${author.id}`}
                      className="text-gray-800 font-medium hover:underline"
                    >
                      {author.name}
                    </Link>
                  ) : (
                    <span className="text-gray-800 font-medium">
                      {book.author}
                    </span>
                  )}
                </p>
              </div>
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Heart
                  size={18}
                  className={
                    wishlisted ? "fill-red-500 text-red-500" : "text-gray-400"
                  }
                />
              </button>
            </div>

            {/* Genre tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {book.genres.map((g, i) => (
                <span
                  key={`${g}-${i}`}
                  className="px-3 py-1 rounded-full text-xs font-medium text-blue-800"
                  style={{
                    background: "rgba(224, 244, 255, 1)",
                    border: "1px solid rgba(163, 223, 255, 1)",
                    color: "rgba(26, 26, 28, 1)",
                  }}
                >
                  {g}
                </span>
              ))}
            </div>

            {/* About the Book */}
            <div className="mt-6">
              <h2 className="text-base font-bold text-gray-900 mb-2">
                About the Book
              </h2>
              <p
                className={`text-sm text-gray-600 leading-relaxed ${bookExpanded ? "" : "line-clamp-6"}`}
              >
                {book.description}
              </p>
              <button
                onClick={() => setBookExpanded(!bookExpanded)}
                className="mt-1 text-xs text-blue-500 hover:text-blue-700 transition-colors flex items-center gap-1"
              >
                {bookExpanded ? (
                  <span
                    style={{ color: "rgba(24, 73, 120, 1)", fontSize: "12px" }}
                  >
                    Show less
                  </span>
                ) : (
                  <span
                    style={{ color: "rgba(24, 73, 120, 1)", fontSize: "12px" }}
                  >
                    Read more
                  </span>
                )}
                <Image
                  src={readMoreIcon}
                  alt=""
                  width={12}
                  height={12}
                  className="inline"
                />
              </button>
            </div>

            {/* Product Details — separate section below About the Book */}
            <div className="mt-6">
              <h2 className="text-base font-bold text-gray-900 mb-3">
                Product Details
              </h2>
              <div className="space-y-2">
                {[
                  { label: "Publisher", value: book.publisher },
                  { label: "Publication date", value: book.publicationDate },
                  { label: "Language", value: book.language },
                  { label: "Print lenght", value: `${book.pages} pages` },
                ].map(({ label, value }) => (
                  <div key={label} className="flex text-sm">
                    <span className="text-gray-700 font-medium w-36 flex-shrink-0">
                      {label} :
                    </span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* About the Author */}
            <div className="mt-10 border-t border-gray-100 pt-8">
              <h2 className="text-base font-bold text-gray-900 mb-4">
                About the Author
              </h2>
              <div className="flex gap-4">
                <div className="relative w-[100px] h-[130px] rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src={AuthorDetailsImg}
                    alt={author?.name ?? book.author}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  {author ? (
                    <Link
                      href={`/author/${author.id}`}
                      className="text-sm font-semibold text-blue-500 hover:underline"
                    >
                      {author.name}
                    </Link>
                  ) : (
                    <span className="text-sm font-semibold text-blue-500">
                      {book.author}
                    </span>
                  )}
                  <p
                    className={`text-sm text-gray-500 mt-1 leading-relaxed ${authorExpanded ? "" : "line-clamp-3"}`}
                  >
                    {author?.bio ?? ""}
                  </p>
                  <button
                    onClick={() => setAuthorExpanded(!authorExpanded)}
                    className="mt-1 text-xs text-blue-500 hover:text-blue-700 transition-colors flex items-center gap-1"
                  >
                    {authorExpanded ? (
                      <span
                        style={{
                          color: "rgba(24, 73, 120, 1)",
                          fontSize: "12px",
                        }}
                      >
                        Show less
                      </span>
                    ) : (
                      <span
                        style={{
                          color: "rgba(24, 73, 120, 1)",
                          fontSize: "12px",
                        }}
                      >
                        Read more
                      </span>
                    )}
                    <Image
                      src={readMoreIcon}
                      alt=""
                      width={12}
                      height={12}
                      className="inline"
                    />{" "}
                  </button>
                </div>
              </div>
            </div>

            {/* Reviews */}
            {book.reviews.length > 0 && (
              <div className="mt-10 border-t border-gray-100 pt-8">
                <h2 className="text-base font-bold text-gray-900 mb-4">
                  Reviews
                </h2>
                <div className="space-y-5">
                  {book.reviews.map((review) => (
                    <div key={review.id} className="flex gap-3">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={ReviewerImg}
                          alt={review.userName}
                          fill
                          className="object-cover"
                          sizes="44px"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-800 mb-1">
                          {review.userName}
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {review.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* You might also like */}
            <div className="border-t border-gray-100 px-6 py-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-bold text-gray-900">
                  You might also like
                </h2>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => scroll("left")}
                    disabled={!canLeft}
                    className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button
                    onClick={() => scroll("right")}
                    disabled={!canRight}
                    className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
              <div
                ref={scrollRef}
                onScroll={onScroll}
                className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
              >
                {similarCovers.map((cover, i) => (
                  <Link
                    key={i}
                    href="/book/past-is-rising"
                    className="flex-shrink-0 w-[140px] group"
                  >
                    <div className="relative w-full h-[200px] rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow bg-gray-100">
                      <Image
                        src={cover}
                        alt="Similar book"
                        fill
                        className="object-cover"
                        sizes="140px"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
