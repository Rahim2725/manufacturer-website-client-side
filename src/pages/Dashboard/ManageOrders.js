import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Sherad/Loading';
import ManageOrderRaw from './ManageOrderRaw';

const ManageOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const { data: orders, isLoading, refetch } = useQuery(['orders', user], () => fetch(`https://tranquil-tundra-16871.herokuapp.com/purchases`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken')
            navigate('/')
        }

        return res.json()
    }))

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h1>Mange All Orders order: {orders?.length}</h1>
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
                        {
                            orders.map(order => <ManageOrderRaw
                                key={order._id}
                                order={order}
                                refetch={refetch}
                            ></ManageOrderRaw>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;