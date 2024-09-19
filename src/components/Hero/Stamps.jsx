import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Stamps() {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stampData.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, [stampData.length]);

  return (
    <div className='flex justify-center items-center '>
      {stampData.map((stamp, index) => {
        const isCurrent = index === currentIndex;
        const isPrevious = (index + 1) % stampData.length === currentIndex;
        const isNext = (index - 1 + stampData.length) % stampData.length === currentIndex;

        let scale = 1;
        let opacity = 1;
        let y = 0;

        if (isPrevious) {
          scale = 0.7;
          opacity = 0;  
          y = -100; 
        } else if (isNext) {
          scale = 0.7;
          opacity = 0; 
          y = 100; 
        }

        return (
          <motion.div
            key={index}
            className='absolute'
            animate={{
              scale: isCurrent ? 1.5 : scale, 
              opacity: isCurrent ? 1 : opacity,
              y: isCurrent ? 0 : y,
            }}
            initial={false}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ pointerEvents: isCurrent ? 'auto' : 'none' }}
          >
            <div className='flex flex-col items-center'>
              <motion.img
                src={stamp.img}
                alt={stamp.names}
                className='w-60 h-60 object-cover' 
              />
              <motion.div
                className='text-center ibm-plex-mono-medium mt-4'
                animate={{ opacity: isCurrent ? 1 : 0 }}
              >
                <div className=''>Name - {stamp.names}</div>
                <div>Time Period - {stamp.time}</div>
                <div>Main Theme - {stamp.theme}</div>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Stamps;
