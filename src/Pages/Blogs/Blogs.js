import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-4xl font-semibold text-pink-800 text-center my-5'>this is Blogs pages</h1>

            <div className='w-9/12 mx-auto'>

                <div tabIndex={0} className="collapse group my-4 rounded-lg">
                    <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        Focus me to see content
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse group my-4 rounded-lg">
                    <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        Focus me to see content
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse group my-4 rounded-lg">
                    <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        Focus me to see content
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse group my-4 rounded-lg">
                    <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        Focus me to see content
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;