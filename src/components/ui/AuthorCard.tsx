import Image from "next/image";
import Link from "next/link";
import { Author } from "@/types";

interface AuthorCardProps {
  author: Author;
  variant?: "circle" | "grid";
}

export default function AuthorCard({ author, variant = "circle" }: AuthorCardProps) {
  if (variant === "circle") {
    return (
      <Link
        href={`/author/${author.id}`}
        className="flex flex-col items-center gap-2 flex-shrink-0 group"
      >
        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 border-2 border-transparent group-hover:border-amber-400 transition-colors">
          <Image
            src={author.photo}
            alt={author.name}
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        </div>
        <span className="text-[11px] text-gray-600 text-center w-20 truncate group-hover:text-gray-900 transition-colors">
          {author.name}
        </span>
      </Link>
    );
  }

  return (
    <Link href={`/author/${author.id}`} className="block group">
      <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-2 group-hover:opacity-90 transition-opacity">
        <Image
          src={author.photo}
          alt={author.name}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-xs text-center text-gray-700 font-medium truncate">{author.name}</p>
    </Link>
  );
}
