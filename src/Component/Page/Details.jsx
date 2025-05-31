import React from 'react';
import  img from '../../assets/Polite Chicky.gif';
import banner from "../../assets/undraw_to-the-moon_w1wa.svg"
import {  useLoaderData } from 'react-router-dom';
import { IoIosStar } from 'react-icons/io';
import { FaClock, FaTimes, FaUserTimes, FaVideo } from "react-icons/fa";
import toast from 'react-hot-toast';
const Details = () => {
    const handleComment=()=>{
        toast.success("Your purchase has been confirmed!")
    }
    const {information,author,rating,counselor,duration,pricing,description,category,service_name,image,Time,Videos,Difficulty}=useLoaderData()
    return (
        <div className='w-5/6 mx-auto'>
            
            <div className='flex items-center'>
                <img src={img} alt="" />
               <h1 className='w-[30%]  mx-auto text-5xl font-bold '>Details Listing</h1>
                <img className='w-[40%] ' src={banner} alt="" />
            </div> 
            <div className="headdiv">

            <div id='uuuuuu' className=' flex justify-between items-center  bg-base-200 shadow-2xl p-4 rounded-2xl border-l-2 border-r-2 mt-10'>
            <div className="flex space-x-4 ">
		<img alt="" src={author} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{counselor}</a>
			<span className="text-xs dark:text-gray-600">{category}</span>
            
		</div>
	</div>
    <div className='text-center '>
        <h2 className='font-bold'>Enroll Date</h2>
        <h2 className=' font-bold'>{duration}</h2>
    </div>
            </div>

            <div className='flex gap-10 mt-10'>
                <div className='w-[50%] mx-auto space-y-10'>
                <h2 className='text-4xl font-bold text-green-700 text-center '>{service_name}</h2>
                <div className='flex justify-between items-center'>
                    <h2 className='text-xl font-mono'>counselor:{counselor}</h2>
                    <h2 className='btn text-xl font-mono'>{pricing}</h2>
                </div>
                <div className=' font-bold flex justify-center items-center'>
      <svg class="size-5  animate-spin text-2xl text-orange-400 ...">
        <IoIosStar></IoIosStar>
    
</svg>
        
        <span className='text-xl font-bold text-green-700'>{rating}</span></div>
        <p className='font-mono text-gray-500'>{description}</p>
        <p className='flex flex-col space-y-3'><span className='text-xl font-bold text-gray-500'>What can we learn?</span> <span className='font-serif'>{information}</span></p>
        <div>
          <input type="text" placeholder='Write a Comment' className='  p-1' name="" id="" />
        <button className='btn btn-active' onClick={handleComment}>Comment</button>
        </div>
                </div>
                <div className='w-[50%]'>
                    <img className='rounded-3xl' src={image} alt="" />
                </div>
            </div>
            </div>
            <div className='flex justify-around items-center mt-10 bg-base-300 p-3 border-t-4 text-blue-300 rounded-2xl text-center'>
                
                <div className='flex flex-col text-xl font-mono text-black'>
                    <h2>category</h2>
                    <h2>{service_name}</h2>
                </div>
                <div className='flex flex-col text-xl font-sans text-black '>
                    <h2>Difficulty</h2>
                    <h2>{Difficulty}</h2>
                </div>
                <div className='flex flex-col text-xl font-serif text-black'>
                    <h2>Videos</h2>
                    <h2 className='flex justify-center items-center gap-2'> <FaVideo></FaVideo>{Videos}</h2>
                </div>
                <div className='flex flex-col text-xl font-mono text-black '>
                    <h2>Time</h2>
                    <h2 className='flex justify-center items-center gap-2'> <FaClock></FaClock>{Time}</h2>
                </div>
                <div>
                    <div className='border-l-4 text-blue-300 flex flex-col justify-center items-center p-5 space-y-2'>
                       <h2 className='text-2xl font-bold text-black'>Price: {pricing}</h2>
                       <button className='btn btn-accent'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;