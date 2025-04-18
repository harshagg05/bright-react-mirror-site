
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Leaf, Check } from "lucide-react";

const About = () => {
  return (
    <div>
      <Navbar />
      
      <div className="bg-accent py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">About the AYUSH Virtual Herbal Garden</h1>
          <p className="text-lg text-gray-600">
            Learn about our mission to digitally preserve and share the rich botanical heritage of traditional medicine 
            systems from India.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              The AYUSH Virtual Herbal Garden aims to create an accessible digital platform that showcases the diverse medicinal 
              plants used in traditional Indian medicine systems. Our goal is to preserve and promote this valuable knowledge for 
              researchers, practitioners, students, and enthusiasts worldwide.
            </p>
            <p className="text-gray-700 mb-6">
              By creating a comprehensive information resource, we provide an immersive educational experience that helps 
              people explore, learn, and understand the significance of these healing plants that have supported human health for millennia.
            </p>
            <p className="text-gray-700">
              We believe in making traditional knowledge accessible to all, bridging the gap between ancient practices and modern 
              understanding, and fostering appreciation for the natural remedies that have supported human health for millennia.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Why Virtual Garden?</h2>
            <div className="space-y-5">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Accessibility</h3>
                  <p className="text-gray-600">Makes rare and geographically restricted plants available to everyone.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Conservation</h3>
                  <p className="text-gray-600">Documents and preserves knowledge about medicinal plants, some of which are endangered.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Education</h3>
                  <p className="text-gray-600">Provides interactive learning experiences for students and practitioners.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Integration</h3>
                  <p className="text-gray-600">Combines traditional knowledge with modern technology and research insights.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="section-title">
            <Leaf className="h-6 w-6 text-primary" /> AYUSH Medical Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Ayurveda</h3>
              <p className="text-gray-700 mb-4">
                One of the world's oldest holistic healing systems, developed in India more than 3,000 years ago. It emphasizes 
                balance between body, mind, and spirit to promote health.
              </p>
              <h4 className="font-medium mb-2">Key Principles:</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Based on the theory of three doshas (Vata, Pitta, Kapha)</li>
                <li>Focuses on prevention and holistic treatment</li>
                <li>Uses diet, herbs, lifestyle modifications, and detoxification</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Yoga & Naturopathy</h3>
              <p className="text-gray-700 mb-4">
                Yoga combines physical postures, breathing exercises, meditation, and a distinct philosophy. Naturopathy emphasizes 
                the body's inherent self-healing abilities.
              </p>
              <h4 className="font-medium mb-2">Key Principles:</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Mind-body integration through asanas (postures) and pranayama (breathing)</li>
                <li>Holistic approach to wellness</li>
                <li>Natural healing methods using elements like water, air, earth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
