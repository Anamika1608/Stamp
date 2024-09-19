import React from 'react';
import Stamps from './Stamps';

function Hero() {
  const stamps = [
    {
      name: 'stamp404',
      timePeriod: "1980's",
      theme: 'Lotus',
    },
    {
      name: 'stamp405',
      timePeriod: "1990's",
      theme: 'Rose',
    },
    {
      name: 'stamp406',
      timePeriod: "2000's",
      theme: 'Sunflower',
    },
  ];

  return (
    <div className="bg-[#F5F4E8] p-6 sm:p-10 md:p-14 md:pb-32">
      <main className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 md:pr-8 md:pl-24 text-center md:text-left">
          <div className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#4C1F1F] mb-4 young-serif-regular">
            Explore the
            <div className="pt-2 sm:pt-3">collection of</div>
            <div className="pt-2 sm:pt-3">Popular vintage</div>
            <div className="pt-2">stamps</div>
          </div>

          <div className="text-[#4C1F1F] mt-6 sm:mt-8 md:mt-10 text-lg sm:text-xl md:text-2xl ibm-plex-mono-regular">
            Showcasing the societal and<br />
            architectural heritage of different<br />
            eras.
          </div>
        </div>
        <div className="mt-72 sm:mt-20 md:mt-32 p-0 sm:p-16 md:p-28">
          <Stamps />
        </div>
      </main>
    </div>
  );
}

export default Hero;
