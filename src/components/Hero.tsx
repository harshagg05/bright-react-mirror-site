
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-[#1B5E20] text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="flex items-center justify-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <Leaf className="mr-2 h-8 w-8" /> Virtual Herbal Garden
          </h1>
          <p className="text-lg md:text-xl mb-4">
            Explore the Healing Wisdom of AYUSH Medicine Plants
          </p>
          <p className="mb-8 text-gray-100">
            Discover an interactive journey through traditional medicinal herbs used in 
            Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy systems of 
            medicine.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/garden" 
              className="inline-block bg-transparent border-2 border-white px-6 py-2 rounded-md text-white hover:bg-white/10 transition-colors">
              Explore Our Garden
            </Link>
            <Link to="/about" 
              className="inline-block bg-white/20 px-6 py-2 rounded-md text-white hover:bg-white/30 transition-colors">
              Learn About AYUSH
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
