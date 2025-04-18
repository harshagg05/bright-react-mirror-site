
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-lg font-semibold text-gray-800">
              Herbal Garden
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/garden" className="nav-link">Garden</Link>
            <Link to="/categories" className="nav-link">Categories</Link>
            <Link to="/identify-plant" className="nav-link">Identify Plant</Link>
            <Link to="/about" className="nav-link">About</Link>
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
