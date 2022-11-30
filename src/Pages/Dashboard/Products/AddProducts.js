import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../Context/AuthProvide';
import './AddProduct.css'

const AddProducts = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate()
    


    const handelAddProduct = data => {
        console.log(data)
        setSignUpError('');
        
        saveProduct(data)
        
    }

    const saveProduct = (data) => {
        // const user = { name, email, userRol };
        fetch('http://localhost:5000/addproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                
                navigate('/');
            })
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-[500px] p-8 border rounded-lg'>
                <h2 className='text-4xl text-center py-5'>Add Your old Products</h2>
                <form onSubmit={handleSubmit(handelAddProduct)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text"
                            {...register("name", { required: "Product Name is required" })}
                            placeholder="Name"
                            className="input input-bordered w-full"
                        />
                        {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number"
                            {...register("price", { required: "price is required" })}
                            placeholder="price"
                            className="input input-bordered w-full"
                        />
                        {errors.price && <p className='text-red-500' role="alert">{errors.email?.message}</p>}

                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Purchase Year</span>
                        </label>
                        <input type="number"
                            {...register("purchase", { required: "purchase year is required" })}
                            placeholder="purchase"
                            className="input input-bordered w-full"
                        />
                        {errors.purchase && <p className='text-red-500' role="alert">{errors.email?.message}</p>}

                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="phone"
                            {...register("phone", { required: "Phone number is required" })}
                            placeholder="Phone"
                            className="input input-bordered w-full"
                        />
                        {errors.phone && <p className='text-red-500' role="alert">{errors.email?.message}</p>}

                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select
                            {...register("category", { required: "User Rol is required" })}
                            className="input input-bordered w-full"
                        >
                            <option value="Microbus">Microbus</option>
                            <option value="Luxury car">Luxury car</option>
                            <option value="Electic car">Electic car</option>
                        </select>
                        {errors.category && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <select
                            {...register("condition", { required: "User Rol is required" })}
                            className="input input-bordered w-full"
                        >
                            <option value="Excellent">excellent</option>
                            <option value="good">good</option>
                            <option value="fair">fair</option>
                        </select>
                        {errors.condition && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                    </div>


                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text"
                            {...register("location", { required: "location is required" })}
                            placeholder="location"
                            className="input input-bordered w-full"
                        />
                        {errors.location && <p className='text-red-500' role="alert">{errors.email?.message}</p>}

                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="file"
                            {...register("image", { required: "image is required" })}
                            placeholder="image"
                            className="input input-bordered w-full"
                        />
                        {errors.image && <p className='text-red-500' role="alert">{errors.email?.message}</p>}

                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">description</span>
                        </label>
                        <textarea type="text"
                            {...register("description", { required: "description is required" })}
                            placeholder="description"
                            className="input input-bordered w-full"
                        />
                        {errors.description && <p className='text-red-500' role="alert">{errors.email?.message}</p>}

                    </div>

                    <input type="submit" value='Add Now' className='btn btn-primary w-full' />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
            </div>
        </div>
    );
};

export default AddProducts;