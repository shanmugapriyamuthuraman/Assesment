import TechBooksSection from "@/components/sections/TechBooksSection";
import AcademicSection from "@/components/sections/AcademicSection";

export default function TechPage() {
  return (
    <>
      <div className="px-6 pt-4 pb-4">
        <h1 className="text-xl font-bold text-gray-900">Tech Books</h1>
        <p className="text-sm text-gray-500 mt-1">Technology, programming, and digital innovation</p>
      </div>
      <div style={{ background: "#ffffff" }}>
        <TechBooksSection />
        <AcademicSection />
      </div>
    </>
  );
}
