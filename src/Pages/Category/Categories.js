import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ProductsCard from '../Shared/ProductsCard/ProductsCard';

const Categories = () => {

    const [products, setProducts] = useState([]);
    const { loading } = useContext(AuthContext);


    useEffect(() => {
        fetch("https://mobiles-resale-market-server.vercel.app/products")
            .then(res => res.json())
            .then(data => {

                if (loading) {
                    return <div className='text-center my-60'>
                        <p className='text-2xl text-primary'>Loading...</p>
                        <progress className="progress w-56"></progress>
                    </div>
                }

                setProducts(data);
            })
    }, [loading])





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