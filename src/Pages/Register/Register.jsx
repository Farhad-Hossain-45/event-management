/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className=" bg-pink-100 mt-3">
        <h3 className='text-center text-4xl font-semibold my-2'>Please Register!!!</h3>
        <div className="hero-content">
          
          <div className="static card flex-shrink-0 w-full max-w-sm shadow-2xl bg-pink-50">
            <form className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered" required />
              </div>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="photo URL" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-pink-300 text-white">Register</button>
              </div>
            </form>
            <p className="text-center mb-10">Do not Have An Account ?<Link  className="text-blue-500 underline" to="/login" >Login</Link></p>
          </div>
        </div>
       
      </div>
    );
};

export default Register;