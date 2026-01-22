import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Recruit from '@/components/Recruit';
import NewsSection from '@/components/NewsSection';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <NewsSection />
      <About />
      <Services />
      <Recruit />
      <Contact />
      <Footer />
    </main>
  );
}
