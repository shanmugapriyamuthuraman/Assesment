"use client";

import { Search, Heart, ShoppingCart, BookOpen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/?search=${encodeURIComponent(query)}`);
    }
  };

  if (pathname.startsWith("/book/")) return null;

  return (
    <header
      className="sticky top-0 z-20 h-16 flex items-center px-4 md:px-6 gap-4 border-b border-[rgba(255,228,207,0.5)]"
      style={{ background: "rgba(255, 253, 243, 1)" }}
    >
      {/* Mobile logo */}
      <Link href="/" className="md:hidden flex items-center gap-2 ml-10">
        <div className="w-7 h-7 bg-amber-700 rounded-lg flex items-center justify-center">
          <BookOpen size={14} className="text-white" />
        </div>
        <span className="font-bold text-sm text-gray-900">Chai Reader</span>
      </Link>

      {/* Search bar */}
      <form
        onSubmit={handleSearch}
        className="flex-1 max-w-[480px] mx-auto md:mx-0"
      >
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search book title or author..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-full
                       focus:outline-none focus:border-gray-300 focus:bg-white transition-colors"
          />
        </div>
      </form>

      {/* Actions */}
      <div className="flex items-center gap-2 ml-auto">
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
          className="ml-1 px-4 py-1.5 text-sm font-medium  text-white rounded-full hover:bg-gray-700 transition-colors"
          style={{
            border: "1px solid rgb(24, 22, 27)",
            borderRadius: "20px",
            color: "rgb(24, 22, 27)",
          }}
        >
          Login
        </button>
      </div>
    </header>
  );
}
