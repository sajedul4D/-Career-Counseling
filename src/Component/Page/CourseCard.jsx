import React from 'react';
import { IoIosStar } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
const CourseCard = ({categoryes}) => {
   const {counselor,service_name,image,pricing,category,duration,rating,id,author}=categoryes || ""
   
    return (
        <div>
    
           <div className="card  border-t-8 border-l-8  rounded-2xl text-blue-200  shadow-sm p-1 bg-base-100 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-200">
  <figure>
    <img className='p-5  h-[300px]  rounded-3xl'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body space-y-2">
    <h2 className="card-title text-xl text-black px-2">{service_name}</h2>

    <div className='flex justify-between items-center'>
    <div className="flex space-x-4">
		<img alt="" src={author} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm font-bold text-black">{counselor}</a>
			<span className="text-xs dark:text-gray-600 text-black">{category}</span>
            
		</div>
	</div>
      <h2  className='btn'>Price:{pricing}</h2>
    </div>
    <div className='flex justify-between items-center '>
      <div className=' font-bold flex justify-center items-center'>
      <svg class="size-5  animate-spin text-2xl text-orange-400 ...">
        <IoIosStar></IoIosStar>
    
</svg>
        
        <span className='text-xl font-bold text-green-700'>{rating}</span></div>
      <h2  className='font-bold text-green-700 '><span>Duration:</span>{duration}</h2>
    </div>
    
    
    <div className="card-actions justify-start">
      <Link to={`/details/${id}`} className="btn btn-neutral text-white">Learn More</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CourseCard;