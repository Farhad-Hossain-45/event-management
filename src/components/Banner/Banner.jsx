/* eslint-disable no-unused-vars */
import React from 'react';
import bannerImage from '../../assets/banner.png'

const Banner = () => {
    return (
        <div>
            <div className="hero mt-6 max-h-96 bg-pink-50">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImage}className="max-w-sm rounded-lg border" />
                <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;