import HeroBanner from "@/components/sections/HeroBanner";
import GenrePills from "@/components/sections/GenrePills";
import NewArrivalSection from "@/components/sections/NewArrivalSection";
import RecommendedCarousel from "@/components/sections/RecommendedCarousel";
import BestSellerSection from "@/components/sections/BestSellerSection";
import AuthorSpotlight from "@/components/sections/AuthorSpotlight";
import CrimeFictionSection from "@/components/sections/CrimeFictionSection";
import NonFictionSection from "@/components/sections/NonFictionSection";
import FamousAuthors from "@/components/sections/FamousAuthors";
import AcademicSection from "@/components/sections/AcademicSection";
import BusinessSection from "@/components/sections/BusinessSection";
import TechBooksSection from "@/components/sections/TechBooksSection";
import ClassicsSection from "@/components/sections/ClassicsSection";

export default function BrowsePage() {
  return (
    <>
      <HeroBanner />
      <GenrePills />
      <div style={{ background: "#ffffff", marginTop: "60px" }}>
        <NewArrivalSection />
        <RecommendedCarousel />
        <BestSellerSection />
        <AuthorSpotlight />
        <CrimeFictionSection />
        <NonFictionSection />
        <FamousAuthors />
        <AcademicSection />
        <BusinessSection />
        <TechBooksSection />
        <ClassicsSection />
      </div>
    </>
  );
}
