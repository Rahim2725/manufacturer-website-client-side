import React from 'react';

const Review = ({review}) => {
    const {name, price, availableQuntity, description } = review ;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title">review</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default Review;