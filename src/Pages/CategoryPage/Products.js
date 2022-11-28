import React from 'react';

const Products = ({products}) => {
    console.log(products)
    const {description, img, location, name, originalPrice, resalePrice, use} = products;

    return (
        <div className='pt-14 flex justify-center items-center'>
                <div className="card w-3/4 bg-base-100 shadow-xl">
                    <figure><img className='w-full h-96' src={img} alt="" /></figure>
                    <div className="card-body">
                        <div>
                        <h2 className="card-title">
                        {name}
                            <div className="badge badge-secondary">20% off</div>
                        </h2>
                        <div className='pt-5'>
                            <h1>Price: $<span>{originalPrice}</span> Sell: $<span>{resalePrice}</span></h1>
                        </div>
                        <h2>Location: {location}</h2>
                        </div>
                        <p>{description}</p>
                        <div className="card-actions justify-end">
                            <div className="btn btn-primary text-white">Book Now</div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Products;