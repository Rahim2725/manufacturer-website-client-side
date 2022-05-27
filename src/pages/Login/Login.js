import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit= data => {
        console.log(data)
    }


    return (
        <div className='flex justify-center items-center lg:my-20'>
            <div class="hero-content w-2/4">
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body ">
                        <h2 className="text-3xl text-center font-bold">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)} >

                            {/* email field */}

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" {...register("email", {
                                    required:{
                                        value: true,
                                        message: 'Email is Required '
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide Valid Email ' 
                                    }
                                })} />
                                <label class="label">
                                  {errors.email?.type === 'required' &&   <span class="label-text text-red-500">{errors.email.message}</span>}
                                  {errors.email?.type === 'pattern' &&   <span class="label-text text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>

                            {/* Password field */}

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="Password" placeholder="Password" class="input input-bordered"  {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required' 
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })} />
                                <label class="label">
                                  {errors.password?.type === 'required' &&   <span class="label-text text-red-500">{errors.password.message}</span>}
                                  {errors.password?.type === 'minLength' &&   <span class="label-text text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>

                            <input className='btn btn-primary w-full' type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;