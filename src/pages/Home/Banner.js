import React from 'react';
import banner from '../../assets/image/banner.jpg'

const Banner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-6 p-4 shadow-xl '>

            <div className='flex items-center justify-center' >
                <div>
                <h1 className='text-5xl font-bold text-primary uppercase'>hose repair tools</h1>
                <h1 className='text-3xl mt-3 font-bold uppercase'>best offer</h1>
                <button className='btn btn-secondary mt-4'>Shop Naw</button>
                </div>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>

          
        </div>
    );
};

export default Banner;