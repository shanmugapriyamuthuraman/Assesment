"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "The Echo of our",
    titleHighlight: "Silent Pages",
    subtitle:
      "A global publishing technology pavilion designed to run alongside major international book fairs.",
    cta: "Explore More",
    href: "/book/death-before-breakfast",
    cover:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=600&fit=crop",
    bg: "from-gray-50 to-gray-100",
  },
  {
    id: 2,
    title: "Discover",
    titleHighlight: "New Stories",
    subtitle:
      "Explore thousands of books across every genre. Read, chat, and connect with your favorite authors.",
    cta: "Browse Books",
    href: "/",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=600&fit=crop",
    bg: "from-amber-50 to-orange-50",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex items-center justify-between min-h-[180px] md:min-h-[200px] px-10 md:px-15 py-6"
        style={{
          background: "rgba(255, 255, 255, 1)",
          width: "100%",
          marginLeft: "2% ",
          borderRadius: "10px",
          marginTop: "20px",
          border: "1px solid rgba(233, 233, 233, 1) ",
        }}
      >
        <div className="flex-1 max-w-xs">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
            {slide.title}{" "}
            <span className="italic font-light">{slide.titleHighlight}</span>
          </h1>
          <p className="mt-2 text-xs md:text-sm text-gray-500 leading-relaxed">
            {slide.subtitle}
          </p>
          <Link
            href={slide.href}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:gap-2.5 transition-all"
          >
            {slide.cta}
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="hidden sm:block relative w-32 md:w-40 h-40 md:h-52 flex-shrink-0">
          <Image
            src={slide.cover}
            alt={slide.titleHighlight}
            fill
            className="object-cover rounded-xl shadow-lg"
            priority
          />
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all ${
              i === current
                ? "w-4 h-1.5 bg-gray-700"
                : "w-1.5 h-1.5 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
