import React from 'react';
import { toast } from 'react-toastify';

const OrderRow = ({ order, refetch }) => {
    const { name, price, userName, position, _id } = order;


    const handleDelete = id => {
        const sure = window.confirm('Are You Sure');
        if (sure) {
            fetch(`https://tranquil-tundra-16871.herokuapp.com/purchase/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
                
            })
                .then(res => res.json())
                .then(data => {
                    toast('Your Delete is done')
                    refetch()
                })
        }
    }

    return (
        <tr>
            <td>{userName}</td>
            <td>{name}</td>
            <td>${price}</td>
            <td>{position === 'deliver' ? 'Deliver' : 'Pending...'}</td>
            <td>{position !== 'deliver' && <button onClick={() => handleDelete(_id)} className='btn btn-sm btn-secondary '>Delete</button>}</td>

        </tr>
    );
};

export default OrderRow;