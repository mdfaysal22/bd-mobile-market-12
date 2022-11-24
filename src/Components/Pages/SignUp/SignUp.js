import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { userAuth } from "../../../Contexts/AuthContext";
import toast from 'react-hot-toast';

const SignUp = () => {
    const imagebbToken = process.env.REACT_APP_imgaebb;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { emailSignup, setLoader, updateUser } = useContext(userAuth);
    const onSubmit = (data, event) => {
        const form = event.target;
        const name = data.name;
        const email = data.email;
        const pass = data.password;
        const img = data.image[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imagebbToken}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            const imgURL = result.data.url;
            if(result.success){
                emailSignup(email, pass)
                .then(result => {
                    const success = result.user;
    
                    updateUser(name, imgURL)
                        .then(result => {
                            toast.success("SignUp Successfully");
                            setLoader(true)
                        })
                        .catch(err => () => {
                            const errorMassage = err.massage;
                        })
    
                })
                .catch(err => console.log(err));
            }
            
            
        })
        
        form.reset();
    };
    return (
        <div className='w-full md:w-1/2 lg:w-1/3 mx-auto px-5 md:px-0  text-center'>
            <div className='my-5'>
                <h1 className='text-4xl font-semibold text-primary'>SignUp</h1>
                <p className='text-secondary mt-2'>Already have an Account, Please <Link>Sign In</Link></p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-secondary">Name</span>
                    </label>
                    <input {...register("name")} type="text" placeholder="Full Name" className="input  focus:text-secondary text-secondary input-bordered" />
                </div>
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
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-secondary">Profile Photo</span>
                    </label>
                    <label
                        class="flex w-full cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                        tabindex="0">
                        <span for="photo-dropbox" class="flex items-center space-x-2">
                            <svg class="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
                                <path
                                    d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="24"></path>
                                <path
                                    d="M80,128a80,80,0,1,1,144,48"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="24"></path>
                                <polyline
                                    points="118.1 161.9 152 128 185.9 161.9"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="24"></polyline>
                                <line
                                    x1="152"
                                    y1="208"
                                    x2="152"
                                    y2="128"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="24"></line>
                            </svg>
                            <span class="text-xs font-medium text-gray-600">
                                Drop Your Image, or
                                <span class="text-blue-600 underline ml-1">browse</span>
                            </span>
                        </span>
                        <input {...register("image")} id="photo-dropbox" type="file" class="sr-only" />
                    </label>
                </div>
                
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text text-secondary'>Sign Up As a </span>
                    </label>
                    <select {...register("userType")} className="select text-secondary select-bordered w-full">
                        <option defaultValue="buyer" selected>Buyer</option>
                        <option value="seller">Seller</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Signup Now</button>
                </div>
            </form>
            <div className="divider">OR</div>
            <div className="form-control mt-6">
                <button className="btn btn-outline border-primary border-2 text-primary hover:text-white hover:bg-primary hover:border-primary">Sign up as a Buyer Vai Google</button>
            </div>
        </div>
    );
};

export default SignUp;