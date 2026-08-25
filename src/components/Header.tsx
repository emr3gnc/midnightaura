import React from 'react';
import Image from 'next/image';
import { ShoppingBag, Menu, User, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Background Underlay with Blur to prevent clipping of overflowing children */}
      <div className="absolute inset-0 bg-cherry/95 backdrop-blur-md border-b border-offwhite/10 z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center h-16 relative">
          
          {/* Mobile Menu */}
          <div className="flex items-center md:hidden flex-1">
            <button className="text-[#D4AF37] p-2 hover:text-[#F3E5AB]">
              <Menu size={24} />
            </button>
          </div>
          
          {/* Desktop Navigation Left */}
          <nav className="hidden md:flex space-x-8 flex-1">
            <a href="#" className="bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent hover:opacity-80 transition-opacity uppercase tracking-widest text-sm font-bold drop-shadow-sm">Yeni Gelenler</a>
            <a href="#" className="bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent hover:opacity-80 transition-opacity uppercase tracking-widest text-sm font-bold drop-shadow-sm">Koleksiyonlar</a>
            <a href="#" className="bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent hover:opacity-80 transition-opacity uppercase tracking-widest text-sm font-bold drop-shadow-sm">İndirim</a>
          </nav>
          
          {/* Logo - Centered absolutely */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer pointer-events-none mt-4 md:mt-8">
            <div className="relative w-40 h-32 md:w-64 md:h-48 pointer-events-auto">
              <Image 
                src="/logo-new.png" 
                alt="Midnight Aura" 
                fill 
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          {/* Right Icons */}
          <div className="flex items-center justify-end space-x-4 md:space-x-6 text-[#E5C158] flex-1">
            <button className="hidden md:block hover:text-[#FCF6BA] transition-colors">
              <Search size={22} />
            </button>
            <button className="hover:text-[#FCF6BA] transition-colors">
              <User size={22} />
            </button>
            <button className="hover:text-[#FCF6BA] transition-colors relative">
              <ShoppingBag size={22} />
              <span className="absolute -top-1 -right-2 bg-gradient-to-r from-[#BF953F] to-[#B38728] text-cherry text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>

          
        </div>
      </div>
    </header>
  );
};

export default Header;
