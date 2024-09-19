import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';

function Trending() {
    const stampData = [
        {
            img: '/t4.jpg',
            names: '75th Year of Indian Army Day',
            time: '19-04-2023',
            denomination: '5.00 INR',
        },
        {
            img: '/t1.png',
            names: 'Azadi Ka Amrit Mahotsav',
            time: '11-02-2023',
            denomination: '5.00 INR',
        },

        {
            img: '/t3.jpg',
            names: 'Shree Ram Janmabhoomi Temple',
            time: '18-01-2024',
            denomination: '5.00 INR',
        },
        {
            img: '/t2.jpg',
            names: '50th Anniversary of ICRISAT',
            time: '05-02-2022',
            denomination: '5.00 INR',
        },
        {
            img: '/t5.jpg',
            names: 'Democratic Ideals of Sikhism (Collection: Bharat- The Mother of Democracy)',
            time: '25-01-2024',
            denomination: '5.00 INR',
        },
    ];

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <div className='bg-[#F5F4E8] md:pt-10'>
            <div className='md:pl-10 pt-10'>
                <div className='text-4xl inline-block font-medium bg-[#f3e3d3] rounded-xl px-6 py-3 transform '>
                    Trending Stamps
                </div>
            </div>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid flex"
                columnClassName="my-masonry-grid_column"
            >
                {stampData.map((stamp, index) => (
                    <motion.div
                        className='p-10 stamp-card'
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        variants={cardVariants}
                        viewport={{ once: true, amount: 0.2 }} 
                    >
                        <img src={stamp.img} alt="stamp" className='w-full h-full object-cover rounded-2xl scale-90' />
                        <div className='text-center pt-10 ibm-plex-mono-medium text-lg leading-relaxed'>
                            <div className='font-bold text-xl'>Name - {stamp.names}</div>
                            <div className='text-gray-600'>Release Date - {stamp.time}</div>
                            <div className='text-gray-600'>Denomination - {stamp.denomination}</div>
                        </div>
                    </motion.div>
                ))}
            </Masonry>
        </div>
    );
}

export default Trending;
