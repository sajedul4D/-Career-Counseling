import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { authContext } from '../Authprovider/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
  const {handleRegister}=useContext(authContext)

  const [error,setError]=useState("")
  const [showPassword,setShowpassword]=useState(false)
    const handleUserRegister=(e)=>{
        e.preventDefault()
        const form=new FormData(e.target)
        const name=form.get("name")
        const photo=form.get("photo")
        const email=form.get("email")
        const password=form.get("password")
        setError('')
        handleRegister(email,password)
        .then(result=>{
          console.log(result.user);
        })
        .catch(err=>{
          console.log(err);
        })
        

        
        
       
        
    }
    return (
        <div className=' '>
            <h2 className='text-center text-2xl font-serif'>Create A Account</h2>
             <div className="card bg-base-100 w-full max-w-lg mx-auto  shadow-2xl p-3 bg-gradient-to-b to-green-100 border-l-8 rounded-2xl border-blue-300">
      <div className="card-body ">
        <form onSubmit={handleUserRegister}>
        <fieldset className="fieldset ">
        <label className="label ">Name</label>
          <input type="name" name='name' className="input w-full" placeholder="name" />
        <label className="label ">PhotoURL</label>
          <input type="photoUrl" name='photo' className="input w-full" placeholder="PhotoURL" />
        
          <label className="label ">Email</label>
          <input type="email" name='email' className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
         
          <input type={showPassword ? "text": "password"} name='password' className="input w-full border-none" placeholder="Password" />
          <button onClick={()=>setShowpassword(!showPassword)}
              className='btn absolute right-9 top-[273px]'>  {showPassword ? <FaEye></FaEye> : <FaEyeSlash />} </button>
          <div><a className="link link-hover">Forgot password?</a></div>
        
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className='text-center'>If you  have an account, please <Link className='text-xl font-bold text-green-700' to="/login">Login here</Link></p>
        </form>
        <h2>{error && <p>{error}</p>}</h2>
        <p className=' text-center text-xl font-bold'><hr /> or <hr /></p>
        <div >
            <h2 className='flex justify-center items-center btn  text-green-800 text-xl font-sans' ><FaGoogle></FaGoogle> Login With Google</h2>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Register;