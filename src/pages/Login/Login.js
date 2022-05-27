import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Sherad/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        singInWithGoogle,
        gUser,
        gLoading,
        gError

    ] = useSignInWithGoogle(auth)

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const { email, password } = data;
        signInWithEmailAndPassword(email, password);
        reset()
    }

    
    const [token] = useToken(user || gUser);
    
    useEffect(() => {
        if(token){
            navigate(from, { replace: true });
        }
    }, [token, navigate, from])

    let signInError;

  
    if (error || gError) {
        signInError = <p className='text-red-500'> <small>{gError?.message} {error?.message}</small></p>
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex justify-center items-center lg:my-20'>
            <div className="hero-content w-2/4">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body ">
                        <h2 className="text-3xl text-center font-bold">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)} >


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

                            <input className='btn btn-primary w-full' type="submit" value="Login" />
                        </form>
                        {signInError}
                        <p className='ml-2'>Create New Account? <Link className='text-primary font-bold' to="/signup"> Sign Up</Link></p>
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

export default Login;