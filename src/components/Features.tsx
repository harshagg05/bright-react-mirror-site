
import { Search, Leaf, BookOpen, Video } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-[#1B5E20] mx-auto mb-4" />,
      title: "Comprehensive Plant Database",
      description: "Explore detailed information on hundreds of medicinal plants used in traditional AYUSH practices."
    },
    {
      icon: <Leaf className="h-8 w-8 text-[#1B5E20] mx-auto mb-4" />,
      title: "Interactive 3D Models",
      description: "Examine plants from every angle with detailed 3D models to better understand their structure and characteristics."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#1B5E20] mx-auto mb-4" />,
      title: "Traditional Knowledge",
      description: "Discover centuries-old wisdom about medicinal uses, preparation methods, and traditional applications."
    },
    {
      icon: <Video className="h-8 w-8 text-[#1B5E20] mx-auto mb-4" />,
      title: "Virtual Tours",
      description: "Take guided virtual tours organized by medicinal properties, AYUSH systems, or plant families."
    }
  ];

  return (
    <section className="py-16 bg-[#F2FCE2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          Explore Our Virtual Garden
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Our digital platform offers a comprehensive library and virtual tours to aid in
          traditional AYUSH healing systems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center">
              {feature.icon}
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
