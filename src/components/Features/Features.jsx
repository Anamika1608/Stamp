import { div } from 'framer-motion/client'
import React from 'react'

function Features() {
    return (
        <div className='bg-[#F5F4E8]'>
            <div className='text-4xl pl-10 pb-10 font-medium'>UNIQUE FEATURES</div>
            <div className='flex '>
                <div className="bg-white rounded-2xl border-2 border-[#605151] p-8 sm:p-10 shadow-lg max-w-sm mx-auto">
                    <div className="flex justify-center mb-6">
                        <img src="/scan.svg" alt="scan" className="w-32 h-32 object-cover " />
                    </div>
                    <div className="text-xl sm:text-3xl font-medium text-center text-[#494232] mb-4">
                        Identify Your Stamp
                    </div>
                    <div className="text-center text-[#6C3131] mb-4 ibm-plex-mono-medium">
                        Scan your stamp to get info about its release date, rarity, etc.
                    </div>
                    <div className='text-center'>
                        <button className="mt-4 px-5 py-2 text-lg sm:text-xl md:text-2xl bg-[#6C3131] text-white rounded-2xl hover:bg-[#805050] transition duration-300">
                            Scan
                        </button>
                    </div>
                </div>
                <div className="bg-[#D5C2A5] bg-opacity-75 rounded-2xl border-2 border-[#605151] p-8 sm:p-10 shadow-lg max-w-sm mx-auto">
                    <div className="flex justify-center mb-6">
                        <img src="/3D.svg" alt="scan" className="w-32 h-32 object-cover" />
                    </div>
                    <div className="text-xl sm:text-3xl font-medium text-center text-[#494232] mb-4">
                        View Stamps In 3D
                    </div>
                    <div className="text-center text-[#6C3131] mb-4 ibm-plex-mono-medium">
                        Rotate and zoom-in from different angles for clearer picture
                    </div>
                    <div className='text-center'>
                        <button className="mt-4 px-5 py-2 text-lg sm:text-xl md:text-2xl bg-[#6C3131] text-white rounded-2xl hover:bg-[#805050] transition duration-300">
                            View
                        </button>
                    </div>
                </div>
                <div className=" bg-white rounded-2xl border-2 border-[#605151] p-8 sm:p-10 shadow-lg max-w-sm mx-auto">
                    <div className="flex justify-center mb-6">
                        <img src="/scan.svg" alt="scan" className="w-32 h-32 object-cover" />
                    </div>
                    <div className="text-xl sm:text-3xl font-medium text-center text-[#494232] mb-4">
                        Create Your Own Using AI
                    </div>
                    <div className="text-center text-[#6C3131] mb-4 ibm-plex-mono-medium">
                        Create stamps of your own choice by giving AI prompt
                    </div>
                    <div className='text-center'>
                        <button className="mt-4 px-5 py-2 text-lg sm:text-xl md:text-2xl bg-[#6C3131] text-white rounded-2xl hover:bg-[#805050] transition duration-300">
                            Generate
                        </button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Features