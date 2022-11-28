import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-pink-800 text-center my-5'>Some Important Question and Answer.</h1>

            <div className='w-9/12 my-14 mx-auto'>

                <div tabIndex={0} className="collapse group my-4 rounded-lg">
                    <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <p>React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse group my-4 rounded-lg">
                    <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse group my-4 rounded-lg">
                    <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        What is a unit test? Why should we write unit tests?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse group my-4 rounded-lg">
                    <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        React vs. Angular vs. Vue?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <p>One of the main reasons for the popularity of React is that it works very efficiently with the DOM. Vue also uses the virtual DOM, but compared to React, Vue has better performance and stability. According to this data, Vue and React's performance difference is subtle since it is only a few milliseconds.
                            <br />
                            Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;