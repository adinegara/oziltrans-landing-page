import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FleetSection from "@/components/FleetSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <SEO
        path="/"
        description="Ozil Trans354 Tour & Travel - Rental mobil murah dan terpercaya di Jogja (Yogyakarta), Jawa & seluruh Indonesia. Sewa mobil dengan sopir, lepas kunci, antar jemput bandara. Armada 500+ mobil terawat, harga terjangkau, layanan 24 jam."
        keywords="rental mobil Jogja, rental mobil Yogyakarta, rental mobil Jawa, sewa mobil Jogja, sewa mobil Jawa, sewa mobil Yogyakarta, rental mobil murah Jogja, rental mobil murah Jawa, sewa mobil murah Jogja, rental mobil dengan sopir Jogja, rental mobil dengan sopir Jawa, rental mobil lepas kunci Jogja, sewa mobil harian Jogja, rental mobil bulanan, antar jemput bandara Jogja, antar jemput bandara Yogyakarta, rental mobil Indonesia, Ozil Trans354, tour and travel Jogja"
      />
      <Navbar />
      <HeroSection />
      <FleetSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
};

export default Index;
