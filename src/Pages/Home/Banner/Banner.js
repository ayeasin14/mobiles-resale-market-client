import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/Button/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero h-2/4 rounded-lg" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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