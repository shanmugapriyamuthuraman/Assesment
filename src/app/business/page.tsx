import BusinessSection from "@/components/sections/BusinessSection";
import AcademicSection from "@/components/sections/AcademicSection";

export default function BusinessPage() {
  return (
    <>
      <div className="px-6 pt-4 pb-4">
        <h1 className="text-xl font-bold text-gray-900">Business</h1>
        <p className="text-sm text-gray-500 mt-1">Books on entrepreneurship, finance, and strategy</p>
      </div>
      <div style={{ background: "#ffffff" }}>
        <BusinessSection />
        <AcademicSection />
      </div>
    </>
  );
}
