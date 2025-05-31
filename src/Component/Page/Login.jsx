import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { authContext } from '../Authprovider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../firebase';

const Login = () => {
  const {handleLogin}=useContext(authContext)
  const location=useLocation();
  const navigate=useNavigate()
  const provider=new GoogleAuthProvider()
    const handleUserLogin=(e)=>{
      e.preventDefault()
      const email=e.target.email.value 
      const password=e.target.password.value
          handleLogin(email,password)
          .then(result=>{
            navigate(location?.state ?location?.state :'/')
            console.log(result.user);
            toast.success("successFully Login")
          })
          .catch(err=>{
            console.log(err);
            toast.error("auth/invalid-credential-password")
          })
          
          

    }
    const handleGoogle=()=>{
      signInWithPopup(auth,provider).then(result=>{
        console.log(result.user);
        navigate(location?.state ?location?.state :'/')
        toast.success(" Google login SuccessFully");
      })
      .catch(err=>{
        console.error(err)
        toast.error("Google login failed");
      })
    }
    
    return (
        <div className=' mt-5'>
        <h2 className='text-center text-2xl font-serif'>Login Your Account</h2>
         <div className="card bg-base-100 w-full max-w-lg mx-auto  shadow-2xl p-3 bg-gradient-to-b to-green-100 border-l-8 rounded-2xl border-blue-300">
  <div className="card-body ">
    <form onSubmit={handleUserLogin}>
    <fieldset className="fieldset ">
    
      <label className="label ">Email</label>
      <input type="email" name='email' className="input w-full" placeholder="Email" />
      <label className="label">Password</label>
      <input type="password" name='password' className="input w-full" placeholder="Password" />
      <div><a className="link link-hover">Forgot password?</a></div>
      <button className="btn btn-neutral mt-4">Login</button>
      <p className='text-center'>If you don't have an account, please <Link className='text-xl font-bold text-green-500' to="/register">register here</Link>.</p>
    </fieldset>
    </form>
    <p className=' text-center text-xl font-bold'><hr /> or <hr /></p>
    <div >
        <h2 onClick={handleGoogle} className='flex justify-center items-center btn  text-green-800 text-xl font-sans' ><FaGoogle></FaGoogle> Login With Google</h2>
    </div>
  </div>
</div>
    </div>
    );
};

export default Login;