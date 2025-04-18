
import { Check } from 'lucide-react';

const AyushSystems = () => {
  const systems = [
    {
      title: "Ayurveda",
      description: "Ancient holistic healing tradition from India focusing on physical, mental, and spiritual well-being through natural remedies.",
      benefits: [
        "Balance the mind-body-spirit connection",
        "Use natural herbs, foods, lifestyle modifications",
        "Holistic approach to health and wellness"
      ]
    },
    {
      title: "Yoga & Naturopathy",
      description: "Yoga combines physical postures, breathing exercises, meditation, and lifestyle modifications for holistic health.",
      benefits: [
        "Improve flexibility and physical strength",
        "Enhance mental clarity and emotional balance",
        "Natural healing through lifestyle changes"
      ]
    },
    {
      title: "Unani",
      description: "A system of alternative medicine that originated in ancient Greece and developed in the Middle East and South Asia.",
      benefits: [
        "Focus on the balance of body elements",
        "Natural treatment methods and herbal remedies",
        "Prevention through dietary and lifestyle changes"
      ]
    },
    {
      title: "Siddha",
      description: "Traditional system of medicine originating in Tamil Nadu, emphasizing on the relationship between mind, body, and spirit.",
      benefits: [
        "Use of herbal preparations and minerals",
        "Strong emphasis on mental health and spiritual well-being",
        "Time-tested therapeutic approaches"
      ]
    },
    {
      title: "Homeopathy",
      description: "A medical system based on the principle that like cures like, using highly diluted natural substances.",
      benefits: [
        "Gentle and natural healing approach",
        "Individualized treatment based on symptoms",
        "Focus on treating the whole person"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          AYUSH Medical Systems
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore the traditional healing systems from India that form the foundation of AYUSH
          medicine and its well-balanced principles and therapeutic approaches.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((system, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{system.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{system.description}</p>
              <ul className="space-y-2">
                {system.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AyushSystems;
