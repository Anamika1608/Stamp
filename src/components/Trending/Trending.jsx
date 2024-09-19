import { div } from 'framer-motion/client';
import React from 'react'

function Trending() {
    const stampData = [
        {
            img: '/bapu_stamp.jpg',
            names: 'Bapu Stamp',
            time: '15 AUG 1948',
            theme: 'Personality'
        },
        {
            img: '/games_stamp.jpg',
            names: 'Game Stamp',
            time: '04 March 1951',
            theme: 'Event'
        },
        {
            img: '/tajmahal_stamp.jpg',
            names: 'Taj Mahal, Agra',
            time: '16 Dec 2004',
            theme: 'Monument'
        }
    ];
    return (
        <div className='bg-[#F5F4E8]'>
            <div className='text-center young-serif-regular text-3xl'>Trending Stamps</div>
            <div className='flex justify-center items-center py-10'>
                {
                    stampData.map((stamp) => (

                        <div className='p-10'>
                            <img src={stamp.img} alt="stamp" className='w-60 h-60 object-cover rounded-xl'/>
                            <div className=' text-center pt-10 ibm-plex-mono-medium'>
                            <div>{stamp.names}</div>
                            <div>{stamp.title}</div>
                            <div>{stamp.theme}</div>
                            </div>
                           
                        </div>

                    ))}
            </div>
        </div>
    )
}

export default Trending