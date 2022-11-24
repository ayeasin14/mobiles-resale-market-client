import React from 'react';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Banner from '../Banner/Banner';
import ProductsCategories from '../ProductsCategories/ProductsCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertiseItems></AdvertiseItems>
            <ProductsCategories></ProductsCategories>
        </div>
    );
};

export default Home;