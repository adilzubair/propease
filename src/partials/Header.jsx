import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/Logo.png'; // Import the logo (adjust path as needed)

function Header() {
  const [top, setTop] = useState(true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  
  
  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileNavOpen) {
        setMobileNavOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileNavOpen]);

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-md shadow-glass' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="flex items-center" aria-label="Propease">
              <img 
                src={logoImage}  // Use the imported image
                alt="Propease Logo" 
                className="h-12 w-auto transition-all duration-300 hover:scale-105" 
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className={`hamburger ${mobileNavOpen ? 'active' : ''} focus:outline-none`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link to="/signin" className="font-medium text-gray-900 hover:text-blue-600 px-5 py-3 flex items-center transition duration-300 ease-in-out relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300">Sign in</Link>
              </li>
              <li>
                <Link to="/signup" className="btn-sm text-white bg-blue-600 hover:bg-neon-400 hover:text-gray-900 ml-3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-neon">
                  <span>Sign up</span>
                  <svg className="w-3 h-3 fill-current text-white flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>                  
                </Link>
              </li>
            </ul>
          </nav>

        </div>

        {/* Mobile navigation */}
        <div 
          className={`fixed inset-0 z-40 md:hidden bg-gray-900 bg-opacity-75 backdrop-blur-sm transition-opacity duration-300 ${mobileNavOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          aria-hidden="true"
          onClick={() => setMobileNavOpen(false)}
        ></div>

        <div
          id="mobile-nav"
          className={`absolute top-full h-screen z-40 left-0 w-full overflow-hidden md:hidden transition-all duration-300 ease-in-out ${mobileNavOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="px-4 py-6 bg-white shadow-lg glass-effect">
            <nav className="mb-6">
              <ul className="flex flex-col space-y-3">
                <li>
                  <Link 
                    to="/signin" 
                    className="flex font-medium text-lg text-gray-900 hover:text-blue-600 py-2 w-full transition duration-300 ease-in-out"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/signup" 
                    className="flex w-full btn-md text-lg text-white bg-blue-600 hover:bg-neon-400 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-neon"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    <span>Sign up</span>
                    <svg className="w-3 h-3 fill-current text-white flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                    </svg>   
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
