import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedSection from "@/components/FeaturedSection";  // maybe becomes PortfolioSection
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <section className="px-6 md:px-20 py-8 bg-gray-50">
        <SearchBar />
      </section>
      <ServicesSection />
      <WhyChooseUs />
      <FeaturedSection />
      <IndustriesSection />
      <ProcessSection />
      {/* <TestimonialsSection /> */}
      <Footer />
    </main>
  );
}
