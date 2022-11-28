import React from 'react';
import PrimaryButton from '../../../Components/Button/PrimaryButton';

const OurVision = () => {
    return (
        <div className="grid grid-cols-2 bg-base-100 shadow-xl">
            <div className='p-14'>
                <img className='rounded-lg' src="https://images.unsplash.com/photo-1596558450268-9c27524ba856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" alt="Album" />
            </div>
            <div className="p-14 ">
                <h2 className="text-3xl font-bold my-6">Our next Goal!!!</h2>
                <p className='py-4'>A product vision aims to describe the future state of a product. It is the core essence of the product. Ideally, the product vision will serve as a guide for the stakeholders, as it will remind them of the general direction the product should be taking, and the common objectives within the team.</p>
                <div className="card-actions justify-end">

                    <PrimaryButton classes='px-8 py-3 font-semibold rounded'>
                        Go for more...
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default OurVision;