import React from 'react'

function Identifier() {
  return (
    <div className='bg-[#F5F4E8]'>
        <div className='text-4xl text-center young-serif-regular text-[4C1F1F] p-10'>AI Based Image Identifier</div>
        <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-brown-500 rounded-lg bg-white">
      <button className="flex items-center px-4 py-2 mb-2 text-white bg-brown-500 rounded hover:bg-brown-600">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16h16V4H4zm4 4h8v8H8V8z"></path>
        </svg>
        Upload image
      </button>
      <p className="text-sm text-brown-500">browse file or URL</p>
    </div>
 
    </div>
  )
}

export default Identifier