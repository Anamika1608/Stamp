import React from 'react'
import { Link } from 'react-router-dom'

function Features() {
    return (
        <div className='bg-[#F5F4E8] pt-60 sm:pt-0'>
            <div className='md:pl-10 pt-5'>
                <div className='text-4xl inline-block font-medium bg-[#f3e3d3] rounded-xl px-6 py-3 transform'>
                    Unique Features
                </div>
            </div>
            <div className='container mx-auto px-4 md:px-8 lg:px-16 mt-10'>
                <div className='flex flex-col md:flex-row md:space-x-20 space-y-8 md:space-y-0 justify-center'>
                    
                    <div className="bg-white rounded-2xl border-2 border-[#605151] p-8 sm:p-10 shadow-lg max-w-sm w-full md:w-80">
                        <div className="flex justify-center mb-6">
                            <img src="/scan.svg" alt="scan" className="w-32 h-32 object-cover" />
                        </div>
                        <div className="text-xl sm:text-3xl font-medium text-center text-[#494232] mb-4">
                            Identify Your Stamp
                        </div>
                        <div className="text-center text-[#6C3131] mb-4 ibm-plex-mono-medium">
                            Scan your stamp to get info about its release date, rarity, etc.
                        </div>
                        <Link to='/stamp-identifier'>
                            <div className='text-center'>
                                <button className="mt-4 px-5 py-2 text-lg sm:text-xl md:text-2xl bg-[#6C3131] text-white rounded-2xl hover:bg-[#805050] transition duration-300">
                                    Scan
                                </button>
                            </div>
                        </Link>
                    </div>

                    <div className="bg-[#D5C2A5] bg-opacity-75 rounded-2xl border-2 border-[#605151] p-8 sm:p-10 shadow-lg max-w-sm w-full md:w-80">
                        <div className="flex justify-center mb-6">
                            <img src="/threeD.png" alt="scan" className="w-36 h-36 object-cover" />
                        </div>
                        <div className="text-xl sm:text-3xl font-medium text-center text-[#494232] mb-4">
                            View Stamps In 3D
                        </div>
                        <div className="text-center text-[#6C3131] mb-4 ibm-plex-mono-medium">
                            Rotate and zoom-in from different angles for clearer picture
                        </div>
                        <Link to='/3D-stamps'>
                        <div className='text-center'>
                            <button className="mt-4 px-5 py-2 text-lg sm:text-xl md:text-2xl bg-[#6C3131] text-white rounded-2xl hover:bg-[#805050] transition duration-300">
                                View
                            </button>
                        </div>
                        </Link>
                        
                    </div>

                    <div className="bg-white rounded-2xl border-2 border-[#605151] p-8 sm:p-10 shadow-lg max-w-sm w-full md:w-80">
                        <div className="flex justify-center mb-6">
                            <img src="/image.jpg" alt="scan" className="w-32 h-32 object-cover rounded-2xl" />
                        </div>
                        <div className="text-xl sm:text-3xl font-medium text-center text-[#494232] mb-4">
                            Create Your Own Using AI
                        </div>
                        <div className="text-center text-[#6C3131] mb-4 ibm-plex-mono-medium">
                            Create stamps of your own choice by giving AI prompt
                        </div>
                        <Link to='/create-stamp'>
                        <div className='text-center'>
                            <button className="mt-4 px-5 py-2 text-lg sm:text-xl md:text-2xl bg-[#6C3131] text-white rounded-2xl hover:bg-[#805050] transition duration-300">
                                Generate
                            </button>
                        </div>
                        </Link>
                        
                    </div>
                    <div className="bg-[#D5C2A5] bg-opacity-75 rounded-2xl border-2 border-[#605151] p-8 sm:p-10 shadow-lg max-w-sm w-full md:w-80">
                        <div className="flex justify-center mb-6">
                            <img src="/exhbition.jpg" alt="scan" className="w-36 h-36 object-cover rounded-2xl" />
                        </div>
                        <div className="text-xl sm:text-3xl font-medium text-center text-[#494232] mb-4">
                            Stamp Exhibition
                        </div>
                        <div className="text-center text-[#6C3131] mb-4 ibm-plex-mono-medium">
                        Immerse yourself in a interactive stamp exhibition experience
                        </div>
                        <Link to='/buy-stamps'>
                        <div className='text-center'>
                            <button className="mt-4 px-5 py-2 text-lg sm:text-xl md:text-2xl bg-[#6C3131] text-white rounded-2xl hover:bg-[#805050] transition duration-300">
                                Explore
                            </button>
                        </div>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
