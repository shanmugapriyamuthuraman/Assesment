import NewArrivalSection from "@/components/sections/NewArrivalSection";
import BestSellerSection from "@/components/sections/BestSellerSection";

export default function NewArrivalsPage() {
  return (
    <>
      <div className="px-6 pt-4 pb-4">
        <h1 className="text-xl font-bold text-gray-900">New Arrivals</h1>
        <p className="text-sm text-gray-500 mt-1">The latest additions to our collection</p>
      </div>
      <div style={{ background: "#ffffff" }}>
        <NewArrivalSection />
        <BestSellerSection />
      </div>
    </>
  );
}
