import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleAddProduct = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        productName: data.name,
                        category: data.category,
                        image: imgData.data.url,
                        seller: user.displayName,
                        email: user.email,
                        price: data.price,
                        location: data.location,
                        mobileNumber: data.mobileNumber,
                        details: data.details,
                        purchase: data.purchase,
                        condition: data.condition,
                    }

                    // save information for products in database.

                    fetch('https://mobiles-resale-market-server.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard');
                        })
                }
            })

    }



    return (
        <div className='p-7 my-16'>
            <h2 className='text-4xl text-center'>Add Your Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-3'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Product Name</span> </label>
                        <input
                            {...register("name",
                                { required: "Product Name is required" })}
                            type="text"
                            className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Price</span> </label>
                        <input
                            {...register("price",
                                { required: "Product Price is required" })}
                            type="number"
                            className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Mobile Number</span> </label>
                        <input
                            {...register("mobileNumber",
                                { required: "Mobile Number is required" })}
                            type="text"
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Your Location</span> </label>
                        <input
                            {...register("location",
                                { required: "location is required" })}
                            type="text"
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Descriptions</span> </label>
                        <input
                            {...register("details",
                                { required: "Descriptions is required" })}
                            type="text"
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Year of purchase</span> </label>
                        <input
                            {...register("purchase")}
                            type="text"
                            className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Category</span></label>
                        <select
                            {...register('category')}
                            className="select select-bordered w-full max-w-xs">
                            <option value={1}>Samsung</option>
                            <option value={2}>Vivo</option>
                            <option value={3}>Oppo</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Condition Type</span></label>
                        <select
                            {...register('condition')}
                            className="select select-bordered w-full max-w-xs">
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-file">Photo</span> </label>
                        <input
                            {...register("image",
                                { required: "Photo is required" })}
                            type="file"
                            className="input w-full max-w-xs" />
                        {errors.image && <p className='text-red-600' >{errors.image?.message}</p>}
                    </div>
                </div>
                <input className='w-full my-6 btn btn-accent' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;