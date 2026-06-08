import { useState } from 'react';
import logo from '../../assets/logo-dark.png'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
          <img src={logo} alt="Shehan Fernando" className="h-10 md:h-14 w-auto object-contain" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#works" className="hover:text-primary transition-colors">Selected Works</a>
          <a href="#stack" className="hover:text-primary transition-colors">The Engine</a>
          <a href="https://github.com/shehandfernando" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub ↗</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="md:hidden text-primary p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            /* Close Icon (X) */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger Icon (3 lines) */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-white/10 p-8 flex flex-col gap-6 text-center">
          <a href="#works" onClick={() => setIsOpen(false)} className="text-lg hover:text-primary transition-colors">Selected Works</a>
          <a href="#stack" onClick={() => setIsOpen(false)} className="text-lg hover:text-primary transition-colors">The Engine</a>
          <a href="https://github.com/shehandfernando" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">GitHub</a>
        </div>
      )}
    </nav>
  );
}