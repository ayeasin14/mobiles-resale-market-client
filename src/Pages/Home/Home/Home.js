import React from 'react';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Banner from '../Banner/Banner';
import OurVision from '../OurVision/OurVision';
import ProductsCategories from '../ProductsCategories/ProductsCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertiseItems></AdvertiseItems>
            <ProductsCategories></ProductsCategories>
            <OurVision></OurVision>
        </div>
    );
};

export default Home;