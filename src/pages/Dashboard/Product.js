import React from 'react';

const Product = ({product}) => {
    const {name, price, available_quantity, _id} = product ;
    const deleteProduct = id => { 
        fetch(`http://localhost:5000/tools/${id}`, {
            method: "DELETE",
            headers: {
                authorization : `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    } 
    return (
        <tr>
            <td>{name}</td>
            <td>${price}</td>
            <td>{available_quantity}</td>
            <td><button onClick={() => deleteProduct(_id)} className='btn btn-sm'>Delete</button></td>
        </tr>
    );
};

export default Product;