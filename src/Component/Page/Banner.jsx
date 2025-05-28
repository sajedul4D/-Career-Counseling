import React from 'react';
import animation from "../../assets/Animation - 1726853937162.gif"
import bgBaneer from '../../assets/layered-steps-haikei.png'
import bgBanner1 from '../../assets/wave-haikei.png'
import { FaRegCalendarAlt, FaRegCalendarCheck, FaRegCalendarTimes } from "react-icons/fa";

const Banner = () => {
    return (
        
            <div className=''> 
            <div className="carousel w-[100%] mx-w-[750px]  mx-auto ">
  <div id="slide1" className="carousel-item relative w-full">
  <div >
    <div className='flex justify-center items-center gap-10 lg:gap-40  bg-blue-100 '>
 
<div className='w-[50%] ml-20  space-y-5'>
<h1 className='text-4xl font-bold  text-green-200 text-center '> Career Counseling –   Guiding You   to a Brighter Future</h1>

<p className='text-center text-2xl font-semibold  '> Best Online Learning & <span>Resources!</span> </p>
<img className='w-[50px] mx-auto'  src={animation} alt="" />
</div>
   <div className='w-[50%] '>
     
   <img className='h-[450px]' src="https://uiparadox.co.uk/templates/educate/v3/assets/media/banners/hero-banner-1/main-img.png" alt="" />

   </div>
 </div>
    
   
</div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    
  <div 
style={{ 
  backgroundImage: `url(${bgBaneer})`,
  backgroundSize: 'cover', // or 'contain', 'auto', etc.
  backgroundRepeat: 'no-repeat', // or 'repeat', 'repeat-x', 'repeat-y'
   // Example height
}}

   className='flex justify-center items-center gap-10 lg:gap-40  '>
 
 <div className='w-[50%] ml-20  space-y-5'>
 <h1 className='text-4xl font-bold  text-green-200 text-center '> Choose your path, shape your future</h1>
 
 <p className='text-center text-2xl font-semibold  '> Discover careers that match your passion, skills, and purpose. </p>
 <img className='w-[50px] mx-auto'  src={animation} alt="" />
 </div>
    <div className='w-[50%] '>
      
    <img className='h-[350px]' src="https://i.ibb.co/VpL8qMV1/concept-of-business-decision-making-career-path-businesswoman-confusion-looking-at-various-road-sign.png" alt="" />
 
    </div>
  </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
  <div className='flex justify-center items-center gap-10 lg:gap-40  bg-red-100 '>
 
 <div className='w-[50%] ml-20  space-y-5'>
 <h1 className='text-4xl font-bold  text-green-200 text-center '> 
 
 Achive Your Goal
 </h1>
 
 <p className='text-center text-2xl font-semibold  '> 
 

<ul className='space-y-3'>
  <li className='flex gap-2 justify-center items-center'>
    <img className='w-[50px]' src="https://img.freepik.com/premium-vector/hand-drawn-green-icon-red-backdrop-checkmark-right-vector-icon-hand-drawn_194782-807.jpg" alt="" /> Achieve your goals, one step at a time.







</li>
<li className='flex gap-2 justify-center items-center'>
<img className='w-[50px]' src="https://img.freepik.com/premium-vector/hand-drawn-green-icon-red-backdrop-checkmark-right-vector-icon-hand-drawn_194782-807.jpg" alt="" /> Dream big, plan smart, achieve more.</li>
<li className='flex gap-2 justify-center items-center'>
<img className='w-[50px]' src="https://img.freepik.com/premium-vector/hand-drawn-green-icon-red-backdrop-checkmark-right-vector-icon-hand-drawn_194782-807.jpg" alt="" /> Turn your ambition into achievement.</li>
<li className='flex gap-2 justify-center items-center'>
<img className='w-[50px]' src="https://img.freepik.com/premium-vector/hand-drawn-green-icon-red-backdrop-checkmark-right-vector-icon-hand-drawn_194782-807.jpg" alt="" /> Set goals. Stay focused. Succeed.</li>
<li className='flex gap-2 justify-center items-center text-center'>
<img className='w-[50px]' src="https://img.freepik.com/premium-vector/hand-drawn-green-icon-red-backdrop-checkmark-right-vector-icon-hand-drawn_194782-807.jpg" alt="" /> Where goals meet guidance — your success journey starts here.</li>
</ul>
 
  </p>
 <img className='w-[50px] mx-auto'  src={animation} alt="" />
 </div>
    <div className='w-[50%] '>
      
    <img className='h-[350px] ' src="https://i.ibb.co/23rYFt1Z/depositphotos-131106778-stock-illustration-goal-word-in-business-concept-removebg-preview.png" alt="" />
 
    </div>
  </div>
   
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    
  <div 
style={{ 
  backgroundImage: `url(${bgBanner1})`,
  backgroundSize: 'cover', // or 'contain', 'auto', etc.
  backgroundRepeat: 'no-repeat', // or 'repeat', 'repeat-x', 'repeat-y'
   // Example height
}}

   className='flex justify-center items-center gap-10 lg:gap-40  '>
 
 <div className='w-[50%] ml-20  space-y-5'>
 <h1 className='text-4xl font-bold  text-green-200 text-center '> 
 Empowering CSE Students for a Successful Future</h1>
 
 <p className='text-center text-2xl font-semibold  text-gray-500'> We have created a comprehensive platform for CSE students offering academic guidance, career counseling, and job preparation.
Enhance your skills, choose the right career path, and become industry-ready with ease and trust.
Start your journey to success today.. </p>
 <img className='w-[50px] mx-auto'  src={animation} alt="" />
 </div>
    <div className='w-[50%] text-center space-y-4 text-gray-300'>
      
   
   <h2 className='text-center text-3xl font-thin'>
   পরবর্তী ব্যাচের সময় সূচি
   </h2>
   <div className='flex   flex-col space-y-4'>
   
    

   <h2 className='flex gap-2  justify-center items-center text-xl font-bold text-center'><span className='text-3xl '><FaRegCalendarCheck ></FaRegCalendarCheck></span>এনরোলমেন্ট শুরু npn ....?...?</h2>
   <p></p>
   <h2 className='flex justify-center items-center text-xl font-bold text-center'> <span className='text-3xl'><FaRegCalendarTimes></FaRegCalendarTimes></span>এনরোলমেন্ট শেষ   .../.../..</h2>
   <p></p>
   </div>
<div className='flex gap-5 justify-center items-center'>
<h2 className='btn text-center'>কোর্স ফি 0000 টাকা </h2>
<button className='btn btn-neutral'>Join Now</button>
</div>
 
    </div>
  </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
        
    );
};

export default Banner;