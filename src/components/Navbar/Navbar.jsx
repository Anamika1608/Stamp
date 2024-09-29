import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: '3D stamps', href: '/3d-stamps' },
    { name: 'Buy Stamps', href: '/buy-stamps' },
    { name: 'Discussion Forum', href: '/discussion-forum' },
    { name: 'Create!', href: '/create-stamp' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='shadow-lg bg-[#7C2827]'>
      <nav className="text-white px-6 py-4 flex justify-between items-center ibm-plex-mono-regular">
        <Link to='/'>
        <img src="/logo.svg" alt="" className='h-20 w-20 object-cover cursor-pointer' />
        </Link>
       

        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul className={`md:flex space-x-6 md:space-y-0 space-y-4 absolute md:static bg-[#7C2827] md:bg-transparent md:flex-row flex-col top-16 right-0 w-full md:w-auto transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
          {navItems.map((item, index) => (
            <Link to={item.href}>
              <li key={index} className="hover:underline cursor-pointer text-center py-2 md:py-0">{item.name}</li>
            </Link>

          ))}
        </ul>
        <img src="/profile.jpg" alt="profile" className='h-14 w-14 object-cover rounded-full cursor-pointer'  />
      </nav>
    </div>
  );
}

export default Navbar;
