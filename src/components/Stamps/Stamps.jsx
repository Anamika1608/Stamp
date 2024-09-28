import React, { useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import data from './data';
import { Link } from 'react-router-dom';

function Stamps() {
  const cld = new Cloudinary({ cloud: { cloudName: 'dfdz50ehp' } });
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (stampName) => {
    setWishlist(prev => ({ ...prev, [stampName]: !prev[stampName] }));
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-400 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 shadow-lg inline-block p-4 bg-[#f3e3d3] rounded-xl">
        Buy your favourite stamp
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((d) => {
          const img = cld
            .image(d.ImageOfCPS)
            .format('auto')
            .quality('auto')
            .resize(auto().gravity(autoGravity()).width(500).height(500));

          return (
            <div
              key={d.NameOfStamp}
              className="flex flex-col border rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-white"
            >
              <div className="relative">
                <AdvancedImage
                  cldImg={img}
                  alt={d.NameOfStamp}
                  className="w-full h-64 object-contain bg-gray-100 rounded-t-xl"
                />
                <button
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition duration-300"
                  onClick={() => toggleWishlist(d.NameOfStamp)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${wishlist[d.NameOfStamp] ? 'text-red-500 fill-red-500' : 'text-gray-500'}`}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <div className="p-4 flex-grow bg-[#F9F1EC]">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{d.NameOfStamp}</h2>
                <p className="text-md text-gray-600 mb-1"><b>Released:</b> {d.DateOfRelease}</p>
                <p className="text-md text-gray-600 mb-1"><b>Denomination:</b> {d.Denomination}</p>
                <p className="text-md text-gray-600 mb-1"><b>Quantity:</b> {d.Quantity}</p>
                <p className="text-base text-gray-700 mt-2">{d.Description}</p>
              </div>
              <div className="p-4 flex bg-[#F9F1EC] justify-between items-center border-t mt-auto">
                <Link to={d.Brochure}>
                  <button
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300"
                    onClick={() => d.Brochure}
                  >
                    View Brochure
                  </button>
                </Link>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-md flex items-center shadow-lg transform transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stamps;