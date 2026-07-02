"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { X, BookOpen } from "lucide-react";
import { useState } from "react";

import BrowserIcon from "@/assets/browserIMg.png";
import NewArrivalsIcon from "@/assets/newarrivalIMg.png";
import BestSellersIcon from "@/assets/bestsellerIMg.png";
import SelfHelpIcon from "@/assets/selfhelpImg.png";
import BusinessIcon from "@/assets/businessIMg.png";
import TechIcon from "@/assets/teshImg.png";
import KidsIcon from "@/assets/kidsImg.png";
import ClassicsIcon from "@/assets/classicImg.png";
import SettingsIcon from "@/assets/settingImg.png";
import logo from "@/assets/Simplification.png";

const navItems: { label: string; href: string; icon: StaticImageData }[] = [
  { label: "Browse", href: "/", icon: BrowserIcon },
  { label: "New Arrivals", href: "/new-arrivals", icon: NewArrivalsIcon },
  { label: "Best Sellers", href: "/best-sellers", icon: BestSellersIcon },
  { label: "Self help", href: "/self-help", icon: SelfHelpIcon },
  { label: "Business", href: "/business", icon: BusinessIcon },
  { label: "Tech", href: "/tech", icon: TechIcon },
  { label: "Kids", href: "/kids", icon: KidsIcon },
  { label: "Classics", href: "/classics", icon: ClassicsIcon },
  { label: "Settings", href: "/settings", icon: SettingsIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="md:hidden fixed top-5 left-5 z-50 p-2 rounded-lg bg-white shadow"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={18} /> : <BookOpen size={18} />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 z-30 overlay-fade"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar panel */}
      {mobileOpen && (
        <div className="md:hidden fixed left-0 top-0 h-screen w-[75vw] max-w-[280px] z-40 flex flex-col pt-[34px] pb-6 px-[20px] bg-transparent sidebar-slide-in">
          <div
            style={{
              background: "rgba(255, 251, 231, 1)",
              borderRadius: "12px",
              border: "1px solid rgba(0,0,0,0.07)",
              padding: "20px 12px",
              overflowY: "auto",
              maxHeight: "calc(100vh - 34px - 24px)",
            }}
          >
            <div className="mb-6 px-2">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
                <Image src={logo} alt="Chai Reader" height={36} width={130} className="object-contain" priority />
              </Link>
            </div>
            <nav>
              {navItems.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl mb-0.5 text-[13px] font-medium transition-all duration-150 ${isActive ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:bg-white/50 hover:text-gray-800"}`}>
                    <Image src={item.icon} alt={item.label} width={18} height={18} className={`object-contain ${isActive ? "opacity-100" : "opacity-50"}`} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop sidebar column */}
      <aside
        className="hidden md:flex fixed left-0 top-0 h-screen w-1/5 z-40 flex-col pt-[34px] pb-6 px-[20px] bg-transparent"
      >
        <div
          style={{
            background: "rgba(255, 251, 231, 1)",
            borderRadius: "12px",
            border: "1px solid rgba(0,0,0,0.07)",
            padding: "20px 12px",
            overflowY: "auto",
            maxHeight: "calc(100vh - 34px - 24px)",
          }}
        >
          {/* Logo */}
          <div className="mb-6 px-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src={logo}
                alt="Chai Reader"
                height={36}
                width={130}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Nav items */}
          <nav>
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-xl mb-0.5
                    text-[13px] font-medium transition-all duration-150
                    ${
                      isActive
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-500 hover:bg-white/50 hover:text-gray-800"
                    }
                  `}
                >
                  {/* PNG icon rendered via next/image */}
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={18}
                    height={18}
                    className={`object-contain ${isActive ? "opacity-100" : "opacity-50"}`}
                  />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
