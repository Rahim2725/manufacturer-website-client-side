import React from 'react';

const Tool = ({tool}) => {
    const {name, price, availableQuntity, description } = tool ;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure className='p-2'>
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{tool.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;