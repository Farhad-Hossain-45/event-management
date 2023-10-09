/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../assets/wedding-planner_logo.png'
import organizer1 from '../../assets/organizer5.jfif'
import organizer2 from '../../assets/organizer2.jpg'
import organizer3 from '../../assets/organizer3.jpg'
import organizer4 from '../../assets/organiger4.jpg'

const Organizer = () => {
    return (
        <div className='mt-10'>
            <div className='grid md:grid-cols-2 grid-cols-1 items-center bg-pink-50 '>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                     data-aos-duration="1500">
                    <img className='w-32 h-20 mx-auto' src={logo} alt="" />
                    <h2 className='text-center text-2xl mt-2 text-pink-400 font-semibold'>Meet Our Creative <br /> Event Organizer</h2>
                    <button className='flex mt-2 mx-auto bg-pink-500 px-4 py-1.5 rounded-lg text-white hover:bg-pink-300'>Explore</button>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-5 md:mt-0 mt-8'>
                    <div className='shadow-xl md:w-64 w-full rounded-lg'>
                    <img className='w-60 h-44' src={organizer1} alt="" />
                    <p className='text-pink-400'>Alisha Rose</p>
                    </div>
                    <div className='shadow-xl md:w-64 w-fullrounded-lg'>
                    <img className='w-60 h-44' src={organizer3} alt="" />
                    <p className='text-pink-400'>Rhys Carter</p>
                    </div>
                    <div className='shadow-xl md:w-64 w-full rounded-lg'>
                    <img className='w-60 h-44' src={organizer4} alt="" />
                    <p className='text-pink-400'>Kyle Buckley</p>
                    </div>
                    <div className='shadow-xl md:w-64 w-full rounded-lg'>
                    <img className='w-60 h-44' src={organizer2} alt="" />
                    <p className='text-pink-400'>Maisie Walton</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Organizer;