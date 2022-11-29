import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import BookingModal from './BookingModal';


import Products from './Products';

const CategorySingel = () => {
    const { product, _id } = useLoaderData();
    const [car, setCar] = useState(null);
    // console.log(car)
    // console.log(product)
    
    return (
        <div className='grid md:grid-cols-2'>
            {
                product.map((products, ids) => <Products
                key={ids}
                products={products}
                setCar={setCar}
                ></Products>)
            }
            {car &&
                <BookingModal
                car={car}
                id={_id}
                ></BookingModal>
            }

        </div>
    );
};

export default CategorySingel;