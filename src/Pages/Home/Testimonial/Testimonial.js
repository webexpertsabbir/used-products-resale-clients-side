import React from 'react';
import image from '../../../images/about_image.jpg'

const Testimonial = () => {
    return (
        <div className='py-20 max-w-[1280px] mx-auto'>
            <h2 className='text-4xl font-semibold text-center pt-5'>About</h2>
            <div className='flex justify-center items-center'>
                <div className='bg-orange-600 w-28 mt-4 devider-line'></div>
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="rounded-lg shadow-2xl" alt='' />
                    <div className='ml-10'>
                        <h1 className="text-5xl font-bold">You start the engine and <br /> your adventure begins</h1>
                        <p className="py-6">Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;