import Masonry from 'react-masonry-css';

function Trending() {
    const stampData = [
        {
            img: '/t1.png',
            names: 'Azadi Ka Amrit Mahotsav',
            time: '11-02-2023',
            denomination: '5.00 INR',
        },
        {
            img: '/t4.jpg',
            names: '75th Year of Indian Army Day',
            time: '19-04-2023',
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

    return (
        <div className='bg-[#F5F4E8] pt-20'>
            <div className='text-4xl pl-10 font-medium'>Trending Stamps</div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid flex"
                columnClassName="my-masonry-grid_column"
            >
                {stampData.map((stamp, index) => (
                    <div className='p-10 stamp-card' key={index}>
                        <img src={stamp.img} alt="stamp" className='w-full h-full object-cover rounded-2xl' />
                        <div className='text-center pt-10 ibm-plex-mono-medium text-lg leading-relaxed'>
                            <div className='font-bold text-xl'>Name - {stamp.names}</div>
                            <div className='text-gray-600'>Release Date - {stamp.time}</div>
                            <div className='text-gray-600'>Denomination - {stamp.denomination}</div>
                        </div>

                    </div>
                ))}
            </Masonry>
        </div>
    );
}

export default Trending;
