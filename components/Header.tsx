
import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, ChevronDownIcon } from './Icons';

const navLinks = [
  { name: 'FAQ', href: '#faqs' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC<{ isScrolled: boolean; navigateTo: (page: string) => void; }> = ({ isScrolled, navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const handleNavigation = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    navigateTo(target);
    setIsOpen(false);
    setSolutionsOpen(false);
  };
  
  const solutionLinks = (
    <>
      <a
        href="/access-solution"
        onClick={(e) => handleNavigation(e, 'access-solution')}
        className="text-gray-700 hover:bg-gray-200/50 hover:text-gray-900 px-5 py-3 rounded-md text-base font-semibold transition-colors block lg:inline-block"
      >
        Access Card Solution
      </a>
      <a
        href="/business-card-solution"
        onClick={(e) => handleNavigation(e, 'business-card-solution')}
        className="text-gray-700 hover:bg-gray-200/50 hover:text-gray-900 px-5 py-3 rounded-md text-base font-semibold transition-colors block lg:inline-block"
      >
        Business Card Solution
      </a>
    </>
  )

  return (
    <header className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300`}>
      <div className={`mx-auto max-w-7xl transition-all duration-300 rounded-2xl bg-gradient-to-b from-white/50 to-white/40 backdrop-blur-2xl shadow-xl shadow-black/5 border border-white/10`}>
        <div className={`relative flex items-center justify-between h-20 px-6 transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <div className="flex-shrink-0">
            <a href="#hero" onClick={(e) => handleNavigation(e, 'home')} className="flex items-center space-x-2.5">
                <img src="https://cdn.yellowmessenger.com/OeHGBXvpGi7V1763488238850.jpeg" alt="Hawkforce ID Logo" className="h-12 w-auto" />
                <span className="text-xl font-bold font-sans tracking-tighter">Hawkforce ID</span>
            </a>
          </div>
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <nav className="flex items-baseline space-x-4">
               <div className="relative py-2 -my-2" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
                <button
                  className="text-gray-700 hover:bg-gray-200/50 hover:text-gray-900 px-5 py-3 rounded-md text-base font-semibold transition-colors flex items-center gap-1"
                >
                  Solutions <ChevronDownIcon className="w-4 h-4" />
                </button>
                {solutionsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white/60 backdrop-blur-2xl rounded-lg shadow-lg border border-white/10 py-2">
                    {solutionLinks}
                  </div>
                )}
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)}
                  className="text-gray-700 hover:bg-gray-200/50 hover:text-gray-900 px-5 py-3 rounded-md text-base font-semibold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="hidden lg:block">
             <a href="#contact" onClick={(e) => handleNavigation(e, '#contact')} className="bg-black text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-gray-800 transition-all shadow-md">
                Get Started
              </a>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-200/80 inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-black hover:bg-gray-300/80 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/60 backdrop-blur-2xl rounded-b-2xl shadow-lg mt-2 border border-white/10">
            <div>
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="w-full text-left text-gray-700 hover:bg-gray-200/50 hover:text-gray-900 flex justify-between items-center px-3 py-2 rounded-md text-base font-semibold transition-colors"
              >
                Solutions
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  {solutionLinks}
                </div>
              )}
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className="text-gray-700 hover:bg-gray-200/50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-semibold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3 pb-2">
              <a href="#contact" onClick={(e) => handleNavigation(e, '#contact')} className="block w-full text-center bg-black text-white px-5 py-3 rounded-lg text-base font-semibold hover:bg-gray-800 transition-all shadow-md">
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;