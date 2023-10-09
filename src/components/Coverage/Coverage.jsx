/* eslint-disable no-unused-vars */
import React from 'react';
import coverage1 from '../../assets/cavarege1.jpg'
import coverage2 from '../../assets/covarege2.webp'
import coverage3 from '../../assets/covarege3.webp'
import coverage4 from '../../assets/covarege4.jpg'

const Coverage = () => {
    return (
        <div className='mt-10 bg-pink-50'>
            <h2 className='text-3xl font-bold text-pink-500 text-center'>Our Recent Events</h2>
            <div className='mt-10 grid md:grid-cols-2 grid-cols-1 md:ml-32 gap-y-5'>
                <div className='shadow-xl md:w-80 w-full h-60 rounded-xl'data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                    <img className='w-72 h-52' src={coverage1} alt="" />
                    <p className='text-center text-pink-500'>Rohit Sing & Anuska Sing</p>
                </div>
                <div className='shadow-xl md:w-80 w-full h-60 rounded-xl' data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                    <img className='w-72 h-52'src={coverage2} alt="" />
                    <p className='text-center text-pink-500'>Mr.Harvy & Mrs.Harvy</p>
                </div>
                <div className='shadow-xl md:w-80 w-full h-60 rounded-xl' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                    <img className='w-72 h-52'src={coverage3} alt="" />
                    <p className='text-center text-pink-500'>Mr.Justin & Mrs.Justin</p>
                </div>
                <div className='shadow-xl md:w-80 w-full h-60 rounded-xl' data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                    <img className='w-72 h-52'src={coverage4} alt="" />
                    <p className='text-center text-pink-500'>Mr.Biden & Mrs.Biden</p>
                </div>
                
            </div>
        </div>
    );
};

export default Coverage;