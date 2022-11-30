import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const [categoriItem, serCategoriItem] = useState([]);
    fetch('https://car-resale-server-side.vercel.app/category')
        .then(res => res.json())
        .then(data => serCategoriItem(data))

    return (
        <div className='max-w-[1280px] mx-auto'>
            <h2 className='text-4xl font-semibold text-center pt-5'>Resale Car Category</h2>
            <div className='flex justify-center items-center'>
                <div className='bg-orange-600 w-28 mt-5 devider-line'></div>
            </div>

            <div className='grid md:grid-cols-3 gap-5 pt-5'>
                {
                    categoriItem.map(categori => <div key={categori._id}>

                        <div className="card  bg-primary text-primary-content">
                            <div className="card-body">
                                <Link to={`/category/${categori._id}`}>
                                    <h2 className="text-center text-3xl text-white font-semibold">{categori.category}</h2>
                                </Link>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Category;