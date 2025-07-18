import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FestivalSection from "@/components/FestivalSection";
import NewsSection from "@/components/NewsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <FestivalSection />
      <NewsSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
