import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowTrendUp,  faComment,  faScrewdriverWrench, faUsers } from '@fortawesome/free-solid-svg-icons'; 
import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='my-10 text-center'>
            <h1 className='text-5xl text-purple-500'>MILLIONS BUSINESS TRUST US </h1>
            <h1 className='text-xl text-secondary mt-3'>TRY TO UNDERSTAND USERS EXPECTATION </h1>
            <div className='flex justify-center grid grid-cols-1 lg:grid-cols-4 mt-12'>
                <div>
                    <FontAwesomeIcon className='text-primary w-10 h-24' icon={faUsers} ></FontAwesomeIcon>
                    <h1 className="text-3xl text-secondary text-center">100+ </h1>
                    <h3 className="text-xl text-center">customers</h3>
                </div>
                <div>
                    <FontAwesomeIcon className='text-primary w-10 h-24'  icon={faArrowTrendUp}></FontAwesomeIcon>
                    <h1 className="text-3xl text-secondary text-center">120M+</h1>
                    <h3 className="text-xl text-center">Annual revenue</h3>
                </div>
                <div>
                    <FontAwesomeIcon className='text-primary w-10 h-24' icon={faComment} ></FontAwesomeIcon>
                    <h1 className="text-3xl text-secondary text-center">33K+ </h1>
                    <h3 className="text-xl text-center">Reviews</h3>
                </div>
                <div>
                    <FontAwesomeIcon className='text-primary  w-10 h-24' icon={faScrewdriverWrench} ></FontAwesomeIcon>
                    <h1 className="text-3xl text-secondary text-center">50+ </h1>
                    <h3 className="text-xl text-center">Tools</h3>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;