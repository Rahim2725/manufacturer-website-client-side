import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);
    const { email, displayName, photoURL, } = user;
    return (
        <section>
            <div>
                <h1 className=" text-2xl font-bold">Profile !</h1>
                <hr className='w-3/4' />
                <div className='flex justify-center items-center'>
                    <div>
                        <div class="avatar m-6">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={photoURL} alt="" />
                            </div>
                        </div>
                        <div className='flex justify-center '>
                            <button className='btn btn-sm btn-primary'>Add Education</button>
                        </div>
                    </div>
                    <div className='ml-6'>
                        <p className='text-md font-bold'>Your Name </p>
                        <h2 className='text-xl font-bold'>{displayName}</h2>
                        <p> Your Email</p>
                        <h2 className='text-xl font-bold'>{email}</h2>
                    </div>
                </div>
            </div>
            <div>
                <h1 className=" text-2xl font-bold">Education !</h1>
                <hr className='w-3/4' />

            </div>


        </section>
    );
};

export default MyProfile;