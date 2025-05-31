import React from 'react';
import { useLoaderData } from 'react-router-dom';
import banner from "../../assets/undraw_to-the-moon_w1wa.svg"
import CourseCard from './CourseCard';
import  img from '../../assets/Polite Chicky.gif';
const Course = () => {
    const allData=useLoaderData();
    console.log(allData);
    return (
        <div className='w-11/12 mx-auto mt-7'>
            <div className='flex items-center'>
                <img src={img} alt="" />
                <h1 className='w-[30%]  mx-auto text-5xl font-bold '>Course Listing</h1>
                <img className='w-[40%] ' src={banner} alt="" />
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    allData.map(categoryes=><CourseCard key={categoryes.id} categoryes={categoryes}></CourseCard>)  
                }
            </div>
        </div>
    );
};

export default Course;