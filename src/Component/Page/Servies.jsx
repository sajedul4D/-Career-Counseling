import React from 'react';

const Servies = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5 lg:mt-24  mb-3 '>
            <div className='relative  bg-gradient-to-r from-green-100 via-blue-100 to-gray-100  rounded-2xl shadow-2xl'>
               <div className='absolute lg:-top-10 lg:left-28 border-4 rounded-full w-[25%] mx-auto text-blue-300'>
                <img className=' p-3' src="https://uiparadox.co.uk/templates/educate/v3/assets/media/icons/Pricing.png" alt="" /></div>
                <div className=' p-2 mt-10 text-center space-y-2'>
                    <h2 className='text-xl font-bold rotate-4 ml-3'>Free Trials</h2>
                    <p className=' font-bold rotate-3 ml-3'>Sharing the best and legit free trials so you can try before you buy.</p>
                    <div className='rotate-3 ml-3 border-t-8 text-blue-400 '>
                        <p className='border-t-8 border-b-8  '></p>

</div>
                    </div> 
            </div>
            <div className='relative  bg-gradient-to-r from-green-100 via-blue-100 to-gray-100  rounded-2xl'>
               <div className='absolute lg:-top-10 lg:left-28 border-4 rounded-full w-[25%] mx-auto text-blue-300'>
                <img className=' p-3' src="https://uiparadox.co.uk/templates/educate/v3/assets/media/icons/Quality.png" alt="" /></div>
                <div className=' p-2 mt-10 text-center space-y-2'>
                    <h2 className='text-xl font-bold -rotate-4 ml-3'>Lifetime Access</h2>
                    <b className='font-bold -rotate-4 ml-3'>xploring the best lifetime deals — pay once, use forever.</b>
                   
                    <div className='-rotate-10 ml-3 mt-5 border-t-8 text-indigo-400'>
                        <p className='border-t-8 border-b-8  '></p>

</div>
                    </div> 
            </div>
            
            <div className='relative    bg-gradient-to-r from-green-100 via-blue-100 to-gray-100  rounded-2xl'>
               <div className='absolute lg:-top-10 lg:left-28 border-4 rounded-full w-[25%] mx-auto text-blue-300'>
                <img className=' p-3'src="https://uiparadox.co.uk/templates/educate/v3/assets/media/icons/Check-mark.png" alt="" /></div>
                <div className=' p-2 mt-10 text-center space-y-2'>
                    <h2 className='text-xl font-bold rotate-4 ml-3'>Best Teachers</h2>
                    <b className=' rotate-3 ml-3'>Celebrating the best teachers who inspire, guide, and make learning unforgettable</b>
                    <div className=' ml-3 mt-5 border-t-8 text-pink-400 '>
                        <p className='border-t-8 border-b-8  '></p>

</div>
                    
                    </div> 
            </div>
            <div className='relative   bg-gradient-to-r from-green-100 via-blue-100 to-gray-100 rounded-2xl'>
               <div className='absolute lg:-top-10 lg:left-28 border-4 rounded-full w-[25%] mx-auto text-blue-300'>
                <img  className="p-3"src="https://uiparadox.co.uk/templates/educate/v3/assets/media/icons/Support.png" alt="" /></div>
                <div className=' p-2 mt-10 text-center space-y-2'>
                    <h2 className='text-xl font-bold rotate-4 ml-3'>24/7 Support</h2>
                    <b  className='font-bold rotate-3 ml-3'>Always here, always ready — 24/7 support you can count on.</b>
                    <div className='rotate-3 ml-3 mt-7 border-t-8 text-blue-900 '>
                        <p className='border-t-8 border-b-8  '></p>

</div>
                    
                    </div> 
            </div>
            
            
            
        </div>
    );
};

export default Servies;