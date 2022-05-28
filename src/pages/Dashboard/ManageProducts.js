import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Sherad/Loading';


const ManageProducts = () => {

    const { data: products, isLoading, refetch } = useQuery(['products',], () => fetch(`http://localhost:5000/purchases`, {
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
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Email </th>
                            <th>Phone </th>
                            <th>Adders</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;