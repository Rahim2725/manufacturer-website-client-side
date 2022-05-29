import React from 'react';

const Review = ({review}) => {
    const {name, description, rating} = review ;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Rating: {rating} star</p>
            </div>
        </div>
    );
};

export default Review;