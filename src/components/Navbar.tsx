import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useAuth } from '../contexts/AuthContext';
import UserMenu from './UserMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, loading } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Logo />
            <span className="ml-2 text-xl font-bold text-emerald-800">SalesHint</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {loading ? (
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
          ) : user ? (
            <div className="flex items-center space-x-4">
              <Link 
                to="/dashboard"
                className="text-primary-800 hover:text-emerald-900 font-medium transition-colors"
              >
                Dashboard
              </Link>
              <UserMenu />
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Link 
                to="/signin"
                className="text-primary-800 hover:text-primary-900 font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link 
                to="/signup"
                className="btn-primary"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-primary-800 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full staggered-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {loading ? (
              <div className="w-full h-10 bg-gray-200 rounded animate-pulse" />
            ) : user ? (
              <div className="flex flex-col space-y-3 pt-4">
                <div className="text-sm text-gray-600">Signed in as {user.email}</div>
                <Link 
                  to="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn bg-white border border-emerald-800 text-primary-800 hover:bg-primary-50 w-full text-center"
                >
                  Dashboard
                </Link>
                <UserMenu />
              </div>
            ) : (
              <div className="flex flex-col space-y-3 pt-4">
                <Link 
                  to="/signin"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn bg-white border border-primary-800 text-primary-800 hover:bg-primary-50 w-full text-center"
                >
                  Sign In
                </Link>
                <Link 
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-primary w-full text-center"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;