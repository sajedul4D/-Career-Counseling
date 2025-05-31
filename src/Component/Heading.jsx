import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from './Authprovider/AuthProvider';

const Heading = () => {
  const {user,handleLogOut}=useContext(authContext)
    const liks=<>
    <NavLink className={({ isActive }) => `rounded-full btn  ${isActive ? 'bg-green-400 text-white' : 'text-black hover: hover:text-white'}`}>Home</NavLink>
    <NavLink className={({ isActive }) => `rounded-full btn  ${isActive ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`} to="/course">Course</NavLink>
   
    {
      user&&  user?.email ? <NavLink className={({ isActive }) => `rounded-full btn  ${isActive ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`} to="/contact">Contact</NavLink>:''
    }
    {
      user&&  user?.email ?<NavLink className={({ isActive }) => `rounded-full btn  ${isActive ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`} to="/profile">Profile</NavLink>:''
    }
  
    
    </>
    return (
        
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {liks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">  Career-Counseling</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-8">
     
      
      {liks}
      
    </ul>
  </div>
  <div className="navbar-end gap-5">
  <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
  </div>
</div>
{user && <p>{user?.displayName}</p>}

{user && user?.displayName ? <button onClick={handleLogOut} className='btn btn-warning'>LogOut</button>:<Link to="/login" className='btn btn-neutral'>Login</Link>}
  </div>
</div>
    );
};

export default Heading;