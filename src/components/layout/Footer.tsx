"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import FooterImg from "@/assets/FooterImg.png";
import logo from "@/assets/Simplification.png";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/book/") || pathname.startsWith("/author/")) return null;

  return (
    <footer
      className="border-t border-gray-100  w-full"
      style={{ background: "rgba(245, 249, 255, 1)" }}
    >
      <div className="w-full px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src={logo}
                alt="Chai Reader"
                height={36}
                width={130}
                className="object-contain"
                priority
              />
            </Link>{" "}
            <p className="text-xs text-gray-500 leading-relaxed">
              Chai Reader is an AI-powered book commerce platform designed to
              transform how people discover and experience books—through
              reading, chatting with books, and more. It is owned and operated
              by Ailaysa Technologies Pvt Ltd.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Contact", "Home", "FAQ", "Support / Help Center"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-xs text-gray-500 hover:text-gray-800 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-3">
              For Partners
            </h4>
            <ul className="space-y-2">
              {["For Authors", "For Publishers", "Become a Partner"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-xs text-gray-500 hover:text-gray-800 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-3">Legal</h4>
            <ul className="space-y-2">
              {["Terms & Conditions", "Privacy Policy", "Cookie Policy"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-xs text-gray-500 hover:text-gray-800 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer wave image */}
      <div
        className="w-full overflow-hidden leading-none"
        style={{ marginTop: "8px" }}
      >
        <Image
          src={FooterImg}
          alt="Footer wave"
          className="w-full block object-cover"
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>
    </footer>
  );
}
