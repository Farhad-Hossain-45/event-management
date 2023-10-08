/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [error,setError] = useState('')
  // const [success,setSuccess] = useState('')
  const {singIn,googleSingIn} = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()

  const handelLogin = e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')
    setError('')
    // setSuccess('')
   
    // console.log(email,password)
    singIn(email,password)
    .then(result => {
      console.log(result.user)
      // setSuccess('successfully login')
      navigate(location?.state ? location.state : '/')
    })
    .catch(error => {
      console.error(error)
    })
    if(password.length < 6){
      setError('please provide 6 characters or longer');
      return
    }
    
  }
  const handelGoogleSignIn = (e) => {
    e.preventDefault()
    googleSingIn()
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.error(error.message)
      
    })
    
  }
  const handelLoginBtn=()=>{
    toast('login successfully')
  }
    return (
        <div className=" bg-pink-100 mt-3">
            <h3 className='text-center text-4xl font-semibold my-2'>Please Login!!!</h3>
        <div className="hero-content">
          
          <div className="static card flex-shrink-0 w-full max-w-sm shadow-2xl bg-pink-50">
            <div className='flex items-center justify-center mt-5'>
                <div className='text-2xl mt-3'>
                    <button onClick={handelGoogleSignIn} className='btn px-14 rounded-lg btn-outline hover:bg-pink-300'><FcGoogle className='text-3xl'></FcGoogle>
                    Continue With Google
                    </button>
                </div>
            </div>
               <div className='mt-2'>
                <p className='text-2xl text-center mt-4 mb-3'>or</p>
                <p className='border-b-2'></p>
               </div>
            <form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                {
                  error && <p className="text-xl text-red-700">{error}</p>
                }
                {/* {
                  success && <p className="text-green-600 text-xl">{success}</p>
                } */}
              </div>
              <div className="form-control mt-6">
                <button onClick={handelLoginBtn} className="btn bg-pink-300 text-white">Login</button>
              </div>
            </form>
                
            {
              <p>{error}</p>
            }
            <p className="text-center mb-10">Do not Have An Account ? <Link className="text-blue-500 underline" to="/register" >Register</Link></p>
          </div>
        </div>
       
      </div>
    );
};

export default Login;