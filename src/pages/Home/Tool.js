import React from 'react';
import {useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const {_id, name, price, available_quantity, description, img } = tool ;
    const navigate = useNavigate();

    const handlePurchaseTool= id => {
        navigate(`/purchase/${id}`)
    }


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className='p-2'>
                <img className="image-full h-[200px]" src={img} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Per Unit: ${price}</p>
                <p>Available Quantity: {available_quantity}</p>

                <div className="card-actions">
                   <button onClick={() => handlePurchaseTool(_id)} className="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;