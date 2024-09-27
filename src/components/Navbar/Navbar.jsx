import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['3D stamps', 'Store', 'AI lens', 'Create!'];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='shadow-lg bg-[#7C2827]'>
      <nav className="text-white px-6 py-4 flex justify-between items-center ibm-plex-mono-regular">
        <div className="font-bold text-lg">Logo</div>

        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul className={`md:flex space-x-6 md:space-y-0 space-y-4 absolute md:static bg-[#7C2827] md:bg-transparent md:flex-row flex-col top-16 right-0 w-full md:w-auto transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
          {navItems.map((item, index) => (
            <li key={index} className="hover:underline cursor-pointer text-center py-2 md:py-0">{item}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
