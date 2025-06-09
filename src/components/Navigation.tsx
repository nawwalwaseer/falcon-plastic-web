
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/553f0fdb-33fc-4d52-9d60-0d9fa820291f.png" 
              alt="Falcon Plastic Industries" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-falcon-dark-blue">
              Falcon Plastic Industries
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-falcon-blue border-b-2 border-falcon-blue'
                    : 'text-gray-700 hover:text-falcon-blue'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/923218855277"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-falcon-blue text-white px-6 py-2 rounded-lg hover:bg-falcon-dark-blue transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-falcon-blue"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-falcon-blue bg-falcon-light-blue/10'
                      : 'text-gray-700 hover:text-falcon-blue hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/923218855277"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-falcon-blue text-white px-6 py-2 rounded-lg hover:bg-falcon-dark-blue transition-colors duration-200 mt-4"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
