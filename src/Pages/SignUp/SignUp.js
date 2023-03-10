import toast from 'react-hot-toast';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../hooks/useToken';


const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, providerLogin } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    if (token) {
        navigate('/');
    }


    const handleSignUp = (data) => {
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User created succesfully');

                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);

                    })
                    .catch(err => console.log(err))

            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                saveUser(user.displayName, user.email, { role: 'buyer' });

            })
            .catch(error => {
                console.log(error);
                const errorMessage = error.message;
                setSignUpError(errorMessage);
            })

    }


    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        console.log(user);

        fetch('https://mobiles-resale-market-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCreatedEmail(email);
            })
    };



    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-xl text-center'>Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span> </label>
                        <input
                            {...register("name",
                                { required: "Name is required" })}
                            type="text"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600' >{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span> </label>

                        <input
                            {...register("email",
                                { required: "Email Address is required" })}
                            type="email"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600' >{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span> </label>

                        <input {...register("password", {
                            required: "Password  is required",
                            minLength: { value: 6, message: 'Password must be 6 character or longer' }
                        })}
                            type="password"
                            className="input input-bordered w-full max-w-xs" />

                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Account Type</span></label>
                        <select
                            {...register('role')}
                            className="select select-bordered w-full max-w-xs">
                            <option value='buyer'>Buyer</option>
                            <option value='seller'>Seller</option>

                        </select>
                    </div>

                    <div>
                        {signUpError && <p className='text-red-600 my-3'>{signUpError}</p>}
                    </div>
                    <input className='w-full my-6 btn btn-accent' value="Sign Up" type="submit" />
                </form>
                <p>Already have an account ? <Link to='/login' className='text-secondary'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full' onClick={handleGoogleSignIn}>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;