import React from 'react';
import ProductsCard from '../Shared/ProductsCard/ProductsCard';

const Categories = () => {
    return (
        <div className='my-10'>
            <h1 className='text-center my-5 text-2xl font-semibold'>this is Category page</h1>
            <div className='grid grid-cols-3 gap-4'>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
            </div>
        </div>
    );
};

export default Categories; <h1>this is category page</h1>