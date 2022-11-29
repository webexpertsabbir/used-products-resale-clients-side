import React from 'react';
import BannerImg from '../../../images/banner.jpg';
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${BannerImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">
                <div className="w-full">
                    <h1 className="mb-5 text-5xl font-bold">Save big money with  our car</h1>
                    <p className="mb-5">To contribute to positive change  and <br /> achieve our sustainability goals  with many  extraordinary</p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;