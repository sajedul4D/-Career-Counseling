import React from 'react';
import Banner from './Page/Banner';
import Servies from './Page/Servies';

import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from './Page/CourseCard';
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaFutbol } from "react-icons/fa";
const Home = () => {
    const data=useLoaderData()
    
   
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <Servies></Servies>
    <div className='flex justify-between items-center mt-20'> 
        <div>
        <h2 className='text-3xl font-serif' > ____ Course Categories
</h2>
<p className='text-2xl font-mono'>Begin Your Learning,
Something For Everyone</p>
<div className='flex justify-center items-center mt-10'>
<svg class="size-20 animate-bounce ...">

<FaFutbol></FaFutbol>
</svg>
</div>
        </div>
        <div className='flex gap-2'>
   
            <Link to="/course" className='btn text-xl font-bold text-white bg-green-400'>
            
<svg class="size-5  animate-spin ...">
<FaAngleDoubleRight></FaAngleDoubleRight>
</svg>

                View More</Link>
        </div>
    </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                 data.slice(0,6).map(categoryes=><CourseCard key={categoryes.id} categoryes={categoryes}></CourseCard>)   
                }
            </div>

        </div>
    );
};

export default Home;