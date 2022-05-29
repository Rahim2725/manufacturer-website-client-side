import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = ({ review }) => {

    const [user] = useAuthState(auth)

    const addProduct = event => {
        event.preventDefault();
        const description = event.description.value;
        const rating = event.target.rating.value;

        const product = {
            description: description,
            rating: rating,
        }

        fetch('https://tranquil-tundra-16871.herokuapp.com/review', {
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
                event.target.reset();
            })

    }

    return (
        <div className=' flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class=" text-2xl text-center">Add Product</h2>
                    <form onSubmit={addProduct}  >

                        <textarea placeholder='Review' className=' input-primary border-2 border-primary' name="description" id="" cols="30" rows="10"></textarea>

                        <input type="number" placeholder="Rating" name='rating' class="input mb-3 block input-bordered input-primary w-full max-w-xs" required />

                        <input className='btn btn-primary w-full' type="submit" value="Add" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddReview;