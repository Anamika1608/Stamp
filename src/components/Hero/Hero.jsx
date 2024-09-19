import React, { useState, useEffect } from 'react';

function Hero() {

  const stamps = [
    {
      name: 'stamp404',
      timePeriod: '1980\'s',
      theme: 'Lotus',
    },
    {
      name: 'stamp405',
      timePeriod: '1990\'s',
      theme: 'Rose',
    },
    {
      name: 'stamp406',
      timePeriod: '2000\'s',
      theme: 'Sunflower',
    },
  ];



  return (
    <div className="bg-[#F5F4E8] p-4">
      <main className="flex">
        <div className="w-2/3 pr-8 pl-14">
          <div className="text-6xl font-serif text-[#4C1F1F] mb-4 young-serif-regular">
            Explore the
            <div className="pt-3">collection of</div>
            <div className="pt-3">Popular vintage</div>
            <div className="pt-2">stamps</div>
          </div>
          <div className="text-[#4C1F1F] mt-10 text-2xl ibm-plex-mono-regular">
            Showcasing the societal and<br />
            architectural heritage of different<br />
            eras.
          </div>
        </div>

        <div className=" bg-white rounded-lg p-52 shadow-md">
         
        </div>
      </main>
    </div>
  );
}

export default Hero;
