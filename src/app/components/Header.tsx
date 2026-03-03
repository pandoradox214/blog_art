import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-bold text-gray-900">
            Your Name
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Home
            </a>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-gray-900 transition-colors"
            >
              Home
            </a>
            <a
              href="#gallery"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-gray-900 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
