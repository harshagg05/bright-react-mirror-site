
import { Link } from 'react-router-dom';
import { Home, Leaf, Search, Info } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-600" />
              Herbal Garden
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/garden" className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
              <Leaf className="h-4 w-4" />
              <span>Garden</span>
            </Link>
            <Link to="/identify-plant" className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
              <Search className="h-4 w-4" />
              <span>Identify Plant</span>
            </Link>
            <Link to="/about" className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
              <Info className="h-4 w-4" />
              <span>About</span>
            </Link>
          </nav>
          <div className="md:hidden">
            <button 
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
