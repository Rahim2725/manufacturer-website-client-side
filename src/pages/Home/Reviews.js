import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Sherad/Loading';
import Review from './Review';

const Reviews = () => {
  
    const { data: reviews, isLoading} = useQuery('reviews', () => fetch('https://tranquil-tundra-16871.herokuapp.com/review').then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    
    return (
        <div className='text-center mt-32'>
            <h1 className='text-3xl '>Reviews</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;