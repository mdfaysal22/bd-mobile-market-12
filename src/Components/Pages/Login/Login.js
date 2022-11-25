import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { userAuth } from '../../../Contexts/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {emailSignIn, googleSignUp, setLoader } = useContext(userAuth);
    const onSubmit = (data, e) => {
        console.log(data);
        const form = e.target;
        const email = data.email;
        const password = data.password;
        emailSignIn(email, password)
        .then(result => {
            const currentUser = result.user;
            setLoader(true);
            toast.success(`Successfully Login ${currentUser.displayName}`);
            
            
        })
        .catch(err => {
            const message = err.message;
            toast.error(`${message}`)
        })
        form.reset();
    }
    const handleGoogleSignIn = () => {
        googleSignUp()
        .then(result => {
            const currentUser = result.user
            setLoader(true);
            toast.success(`Google SignUp Successful ${currentUser.displayName}`);
            
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='w-full md:w-1/2 lg:w-1/3 mx-auto px-5 md:px-0  text-center'>
            <div className='my-5'>
                <h1 className='text-4xl font-semibold text-primary'>Login</h1>
                <p className='text-secondary mt-2'>Create An Account, Please <Link to="/signup" className="text-primary font-semibold">Signup</Link></p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-secondary">Email</span>
                    </label>
                    <input {...register("email", { required: true })} type="email" placeholder="Email" className="input  focus:text-secondary text-secondary input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-secondary">Password</span>
                    </label>
                    <input {...register("password")} type="password" placeholder="Password" className="input  focus:text-secondary text-secondary input-bordered" />
                </div>
                
                
                
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <div className="divider">OR</div>
            <div className="form-control mt-6">
                <button onClick={handleGoogleSignIn} className="btn btn-outline border-primary border-2 text-primary hover:text-white hover:bg-primary hover:border-primary">Login as a Buyer By Google</button>
            </div>
        </div>
    );
};

export default Login;