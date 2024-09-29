import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#EDDCCC] p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Logo */}
        <img src="/logo.svg" alt="Logo" className="h-16 w-16 md:h-20 md:w-20 object-cover mb-4 md:mb-0" />
        
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 align-center md:space-x-16 ibm-plex-mono-medium text-[#4b2e27]">
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About Postal</a>
            <a href="#" className="hover:underline">Explore</a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">Virtual Tour</a>
            <a href="#" className="hover:underline">Community</a>
            <a href="#" className="hover:underline">Store</a>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="mt-4 md:mt-0">
          <img src="/socials.png" alt="socials" className="h-20 w-auto md:scale-75 mx-auto md:mx-0" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
