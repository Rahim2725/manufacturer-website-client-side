import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { purchaseId } = useParams();
    console.log(purchaseId);

    const {data}  = useQuery('tool', () => fetch(`http://localhost:5000/${purchaseId}`).then(res => res.json()))


    return (
        <div className='my-20'>
            <h1 className="text-3xl text-center font-bold"> Purchase Tools</h1>
        </div>
    );
};

export default Purchase;