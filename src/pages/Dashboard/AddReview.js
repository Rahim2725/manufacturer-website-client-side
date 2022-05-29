import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = ({ review }) => {

    const [user] = useAuthState(auth)

    const addProduct = event => {
        event.preventDefault();
        const description = event.target.description.value;
        const rating = event.target.rating.value;

        const review = {
            name: user.displayName ,
            description: description,
            rating: rating,
        }

        fetch('https://tranquil-tundra-16871.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review),
        })
            .then(res => res.json())
            .then(data => {
                toast('Your Review is Add')
                event.target.reset();
            })

    }

    return (
        <div className=' flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className=" text-2xl text-center">Add Review</h2>
                    <form onSubmit={addProduct}  >

                        <textarea placeholder='Review' className=' input-primary w-full p-1 border-2 border-primary' name="description" id="" cols="30" rows="8" ></textarea>
                      

                        <input type="number" placeholder="Rating" name='rating' className="input mb-3 block input-bordered input-primary w-full max-w-xs" required />

                        <input className='btn btn-primary w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddReview;