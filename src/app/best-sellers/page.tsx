import BestSellerSection from "@/components/sections/BestSellerSection";
import RecommendedCarousel from "@/components/sections/RecommendedCarousel";

export default function BestSellersPage() {
  return (
    <>
      <div className="px-6 pt-4 pb-4">
        <h1 className="text-xl font-bold text-gray-900">Best Sellers</h1>
        <p className="text-sm text-gray-500 mt-1">Our most popular titles</p>
      </div>
      <div style={{ background: "#ffffff" }}>
        <BestSellerSection />
        <RecommendedCarousel />
      </div>
    </>
  );
}
