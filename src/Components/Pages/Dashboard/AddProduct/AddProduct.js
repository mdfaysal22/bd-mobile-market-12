import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { userAuth } from '../../../../Contexts/AuthContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    const imagebbToken = process.env.REACT_APP_imgaebb;
    const { user } = useContext(userAuth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const form = e.target;
        const img = data.ProductPhoto[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imagebbToken}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {

                if (result.success) {
                    const imgURL = result.data.url;
                    const ProductName = data.ProductName;
                    const BrandName = data.brandName;
                    const PhoneNumber = data.phoneNumber;
                    const OriginalPrice = data.OriginalPrice;
                    const ResellingPrice = data.ResellingPrice;
                    const usedYear = data.UseYear;
                    const current = new Date();
                    const PostDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
                    const status = "unsold";
                    const name = user?.displayName;
                    const description = data.ProductDescription;
                    const location = data.Location;
                    const quality = data.quality;
                    const email = user.email;
                    const product = {
                        ProductName,
                        BrandName,
                        OriginalPrice,
                        ResellingPrice,
                        usedYear,
                        PostDate,
                        name,
                        description,
                        location,
                        quality,
                        email,
                        status,
                        PhoneNumber,
                        productImg: imgURL
                    }

                    fetch('https://assignment-12-server-mdfaysal22.vercel.app/products', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success("Product Added");
                            form.reset();
                            navigate('/dashboard/myproducts')

                        });
                }
            })







    };
    return (
        <div>
            <h1 className='text-2xl md:text-5xl font-semibold text-primary'>Add Product</h1>
            <form className='mt-5 flex w-full flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-secondary">Select Brand Name</span>
                    </label>
                    <select {...register("brandName")} defaultValue={'Apple'} className="select text-secondary select-bordered w-full">
                        <option value="Apple">Apple-iphone</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Nokia">Nokia</option>
                    </select>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-secondary">Product Name</span>
                    </label>
                    <input {...register("ProductName")} type="text" placeholder="Product Name" className="input  focus:text-secondary text-secondary input-bordered" />
                </div>



                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-secondary">Product Photo</span>
                    </label>
                    <label
                        className="flex w-full cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                        tabIndex="0">
                        <span htmlFor="photo-dropbox" className="flex items-center space-x-2">
                            <svg className="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
                                <path
                                    d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="24"></path>
                                <path
                                    d="M80,128a80,80,0,1,1,144,48"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="24"></path>
                                <polyline
                                    points="118.1 161.9 152 128 185.9 161.9"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="24"></polyline>
                                <line
                                    x1="152"
                                    y1="208"
                                    x2="152"
                                    y2="128"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="24"></line>
                            </svg>
                            <span className="text-xs font-medium text-gray-600">
                                Drop Your Image, or
                                <span className="text-blue-600 underline ml-1">browse</span>
                            </span>
                        </span>
                        <input {...register("ProductPhoto")} id="photo-dropbox" type="file" className="sr-only" />
                    </label>
                </div>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text text-secondary'>Short Descriptions Of Product.</span>
                    </label>
                    <textarea {...register("ProductDescription")} className="textarea focus:text-secondary text-secondary textarea-bordered" placeholder="Write About Your Product."></textarea>

                </div>

                <div className='flex justify-start flex-col md:flex-row gap-5 items-center'>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text text-secondary'>Original Price</span>
                        </label>
                        <input {...register("OriginalPrice")} type="number" placeholder="Original Price" className="input  focus:text-secondary text-secondary input-bordered" />

                    </div>

                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text text-secondary'>Reselling Price</span>
                        </label>
                        <input {...register("ResellingPrice")} type="number" placeholder="Reselling Price" className="input  focus:text-secondary text-secondary input-bordered" />

                    </div>




                </div>
                <div className='flex justify-start flex-col md:flex-row gap-5 items-center'>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text text-secondary'>Years of Use</span>
                        </label>
                        <input {...register("UseYear")} type="number" placeholder="Years of use" className="input  focus:text-secondary text-secondary input-bordered" />

                    </div>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text text-secondary'>Product Quality</span>
                        </label>
                        <select {...register("quality")} defaultValue={'Good'} className="select text-secondary select-bordered w-full">
                            <option value="Good">Good</option>
                            <option value="Better">Better</option>
                            <option value="Best">Best</option>
                        </select>
                    </div>
                </div>
                <div className='flex justify-start flex-col md:flex-row gap-5 items-center'>
                <div className='form-control w-full'>
                    <label className='label'>
                        <span className='label-text text-secondary'>Phone Number</span>
                    </label>
                    <input {...register("phoneNumber")} type="number" placeholder="Phone Number" className="input  focus:text-secondary text-secondary input-bordered" />

                </div>
                <div className='form-control w-full'>
                    <label className='label'>
                        <span className='label-text text-secondary'>Location</span>
                    </label>
                    <input {...register("Location")} type="text" placeholder="Your Location" className="input  focus:text-secondary text-secondary input-bordered" />

                </div>
                </div>

                <div className="text-center mt-6">
                    <button type='submit' className="btn btn-primary">Add Product</button>
                </div>
            </form>

        </div>
    );
};

export default AddProduct;