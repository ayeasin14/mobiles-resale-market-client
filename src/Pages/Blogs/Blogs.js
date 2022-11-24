import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-4xl font-semibold text-pink-800 text-center my-5'>this is Blogs pages</h1>

            <div className='w-9/12 mx-auto'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4">
                    <div className="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4">
                    <div className="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4">
                    <div className="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4">
                    <div className="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;