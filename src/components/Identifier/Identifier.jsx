import React, { useState } from 'react';

function Identifier() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [identified, setIdentified] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); 
      setLoading(true);
      
      setTimeout(() => {
        setLoading(false);
        setIdentified(true);
      }, 3000); 
    }
  };

  return (
    <div className='bg-[#F5F4E8]'>
      <div className='text-4xl text-center young-serif-regular text-[4C1F1F] p-10'>
        AI Based Stamp Identifier
      </div>

      <div className="flex flex-col items-center justify-center p-6  border-brown-500 rounded-lg pb-44 pt-20">
        {!image && (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="flex items-center px-4 py-2 mb-2 text-white bg-brown-500 rounded hover:bg-brown-600 cursor-pointer">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16h16V4H4zm4 4h8v8H8V8z"></path>
              </svg>
              Upload image
            </label>
            <p className="text-sm text-brown-500">Browse file or URL</p>
          </>
        )}

        {image && (
          <>
            <img
              src={image}
              alt="Uploaded"
              className="w-72 h-64 object-contain scale-110 rounded-lg"
            />

            {loading && (
              <p className="text-lg text-brown-500 mt-4 font-medium p-2">
                Hold on , We are identifying your stamp...
              </p>
            )}
          </>
        )}

        {!loading && identified && (
          <div className="mt-4 p-4 text-center bg-gray-100 border border-gray-300 rounded">
            <p className="text-lg text-green-600 font-bold">
              Stamp identified as: <span className="text-brown-500">" Shree Ram Janambhoomi Temple"</span>
              <br />
              Date of Release : <span className="text-brown-500">1/18/2024</span>
              <br />
              Quantity of Print : <span className="text-brown-500">1000000</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Identifier;
