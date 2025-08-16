import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { navLinks } from '../constants';

const exploreSubmenu = [
  { id: 'services', title: 'Services' },
  { id: 'industries', title: 'Industries' },
  { id: 'blog', title: 'Blog' },
];

const Navbar = () => {
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinkClass = "text-white font-poppins text-[16px] font-normal";

  const handleSectionClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
    setDesktopDropdownOpen(false);
  };

  const handleMobileSectionClick = (sectionId) => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);

    if (window.location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  const handleDesktopDropdownItemClick = (id) => {
    setDesktopDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate(`/${id}`);
  };

  const handleMobileDropdownItemClick = (id) => {
    setMobileDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate(`/${id}`);
  };

  return (
    <nav
      id="main-navbar"
      className="fixed top-0 left-0 w-full z-50 flex py-0 px-0 md:px-10 justify-between items-center"
      style={{
        background: `linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)`,
        height: '80px',
      }}
    >
      {/* Logo and brand */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/logo.png"
            alt="Deepthi Labels"
            className="w-[58px] h-[58px] sm:w-[68px] sm:h-[66px] rounded-full object-cover ml-2 mr-0"
          />

        </Link>
        <Link
          to="/"
          className="text-transparent bg-clip-text text-gradient bg-gradient-to-r from-green-400 to-teal-600 ss:leading-[100.8px] leading-[75px] text-2xl font-bold ml-3 hidden sm:inline-block"
        >
          Deepthi Labels
        </Link>

      </div>

      {/* Desktop menu */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, i) => {
          if (nav.id === 'explore') {
            return (
              <li
                key={nav.id}
                className={`relative cursor-pointer ${navLinkClass} ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
              >
                <button
                  type="button"
                  className={`bg-transparent border-none flex items-center ${navLinkClass}`}
                  onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                  aria-haspopup="true"
                  aria-expanded={desktopDropdownOpen}
                >
                  {nav.title}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={desktopDropdownOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                    />
                  </svg>
                </button>

                {desktopDropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2 bg-primary rounded shadow-lg min-w-[150px] z-50">
                    {exploreSubmenu.map((item) => (
                      <li
                        key={item.id}
                        className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white whitespace-nowrap"
                        onClick={() => handleDesktopDropdownItemClick(item.id)}
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          }

          return (
            <li
              key={nav.id}
              className={`cursor-pointer ${navLinkClass} ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            >
              {nav.id === 'home' ? (
                <Link
                  to="/"
                  className={navLinkClass}
                  onClick={() => setDesktopDropdownOpen(false)}
                >
                  {nav.title}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => handleSectionClick(nav.id)}
                  className={`bg-transparent border-none ${navLinkClass}`}
                >
                  {nav.title}
                </button>
              )}
            </li>
          );
        })}
      </ul>

      {/* Mobile menu icon */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white focus:outline-none mr-2"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {!mobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <ul className="sm:hidden absolute top-[80px] left-0 w-full bg-primary flex flex-col items-start px-6 py-4 z-50">
          {navLinks.map((nav) => {
            if (nav.id === 'explore') {
              return (
                <li key={nav.id} className="w-full mb-3">
                  <button
                    type="button"
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="flex justify-between items-center w-full text-white font-poppins text-[16px] font-normal"
                    aria-haspopup="true"
                    aria-expanded={mobileDropdownOpen}
                  >
                    {nav.title}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={mobileDropdownOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                      />
                    </svg>
                  </button>
                  {mobileDropdownOpen && (
                    <ul className="mt-2 flex flex-col pl-4 border-l border-gray-600">
                      {exploreSubmenu.map((item) => (
                        <li
                          key={item.id}
                          className="py-2 text-white cursor-pointer hover:text-gray-300"
                          onClick={() => handleMobileDropdownItemClick(item.id)}
                        >
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li key={nav.id} className="w-full mb-3">
                {nav.id === 'home' ? (
                  <Link
                    to="/"
                    className="text-white font-poppins text-[16px] font-normal block w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {nav.title}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleMobileSectionClick(nav.id)}
                    className="text-white font-poppins text-[16px] font-normal w-full text-left"
                  >
                    {nav.title}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
