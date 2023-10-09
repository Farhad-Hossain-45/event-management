/* eslint-disable no-unused-vars */
import React from 'react';
import bannerImage from '../../assets/banner.png'

const Banner = () => {
    return (
        <div>
            <div className=" mt-6 bg-pink-50">
            <div className=" flex justify-around items-center md:flex-row flex-col h-96">
                
                <div data-aos="fade-up"
                data-aos-duration="3000">
                <h1 className="text-pink-300">Life is an event</h1>
                <p className="text-5xl font-bold text-pink-500">Creating the <br /> Best Day Ever</p>
                <button className='text-pink-300 btn-outline btn mt-2'>Explore</button>
                
                </div>
                <div>
                <img src={bannerImage}className="rounded-lg  md:w-[400px] w-full md:h-80" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;