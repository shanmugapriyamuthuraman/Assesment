import RecommendedCarousel from "@/components/sections/RecommendedCarousel";
import NonFictionSection from "@/components/sections/NonFictionSection";

export default function SelfHelpPage() {
  return (
    <>
      <div className="px-6 pt-4 pb-4">
        <h1 className="text-xl font-bold text-gray-900">Self Help</h1>
        <p className="text-sm text-gray-500 mt-1">Books for personal growth and development</p>
      </div>
      <div style={{ background: "#ffffff" }}>
        <RecommendedCarousel />
        <NonFictionSection />
      </div>
    </>
  );
}
