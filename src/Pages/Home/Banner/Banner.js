import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/Button/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero h-2/4 rounded-lg" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1622674709617-be3ad31da564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
            <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">Change Your Dust!!!</h1>
                    <p className="mb-5">Change your old mobile and take new one. Explore your interest!!!! Money is one of the top reasons for selling your old phone. Whether you want to buy a new phone, pay some bills or just have some extra funds, trading in a device you're not using is a great way to get paid fast.</p>
                    <Link to='/'>
                        <PrimaryButton classes='px-8 py-3 font-semibold rounded'>
                            Get Started
                        </PrimaryButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;