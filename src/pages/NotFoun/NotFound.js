import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div >
                <h1 className='text-4xl text-red-500 '>Not Found 404 </h1>
                <Link className='btn btn-secondary mt-3 ' to="/home"> Please Back To Home</Link>
            </div>
        </div>
    );
};

export default NotFound;