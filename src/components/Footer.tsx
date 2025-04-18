
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center text-xl font-semibold text-gray-800 mb-4">
              <Leaf className="mr-2 h-5 w-5 text-primary" /> Herbal Garden
            </Link>
            <p className="text-gray-600 mb-4">
              Discover the healing wisdom of traditional medicinal plants through our interactive digital platform.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Home</Link></li>
              <li><Link to="/garden" className="text-gray-600 hover:text-primary">Garden</Link></li>
              <li><Link to="/categories" className="text-gray-600 hover:text-primary">Categories</Link></li>
              <li><Link to="/identify-plant" className="text-gray-600 hover:text-primary">Identify Plant</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">AYUSH Systems</h3>
            <ul className="space-y-2">
              <li><Link to="/ayurveda" className="text-gray-600 hover:text-primary">Ayurveda</Link></li>
              <li><Link to="/yoga" className="text-gray-600 hover:text-primary">Yoga & Naturopathy</Link></li>
              <li><Link to="/unani" className="text-gray-600 hover:text-primary">Unani</Link></li>
              <li><Link to="/siddha" className="text-gray-600 hover:text-primary">Siddha</Link></li>
              <li><Link to="/homeopathy" className="text-gray-600 hover:text-primary">Homeopathy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-gray-600">123 Herbal Street, Garden City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-600">info@herbalgarden.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Virtual Herbal Garden. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
