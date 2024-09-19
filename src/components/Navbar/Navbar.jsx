import React from 'react'

function Navbar() {
  const navItems = ['3D stamps', 'Store', 'AI lens', 'Create!'];
  return (
    <div className='shadow-lg bg-[#7C2827] '>
      <nav className=" text-white px-6 py-4 flex justify-between items-center ibm-plex-mono-regular">
            <div className="font-bold text-lg">Logo</div>
            <ul className="flex space-x-6">
              {navItems.map((item, index) => (
                <li key={index} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </nav>
    </div>
  )
}

export default Navbar