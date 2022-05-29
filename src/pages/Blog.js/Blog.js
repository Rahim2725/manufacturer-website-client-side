import React from 'react';

const Blog = () => {
    return (
        <div className='mx-16'>
            <div>
                <h1 className='text-xl font-bold mb-3 '> How will you improve the performance of a React Application?</h1>
                <p className='text-md ml-2 mb-2'>
                    Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.

                    According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.
                </p>
            </div>
            <div>
                <h1 className='text-xl font-bold mb-3 '>What are the different ways to manage a state in a React application?</h1>
                <p className='text-md ml-2 mb-2'>
                    Managing state in your React apps isn’t as simple as using useState or useReducer.
                    Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?
                    In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.
                </p>
            </div>
            <div>
                <h1 className='text-xl font-bold mb-3 '>How does prototypical inheritance work?</h1>
                <p className='text-md ml-2 mb-2'>
                    Every object with its methods and properties contains an internal and hidden property known as . The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the of an object, we use Object.getPrototypeOf and Object.
                </p>
            </div>
            <div>
                <h1 className='text-xl font-bold mb-3 '>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p className='text-md ml-2 mb-2'>
                    Given an array arr[] of n integers, construct a Product Array prod[] (of same size) such that prod[i] is equal to the product of all the elements of arr[] except arr[i]. Solve it without division operator in O(n) time.
                    the array elements from start, up to that index and another array to store the product of all the array elements from the end of the array to that index.
                </p>
            </div>
            <div>
                <h1 className='text-xl font-bold mb-3 '> What is a unit test? Why should write unit tests?</h1>
                <p className='text-md ml-2 mb-2'>
                    Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
                </p>
            </div>
        </div>
    );
};

export default Blog;