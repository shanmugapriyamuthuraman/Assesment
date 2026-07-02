"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import bannerBookImg from "@/assets/bannerBookImg.png";
import ArrowIcon from "@/assets/ArrowIcon.png";

const slides = [
  {
    id: 1,
    title: "The Echo of our",
    titleHighlight: "Silent Pages",
    subtitle:
      "A global publishing technology pavilion designed to run alongside major international book fairs.",
    cta: "Explore More",
    href: "/book/death-before-breakfast",
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
    <div className="relative">
      <div
        className="relative flex items-center min-h-[180px] md:min-h-[200px] px-10 md:px-15 py-6 overflow-visible"
        style={{
          background: "rgba(255, 255, 255, 1)",
          width: "95%",
          marginLeft: "2%",
          borderRadius: "10px",
          marginTop: "40px",
          border: "1px solid rgba(233, 233, 233, 1)",
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
            <Image
              src={ArrowIcon}
              alt=""
              width={37}
              height={11}
              className="inline mt-1"
            />{" "}
          </Link>
        </div>

        {/* Image positioned absolute — doesn't affect box height */}
        <div className="hidden sm:block absolute right-6 md:right-10 top-1/2 -translate-y-1/2 w-56 md:w-72 lg:w-80 h-46 md:h-52 lg:h-70 z-10">
          <Image
            src={bannerBookImg}
            alt={slide.titleHighlight}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
