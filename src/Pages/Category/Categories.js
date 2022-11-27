import React, { useEffect, useState } from 'react';
import ProductsCard from '../Shared/ProductsCard/ProductsCard';

const Categories = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='my-10 mx-auto'>
            <h1 className='text-center my-5 text-2xl font-semibold'>this is Category page</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

                {
                    products.map(product => <ProductsCard
                        key={product._id}
                        product={product}
                    ></ProductsCard>)
                }

            </div>
        </div>
    );
};

export default Categories; <h1>this is category page</h1>