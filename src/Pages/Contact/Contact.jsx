/* eslint-disable no-unused-vars */
import React from 'react';
import googleMap from '../../assets/googlemap.png'
const Contact = () => {
    return (
        <div>
            <div className='flex justify-between mt-8 items-center md:flex-row flex-col'>
                <div>
                    <img className='w-[500px] h-96' src={googleMap} alt="" />
                    <a href="https://maps.app.goo.gl/2zodz4dEA7GHbRUA6"    className='text-blue-500 underline text-xl font-semibold' rel="noreferrer">Map Link</a>
                </div>
                <div>
                    <h2 className='text-2xl font-black '>Office Address</h2>
                    <p className='text-xl font-semibold'>Dhaka Office: <span className='text-sm'>Green Road,Dhanmondi, Dhaka – 1205, <br /> Bangladesh</span></p>
                    <p className='text-xl font-semibold'>Chandpur Office: <span className='text-sm'>Kachua,Rahimanagar, KR – 1205, <br /> Bangladesh</span></p>
                    <p className='text-xl font-semibold'>Chittagong Office: <span className='text-sm'>Agrabad Shopping Complex(2nd Floor), <br />1742 Sk. Mujib Road, Agrabad <br /> Bangladesh</span></p>
                    <p className='text-xl'>Phone: <span className='text-sm'>0186518960</span></p>
                    <p className='text-xl'>Email: <span className='text-sm'>weddinginfo420@sadi.com</span></p>

                </div>
            </div>
        </div>
    );
};

export default Contact;