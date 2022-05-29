import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Sherad/Loading';
import Product from './Product';


const ManageProducts = () => {

    const { data: products, isLoading, refetch } = useQuery(['products',], () => fetch(`https://tranquil-tundra-16871.herokuapp.com/tools`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken')
            Navigate('/')
        }

        return res.json()
    }))

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <h1>My product: {products?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Remove Product</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        products.map(product => <Product
                        key={product._id}
                        refetch={refetch}
                        product={product}></Product>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;