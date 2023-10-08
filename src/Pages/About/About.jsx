/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import  instagram1 from '../../assets/instagram1.jfif';
import instagram2 from '../../assets/instagram2.jfif'
import instagram3 from '../../assets/instagram3.jfif'
import instagram4 from '../../assets/instragram4.jfif'

const About = () => {
    return (
        <div>
            <div>
                <h1 className='text-center font-bold text-pink-300 mt-10 text-6xl'>About US!!</h1>
                <p className='text-center mt-3'>We make your special day more special</p>
                <div className='flex gap-3 justify-center mt-3'>
                <Link to="/" className='text-blue-400 underline'>Home</Link>
                {/* <Link to="/about" className='text-blue-400 underline'>About</Link> */}
                </div>
                <div className=' text-4xl flex justify-center mt-4'>
                   <a href="#"> <FaInstagram></FaInstagram></a>
                </div>
                <div>
                    <h2 className='text-4xl font-bold text-pink-400 text-center mt-4'>Instagram Feed</h2>
                    <div className='grid md:grid-cols-4 grid-cols-2 mt-10'>
                        <img className='w-52 h-52' src={instagram1} alt="" />
                        <img className='w-52 h-52' src={instagram2} alt="" />
                        <img className='w-52 h-52' src={instagram3} alt="" />
                        <img className='w-52 h-52' src={instagram4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;