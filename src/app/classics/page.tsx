import ClassicsSection from "@/components/sections/ClassicsSection";
import CrimeFictionSection from "@/components/sections/CrimeFictionSection";

export default function ClassicsPage() {
  return (
    <>
      <div className="px-6 pt-4 pb-4">
        <h1 className="text-xl font-bold text-gray-900">Classics</h1>
        <p className="text-sm text-gray-500 mt-1">Timeless literary masterpieces</p>
      </div>
      <div style={{ background: "#ffffff" }}>
        <ClassicsSection />
        <CrimeFictionSection />
      </div>
    </>
  );
}
