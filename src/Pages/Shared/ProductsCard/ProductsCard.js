import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/Button/PrimaryButton';

const ProductsCard = ({ product }) => {
    // console.log(product);
    const { productName, image, details, price, seller, yearOfUse } = product;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <Link to='/'>
                        <PrimaryButton classes='px-8 py-3 font-semibold rounded'>
                            Booking now
                        </PrimaryButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;