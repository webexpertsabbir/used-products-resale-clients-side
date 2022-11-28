import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from './Products';

const CategorySingel = () => {
    const { product } = useLoaderData();
    // console.log(product)

    return (
        <div className='grid md:grid-cols-2'>
            {
                product.map((products, ids) => <Products
                key={ids}
                products={products}
                ></Products>)
            }
        </div>
    );
};

export default CategorySingel;