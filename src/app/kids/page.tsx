import NewArrivalSection from "@/components/sections/NewArrivalSection";
import CrimeFictionSection from "@/components/sections/CrimeFictionSection";

export default function KidsPage() {
  return (
    <>
      <div className="px-6 pt-4 pb-4">
        <h1 className="text-xl font-bold text-gray-900">Kids</h1>
        <p className="text-sm text-gray-500 mt-1">Books for children and young readers</p>
      </div>
      <div style={{ background: "#ffffff" }}>
        <NewArrivalSection />
        <CrimeFictionSection />
      </div>
    </>
  );
}
