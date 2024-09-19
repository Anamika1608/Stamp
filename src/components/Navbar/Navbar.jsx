import React from 'react'

function Navbar() {
  const navItems = ['3D stamps', 'Store', 'AI lens', 'Create!'];
  return (
    <div className='p-3 shadow-lg bg-[#F5F4E8]'>
      <nav className=" bg-[#7C2827] text-white rounded-full px-6 py-4 flex justify-between items-center mb-8 ibm-plex-mono-regular">
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