import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { purchaseId } = useParams();
    const [tool, setTool] = useState({});
    const [userName, setUserName] = useState('');


    const [user] = useAuthState(auth)

    const { name, available_quantity, price } = tool;

    useEffect(() => {
        fetch(`http://localhost:5000/tools/${purchaseId}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    Navigate('/')
                } else {
                    return res.json()
                }

            })
            .then(data => {
                setTool(data)
            })
    }, [user, purchaseId])




    // use rect from hook
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const { adders, phone, quantity } = data;

        const totalPrice = quantity * price;

        const purchase = {
            userName: user.displayName,
            email: user.email,
            name: name,
            price: totalPrice,
            adders: adders,
            phone: phone,
        }

        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                toast('Your Purchase is Done')
                reset()
            })

    };



    return (
        <div className="hero min-h-screen ">
            <div className="hero-content w-full">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl text-center  font-bold"> Purchase Tool</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control mb-3">
                                <input type="text"
                                    value={user?.displayName}
                                    disabled
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="form-control mb-3">
                                <input type="email"
                                    value={user?.email}
                                    disabled
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <input type="text"
                                    value={name}
                                    disabled
                                    className="input input-bordered w-full "
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Available Quantity: {available_quantity}</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Minimum Order Quantity  100"
                                    className="input input-bordered w-full "
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: "Quantity is Required"
                                        },
                                        min: {
                                            value: 100,
                                            message: 'Minimum Order Quantity  100'
                                        },
                                        max: {
                                            value: `${available_quantity}`,
                                            message: 'This Quantity is Not available'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                </label>
                            </div>

                            <div className="form-control ">
                                <input
                                    type="text"
                                    placeholder="Adders"
                                    className="input input-bordered w-full"
                                    {...register("adders", {
                                        required: {
                                            value: true,
                                            message: "Adders is Required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.adders?.type === 'required' && <span className="label-text-alt text-red-500">{errors.adders.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <input
                                    type="number"
                                    placeholder="Phone Number"
                                    className="input input-bordered w-full"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: "Phone Number is Required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                </label>
                            </div>

                            <input disabled={!name} className='btn btn-primary mt-2 p-0 w-full' type="submit" value="Purchase Naw" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Purchase;