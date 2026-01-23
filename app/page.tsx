import Hero from "@/components/Hero";
import Recruit from "@/components/Recruit";
import NewsSection from "@/components/NewsSection";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompanyInfo from "@/components/CompanyInfo";
import Vehicles from "@/components/Vehicles";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <NewsSection />
      <CompanyInfo />
      <Vehicles />
      <Recruit />
      <Contact />
      <Footer />
    </main>
  );
}
