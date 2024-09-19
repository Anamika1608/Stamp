
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f3e3d3] p-8">
      <div className="flex justify-between items-start">

        <div className="text-[#4b2e27] text-3xl font-bold">Logo</div>
        
        <div className="flex space-x-16 ibm-plex-mono-medium">
          <div className="flex flex-col space-y-2 text-[#4b2e27]">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About Postal</a>
            <a href="#" className="hover:underline">Explore</a>
          </div>
          <div className="flex flex-col space-y-2 text-[#4b2e27]">
            <a href="#" className="hover:underline">Virtual Tour</a>
            <a href="#" className="hover:underline">Community</a>
            <a href="#" className="hover:underline">Store</a>
            
          </div>
        </div>
        
        <div className="flex flex-col">
          <span className="text-[#4b2e27] font-bold">socials</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><i class="fa fa-linkedin" aria-hidden="true"></i> </a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-linkedin-in"></i> </a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i> </a>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
