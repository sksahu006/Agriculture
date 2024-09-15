import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingBag, FaSearch, FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import logoAg from '../../assets/logoAg.png';

export function DashboardNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  // Simulated authentication state (replace with real authentication logic)
  const isLoggedIn = localStorage.getItem("authToken");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth/sign-in");
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear the token on logout
    navigate("/auth/sign-in");
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Shop', href: '/shop' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const cartItems = [
    { name: 'Delica omtantur', price: 80.00, image: '/api/placeholder/50/50' },
    { name: 'Omnes ocurreret', price: 60.00, image: '/api/placeholder/50/50' },
    { name: 'Agam facilisis', price: 40.00, image: '/api/placeholder/50/50' },
  ];

  return (
    <nav className="shadow-md bg-gradient-to-r from-[#9ff487] to-[#a1fc69]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-20 w-auto" src={logoAg} alt="Logo" />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="p-1 rounded-full text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <FaSearch className="h-6 w-6" />
            </button>
            <div className="ml-3 relative">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="p-1 rounded-full text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FaShoppingBag className="h-6 w-6" />
              </button>
              {isCartOpen && (
                <div className="origin-top-right absolute z-10 right-0 mt-2 w-80 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-4 py-2">
                    <p className="text-sm font-medium text-gray-900">Shopping Cart</p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {cartItems.map((item, index) => (
                      <div key={index} className="flex items-center px-4 py-3">
                        <img src={item.image} alt={item.name} className="h-10 w-10 rounded-full" />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-sm font-medium text-gray-900">Total: $180.00</p>
                    <button className="mt-2 w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      View Cart
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={handleLogout}
              className="p-1 ml-3 rounded-full text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FaSignOutAlt className="h-6 w-6" />
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default DashboardNavbar;
