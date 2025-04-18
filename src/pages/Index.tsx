
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FeaturedPlants from '@/components/FeaturedPlants';
import AyushSystems from '@/components/AyushSystems';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <FeaturedPlants />
      <AyushSystems />
      <Footer />
    </div>
  );
};

export default Index;
