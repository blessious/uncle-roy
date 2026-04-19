import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { MissionVision } from "@/components/landing/MissionVision";
import { ProductShowroom } from "@/components/landing/ProductShowroom";
import { Recipes } from "@/components/landing/Recipes";
import { PanaloStories } from "@/components/landing/PanaloStories";
import { Footer } from "@/components/landing/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SmoothScroll />
      <Navbar />
      <Hero />
      <MissionVision />
      <ProductShowroom />
      <Recipes />
      <PanaloStories />
      <Footer />
    </main>
  );
};

export default Index;
