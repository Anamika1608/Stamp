import React from 'react';

function Forum() {
    return (
        <div className="bg-[#F5F4E8] p-8">

            <div className="text-center young-serif-regular text-2xl lg:text-3xl font-bold mb-8">
                Share Your Collection, Exchange Ideas, <div className='mt-2'>and Expand Your Philatelic Journey.</div> 
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <div className="bg-[#EDDCCC] p-6 rounded-md text-center">
                    <div className="font-bold uppercase">General Discussion</div>
                    <div className="text-sm mt-2">Talk About Anything And Everything Related To Stamp Collecting</div>
                </div>
                <div className="bg-[#EDDCCC] p-6 rounded-md text-center">
                    <div className="font-bold uppercase">Stamp Identification</div>
                    <div className="text-sm mt-2">Help Each Other Identify Rare And Unique Stamps</div>
                </div>
                <div className="bg-[#EDDCCC] p-6 rounded-md text-center">
                    <div className="font-bold uppercase">Buying And Selling</div>
                    <div className="text-sm mt-2">Discuss Tips And Strategies For Buying And Selling Stamps</div>
                </div>
            </div>

            <div className="mb-6 text-lg font-semibold">Recent Threads</div>

            <div className="bg-white p-4 mb-4 rounded-md">
                <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-[#5A3A2D] rounded-full mr-4"></div>
                    <div>
                        <div className="font-bold capitalize">Aditi Jaiswal</div>
                        <div className="text-sm">2 hours ago</div>
                    </div>
                </div>
                <div className="mb-2">Can anyone help me identify this stamp from 1976?</div>
                <div className="flex space-x-2">
                    <button className="bg-gray-200 px-4 py-1 rounded-md">Reply</button>
                    <button className="bg-gray-200 px-4 py-1 rounded-md">Like</button>
                </div>
            </div>

            <div className="bg-white p-4 mb-4 rounded-md">
                <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-[#A3A092] rounded-full mr-4"></div>
                    <div>
                        <div className="font-bold capitalize">Stamplover3458</div>
                        <div className="text-sm">4 hours ago</div>
                    </div>
                </div>
                <div className="mb-2">Where can I find some good online resources for rare stamps from 1968?</div>
                <div className="flex space-x-2">
                    <button className="bg-gray-200 px-4 py-1 rounded-md">Reply</button>
                    <button className="bg-gray-200 px-4 py-1 rounded-md">Like</button>
                </div>
            </div>

            <div className="bg-white p-4 mb-4 rounded-md">
                <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-[#C2AD94] rounded-full mr-4"></div>
                    <div>
                        <div className="font-bold capitalize">Shreya Sharma</div>
                        <div className="text-sm">7 hours ago</div>
                    </div>
                </div>
                <div className="mb-2">How do I register for the upcoming stamp exhibition in Mumbai?</div>
                <div className="flex space-x-2">
                    <button className="bg-gray-200 px-4 py-1 rounded-md">Reply</button>
                    <button className="bg-gray-200 px-4 py-1 rounded-md">Like</button>
                </div>
            </div>
        </div>
    );
}

export default Forum;
