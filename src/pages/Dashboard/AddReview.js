import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = ({review}) => {

    const [user] = useAuthState(auth)
    
    const addProduct = event => {
        event.preventDefault() ;
        const description = event.target.description.value ;
        const rating = event.target.rating.value ;

        const product = {
           description: description,
           rating: rating,
        }

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                 authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            event.target.reset() ;
        })

    }

    return (
        <div className=' flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class=" text-2xl text-center">Add Product</h2>
                    <form onSubmit={addProduct}  >
                        <input type="text" placeholder="Name" name='name' class="input mb-3 block input-bordered input-primary w-full max-w-xs" required />

                        <input type="number" placeholder="Product Price" name='price' class="input mb-3 block input-bordered input-primary w-full max-w-xs" required />

                        <textarea type="text" placeholder="Product Details" name='description' class="input mb-3 block h-16 input-bordered input-primary w-full max-w-xs" required />

                        <input type="text" placeholder="Available Quantity" name='available_quantity' class="input mb-3 block input-bordered input-primary w-full max-w-xs" required />

                        <input type="text" placeholder="Minimum Order Quantity" name='minimum_order_quantity' class="input mb-3 block input-bordered input-primary w-full max-w-xs" required />

                        <input type="text" placeholder="Image URL" name='img' class="input mb-3 block input-bordered input-primary w-full max-w-xs" required />

                        <input className='btn btn-primary w-full' type="submit" value="Add" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddReview;