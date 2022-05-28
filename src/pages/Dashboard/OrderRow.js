import React  from 'react';

const OrderRow = ({order, refetch}) => {
const {name, price, userName, position, _id } = order ;


    const handleDelete = id => {
        fetch(`http://localhost:5000/purchase/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            refetch()
        })
    }

    return (
        <tr>
            <td>{userName}</td>
            <td>{name}</td>
            <td>${price}</td>
            <td>{position === 'deliver' ? 'Deliver' : 'Pending...' }</td>
            <td>{position !== 'deliver' && <button onClick={() => handleDelete(_id)} className='btn btn-sm btn-secondary '>Delete</button> }</td>

        </tr>
    );
};

export default OrderRow;