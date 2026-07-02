"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Author, Book } from "@/types";

import AuthorDetailsImg from "@/assets/AuthorDetailsImg.png";
import FamImg1 from "@/assets/FamousAuthorImg1.png";
import FamImg2 from "@/assets/FamousAuthorImg2.png";
import FamImg3 from "@/assets/FamousAuthorImg3.png";
import FamImg4 from "@/assets/FamousAuthorImg4.png";
import FamImg5 from "@/assets/FamousAuthorImg5.png";

import NR1  from "@/assets/NewReleaseImg1.png";
import NR2  from "@/assets/NewReleaseImg2.png";
import NR3  from "@/assets/NewReleaseImg3.png";
import NR4  from "@/assets/NewReleaseImg4.png";
import NR5  from "@/assets/NewReleaseImg5.png";
import NR6  from "@/assets/NewReleaseImg6.png";
import NR7  from "@/assets/NewReleaseImg7.png";
import NR8  from "@/assets/NewReleaseImg8.png";
import NR9  from "@/assets/NewReleaseImg9.png";
import NR10 from "@/assets/NewReleaseImg10.png";

const newReleaseImgs: StaticImageData[] = [NR1, NR2, NR3, NR4, NR5, NR6, NR7, NR8, NR9, NR10];

const authorPhotoMap: Record<string, StaticImageData> = {
  "jk-rowling":    AuthorDetailsImg,
  "chetan-bhagat": FamImg2,
  "arundhati-roy": FamImg4,
  "ruskin-bond":   FamImg5,
  "morgan-housel": FamImg3,
  "george-bellairs": FamImg1,
};

interface Props {
  author: Author;
  books: Book[];
}

/* ── Carousel row of portrait book cards ── */
function BookCarouselRow({ imgs, books }: { imgs: StaticImageData[]; books: Book[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft,  setCanLeft]  = useState(false);
  const [canRight, setCanRight] = useState(true);

  const scroll = (dir: "left" | "right") =>
    scrollRef.current?.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });

  const onScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanLeft(scrollLeft > 0);
    setCanRight(scrollLeft < scrollWidth - clientWidth - 4);
  };

  return (
    <section className="px-6 py-6">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-base font-bold text-gray-900">Our New Releases</h2>
        <div className="flex gap-1.5">
          <button onClick={() => scroll("left")} disabled={!canLeft}
            className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
            <ChevronLeft size={14} />
          </button>
          <button onClick={() => scroll("right")} disabled={!canRight}
            className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
      <p className="text-xs text-gray-400 mb-4">Trending books among readers</p>

      <div ref={scrollRef} onScroll={onScroll}
        className="flex items-stretch gap-4 overflow-x-auto scrollbar-hide pb-2">
        {imgs.map((img, i) => {
          const book = books[i % Math.max(books.length, 1)];
          return <PortraitCard key={i} img={img} book={book} />;
        })}
      </div>
    </section>
  );
}

function PortraitCard({ img, book }: { img: StaticImageData; book: Book }) {
  const [w, setW] = useState(false);
  return (
    <div className="flex-shrink-0 w-[150px] flex flex-col group">
      <Link href={`/book/${book.id}`} className="block">
        <div className="relative w-full h-[210px] rounded-xl overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
          <Image src={img} alt={book.title} fill className="object-cover" sizes="150px" />
          <button onClick={(e) => { e.preventDefault(); setW(!w); }}
            className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow">
            <Heart size={11} className={w ? "fill-red-500 text-red-500" : "text-gray-400"} />
          </button>
        </div>
      </Link>
      <div className="mt-2 flex flex-col flex-1">
        <p className="text-[11px] font-semibold text-gray-800 leading-tight h-[34px] line-clamp-2">{book.title}</p>
        <Link href={`/book/${book.id}`} className="text-[10px] text-blue-500 mt-1 truncate hover:underline">
          by {book.author}
        </Link>
        <div className="mt-auto pt-2">
          <button className="w-full py-2 bg-gray-900 text-white text-[11px] font-medium rounded-lg hover:bg-gray-700 transition-colors">
            Read &amp; Chat
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── 3-column × 3-row grid of horizontal book cards ── */
function ThreeByThreeGrid({ imgs, books }: { imgs: StaticImageData[]; books: Book[] }) {
  const gridItems = Array.from({ length: 9 }, (_, i) => ({
    img:  imgs[i % imgs.length],
    book: books[i % Math.max(books.length, 1)],
  }));

  return (
    <section className="px-6 py-6 border-t border-gray-100">
      <h2 className="text-base font-bold text-gray-900 mb-1">Our New Releases</h2>
      <p className="text-xs text-gray-400 mb-4">Trending books among readers</p>

      <div className="grid grid-cols-3 gap-4">
        {gridItems.map(({ img, book }, i) => (
          <Link key={i} href={`/book/${book.id}`}
            className="flex gap-3 group hover:bg-gray-50 rounded-xl p-2 transition-colors">
            {/* Small portrait cover */}
            <div className="relative w-[72px] h-[96px] rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 shadow-sm">
              <Image src={img} alt={book.title} fill className="object-cover" sizes="72px" />
            </div>
            {/* Content */}
            <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
              <div>
                <p className="text-[12px] font-bold text-gray-900 leading-tight line-clamp-2">{book.title}</p>
                <p className="text-[10px] text-gray-500 mt-1 leading-relaxed line-clamp-3">{book.description}</p>
              </div>
              <button className="mt-2 self-start px-3 py-1 bg-gray-900 text-white text-[10px] font-medium rounded-lg hover:bg-gray-700 transition-colors">
                Read &amp; Chat
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ── Main component ── */
export default function AuthorPageView({ author, books }: Props) {
  const [expanded, setExpanded] = useState(false);

  const authorPhoto = authorPhotoMap[author.id] ?? AuthorDetailsImg;

  const fallbackBook: Book = {
    id: "death-before-breakfast",
    title: "Death before Breakfast",
    author: author.name,
    authorId: author.id,
    cover: "",
    description: "A clash of armies, a battle of gods, and the rage of a hero fuel this epic tale of war. When a leader's pride ignites a conflict.",
    publisher: "Ailaysa",
    publicationDate: "21 December 2025",
    language: "English",
    pages: 160,
    genres: [],
    rating: 4,
    reviews: [],
  };

  const displayBooks = books.length > 0 ? books : [fallbackBook];
  const row1Books = Array.from({ length: 5 }, (_, i) => displayBooks[i % displayBooks.length]);
  const row2Books = Array.from({ length: 5 }, (_, i) => displayBooks[i % displayBooks.length]);

  return (
    <div style={{ background: "#ffffff" }}>
      {/* Breadcrumb */}
      <div className="px-6 pt-5 pb-4 flex items-center gap-1.5 text-xs text-gray-500">
        <Link href="/" className="hover:text-gray-800 transition-colors">Browse</Link>
        <ChevronRight size={12} />
        <span className="text-gray-500">Authors</span>
        <ChevronRight size={12} />
        <span className="text-gray-900 font-medium">{author.name}</span>
      </div>

      {/* Author profile */}
      <div className="px-6 pb-6">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="relative w-[160px] h-[220px] rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 shadow-md">
            <Image src={authorPhoto} alt={author.name} fill className="object-cover" sizes="160px" priority />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">{author.name}</h1>
            <p className={`text-sm text-gray-500 mt-2 leading-relaxed ${expanded ? "" : "line-clamp-3"}`}>
              {author.bio}
            </p>
            <button onClick={() => setExpanded(!expanded)}
              className="mt-1 text-xs text-blue-500 hover:text-blue-700 transition-colors">
              {expanded ? "Show less ▲" : "Read more ▼"}
            </button>
            <div className="flex flex-wrap gap-2 mt-4">
              {author.genres.map((g) => (
                <span key={g} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200">
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Carousel row 1 — NewReleaseImg 1–5 */}
      <div className="border-t border-gray-100">
        <BookCarouselRow imgs={newReleaseImgs.slice(0, 5)} books={row1Books} />
      </div>

      {/* Carousel row 2 — NewReleaseImg 6–10 */}
      <div className="border-t border-gray-100">
        <BookCarouselRow imgs={newReleaseImgs.slice(5, 10)} books={row2Books} />
      </div>

      {/* 3×3 grid of horizontal book cards */}
      <ThreeByThreeGrid imgs={newReleaseImgs} books={displayBooks} />

    </div>
  );
}
