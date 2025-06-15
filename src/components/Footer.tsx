
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rm-dark-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/cd38c5c4-91d9-44db-aa69-4d39ac26bf3f.png" 
                alt="Rang Mahal" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <span className="text-xl font-display font-bold">Rang Mahal</span>
                <p className="text-sm rm-light-pink">It's all about colors</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Premium bangles for every occasion. From casual everyday wear to stunning bridal sets, 
              we bring you the finest collection of colorful bangles.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/rangmahal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/rangmahal.rm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.tiktok.com/@rangmahal.rm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/shop" className="text-gray-300 hover:text-white transition-colors">Shop</a></li>
              <li><a href="/categories" className="text-gray-300 hover:text-white transition-colors">Categories</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 rm-light-pink" />
                <a 
                  href="https://wa.me/923298842889" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +92 329 8842889
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 rm-light-pink" />
                <a 
                  href="mailto:rangmahal232@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  rangmahal232@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; 2024 Rang Mahal. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
