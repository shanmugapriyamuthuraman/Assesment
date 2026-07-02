"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

import PeopleImg from "@/assets/people.png";
import HistoryImg from "@/assets/history.png";
import PoliticsImg from "@/assets/politics.png";
import KidsImg from "@/assets/kids.png";
import EducationImg from "@/assets/education.png";

const genres: { name: string; image: StaticImageData }[] = [
  { name: "", image: PeopleImg },
  { name: "", image: HistoryImg },
  { name: "", image: PoliticsImg },
  { name: "", image: KidsImg },
  { name: "", image: EducationImg },
];

export default function GenrePills() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-6 mt-5">
      <h2 className="text-base font-bold text-gray-900 mb-3 pt-1">
        Dive into Different Genres
      </h2>
      <div className="flex gap-3 w-full  pt-3">
        {genres.map((g, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`
              relative flex-1 min-w-0 h-[72px] rounded-4xl overflow-hidden
              transition-all duration-200
              ${activeIndex === i ? "" : "opacity-85 hover:opacity-100"}
            `}
          >
            <Image
              src={g.image}
              alt=""
              fill
              className="object-cover"
              sizes="20vw"
            />
            <div className="absolute inset-0 bg-black/30" />
          </button>
        ))}
      </div>
    </section>
  );
}
