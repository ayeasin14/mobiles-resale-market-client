import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsCard from '../../Shared/ProductsCard/ProductsCard';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';

const ProductsCategories = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    return (
        <div className='flex my-6'>
            <div className='p-3'>
                <h1 className="my-5 border-b-8 border-b-orange-600 text-3xl font-bold text-center">Select Category </h1>
                <ul className="text-2xl menu bg-base-100 w-56 ">
                    <li><Link to="/"> <ArrowSmallRightIcon className='h-7 w-7 text-blue-500' /> Samsung</Link></li>
                    <li><Link to="/"> <ArrowSmallRightIcon className='h-7 w-7 text-blue-500' />Oppo </Link></li>
                    <li><Link to="/"> <ArrowSmallRightIcon className='h-7 w-7 text-blue-500' />Others</Link></li>
                </ul>
            </div>
            <div className='flex-1'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5'>

                    {
                        products.slice(0, 5).map(product => <ProductsCard
                            key={product._id}
                            product={product}
                        ></ProductsCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default ProductsCategories;