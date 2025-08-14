import React, { useState } from 'react';

// Define navigation links in an array to avoid repetition
const navLinks = [
  { title: 'Features', href: '#' },
  { title: 'Solutions', href: '#' },
  { title: 'Resources', href: '#' },
  { title: 'Pricing', href: '#' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="pb-2 bg-white lg:pb-0 sticky top-0 z-50 border-b border-gray-200">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-14 lg:h-16">
          <div className="flex-shrink-0">
            <a href="#" title="Company Logo" className="flex">
              PRMIT&R
            </a>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            {/* Hamburger Icon */}
            <svg
              className={`w-6 h-6 ${mobileMenuOpen ? 'hidden' : 'block'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>

            {/* Close Icon */}
            <svg
              className={`w-6 h-6 ${mobileMenuOpen ? 'block' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                title={link.title}
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {link.title}
              </a>
            ))}
          </div>

        </nav>

        {/* Mobile Navigation */}
        <nav
          className={`pt-2 pb-4 bg-white border border-gray-200 rounded-md shadow-md lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="flow-root">
            <div className="flex flex-col px-6 -my-2 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  title={link.title}
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
