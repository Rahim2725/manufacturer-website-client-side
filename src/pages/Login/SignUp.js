import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Sherad/Loading';

const SignUp = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [
        singInWithGoogle,
        gUser,
        gLoading,
        gError

    ] = useSignInWithGoogle(auth);

    const [updateProfile, updating, upError] = useUpdateProfile(auth);


    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const { email, password, name } = data;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name })
        reset()
    }

    let signInError;

    const [token] = useToken(user || gUser);

    useEffect(() => {
        if (token) {
            navigate('/home');
        }
    }, [token, navigate,])

    if (error || gError || upError) {
        signInError = <p className='text-red-500'> <small>{gError?.message} {error?.message} {upError?.message}</small></p>
    }

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    return (
        <div className='flex justify-center items-center lg:my-20'>
            <div className="hero-content w-2/4">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body ">
                        <h2 className="text-3xl text-center font-bold">Sing Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>


                            {/* email field */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required '
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide Valid Email '
                                    }
                                })} />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>

                            {/* Password field */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="Password" placeholder="Password" className="input input-bordered"  {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })} />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>

                            <input className='btn btn-primary w-full' type="submit" value="Sing Up" />
                        </form>
                        {signInError}
                        <p> Already have an Account Please ? <Link className='text-primary font-bold' to="/login">Login</Link></p>
                        <div>
                            <div className="divider">OR</div>
                            <button onClick={() => singInWithGoogle()} className='btn bg-white text-black hover:bg-white w-full'>CONTINUE WITH GOOGLE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;