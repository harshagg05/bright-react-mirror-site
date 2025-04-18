
import { ArrowRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedPlants = () => {
  // Sample plants data
  const plants = [
    {
      id: 1,
      name: "Tulsi (Holy Basil)",
      scientificName: "Ocimum sanctum",
      image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "A sacred plant in Ayurvedic medicine known for its healing properties."
    },
    {
      id: 2,
      name: "Ashwagandha",
      scientificName: "Withania somnifera",
      image: "https://images.unsplash.com/photo-1620236104164-593eb580ae12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "An adaptogenic herb used to reduce stress and improve concentration."
    },
    {
      id: 3,
      name: "Neem",
      scientificName: "Azadirachta indica",
      image: "https://images.unsplash.com/photo-1618494023454-9b554ea1fa78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Known for its antibacterial, antifungal, and blood-purifying properties."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="section-title">
            <Leaf className="h-6 w-6 text-primary" /> Featured Medicinal Plants
          </h2>
          <Link to="/plants" className="flex items-center text-primary hover:text-primary/80 text-sm font-medium">
            View All Plants <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant) => (
            <div key={plant.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={plant.image} 
                  alt={plant.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{plant.name}</h3>
                <p className="text-sm text-gray-500 italic mb-2">{plant.scientificName}</p>
                <p className="text-gray-600 mb-4">{plant.description}</p>
                <Link 
                  to={`/plants/${plant.id}`} 
                  className="text-primary hover:text-primary/80 font-medium flex items-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlants;
