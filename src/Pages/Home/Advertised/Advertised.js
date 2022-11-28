import React from 'react';
import MicrobusAdd from '../../../images/Microbus-1.JPG';
import './Advertised.css';

const Advertised = () => {
    return (
        <div className='py-20 max-w-[1280px] mx-auto'>
            <h2 className='text-4xl font-semibold text-center pt-5'>Advertised</h2>
            <div className='flex justify-center items-center'>
                <div className='bg-orange-600 w-28 mt-4 devider-line'></div>
            </div>
            <div className='pt-14 flex justify-center items-center'>
                <div className="card w-3/4 bg-base-100 shadow-xl">
                    <figure><img src={MicrobusAdd} alt="" /></figure>
                    <div className="card-body">
                        <div>
                        <h2 className="card-title">
                        TOYOTA HIACE 16
                            <div className="badge badge-secondary">20% off</div>
                        </h2>
                        <div className='pt-5'>
                            <h1>Price: $<span>10000</span> Sell: $<span>80000</span></h1>
                        </div>
                        <h2>Location: Canada</h2>
                        </div>
                        <p>The Toyota Hiace is a 16 seater microbus with all the luxury you can think of with an air conditioner and heater both in front and back.</p>
                        <div className="card-actions justify-end">
                            <div className="btn btn-primary text-white">View Details</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertised;