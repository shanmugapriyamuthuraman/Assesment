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
  const [active, setActive] = useState("People");

  return (
    <section className="px-6 mt-5">
      <h2 className="text-base font-bold text-gray-900 mb-3">
        Dive into Different Genres
      </h2>
      <div className="flex gap-3 w-full">
        {genres.map((g) => (
          <button
            key={g.name}
            onClick={() => setActive(g.name)}
            className={`
              relative flex-1 min-w-0 h-[72px] rounded-4xl overflow-hidden
              transition-all duration-200
              ${active === g.name ? "ring-2 ring-gray-900 ring-offset-1" : "opacity-85 hover:opacity-100"}
            `}
          >
            <Image
              src={g.image}
              alt={g.name}
              fill
              className="object-cover"
              sizes="20vw"
            />
            <div
              className={`absolute inset-0 transition-colors duration-200 ${
                active === g.name ? "bg-black/40" : "bg-black/30"
              }`}
            />
            <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold drop-shadow">
              {g.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
