
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-primary text-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="flex items-center justify-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <Leaf className="mr-2 h-8 w-8" /> Virtual Herbal Garden
          </h1>
          <p className="text-lg md:text-xl mb-4 text-gray-100">
            Explore the Healing Wisdom of AYUSH Medicinal Plants
          </p>
          <p className="mb-8 text-gray-100">
            Discover an interactive journey through traditional medicinal herbs used in 
            Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy systems of 
            medicine.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/garden" className="herbal-btn">
              Explore The Garden
            </Link>
            <Link to="/about" className="herbal-btn-outline bg-transparent border-white text-white hover:bg-white/10">
              Learn About AYUSH
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
