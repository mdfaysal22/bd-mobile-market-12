import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { MdVerified } from 'react-icons/md';
import { Link } from 'react-router-dom';
import useBuyer from '../../../../../Hooks/useBuyer';
import Loading from '../../../../../Shared/Loading/Loading';

const CategoryCard = ({ caregoryProduct, SetProductData, currentUser }) => {
    const [isBuyer] = useBuyer(currentUser)
    const { PostDate, _id, ProductName, usedYear, email, name, PhoneNumber, status, location, quality, OriginalPrice, ResellingPrice, productImg } = caregoryProduct;
    const { data: user = [], isLoading } = useQuery({
        queryKey: ['verifieduser', email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/verifieduser?email=${email}`)

            return res.data;
        }

    })
    if (isLoading) {

        return <Loading></Loading>
    }
    const userInfo = user?.[0]
    return (
        <div>
            <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">

                <div className="flex-shrink-0">
                    <img className="object-cover w-full h-48 rounded-lg" src={productImg} alt="" />
                </div>

                <div className="flex flex-col justify-between flex-1">

                    <div className="flex-1">

                        <div className="flex pt-6 space-x-1 text-sm text-gray-500">
                            <span> Post:  </span>
                            <span> {PostDate} </span>
                            <span> Quality : {quality} </span>
                        </div>


                        <h3 className="text-2xl font-semibold leading-none tracking-tighter text-secondary">{ProductName}</h3>
                        <p className='text-secondary'><span className='font-semibold'>Location:</span> {location}</p>
                        <p className='text-secondary'><span className='font-semibold'>Years of Use:</span> {usedYear}</p>
                        <h3 className='text-secondary'>Price :$<span className='line-through'>{OriginalPrice}</span> <span className='semibold '> {ResellingPrice}</span></h3>
                        <div className='divider my-2 h-0 before:bg-black after:bg-black'></div>

                        <div className='flex my-2 justify-start items-center gap-3'>

                            <img className='object-cover w-12 h-12 rounded-full' src={userInfo?.imgURL} alt="Usre Imagee" />

                            <div>
                                <h1 className='text-secondary'><span className='font-semibold'>Seller Name</span> {name} <span>{userInfo?.verified && <MdVerified className='inline text-blue-600'></MdVerified>}</span></h1>
                                <p className='text-secondary'><span className='font-semibold'>Contact: </span>{PhoneNumber}</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            {isBuyer ?
                                <>
                                    <label onClick={() => SetProductData(caregoryProduct)} className='text-center btn bg-blue-800 hover:bg-blue-900 btn-sm' htmlFor="Product-connector">
                                        Book Now
                                    </label>
                                    <button className='btn btn-sm btn-primary'>
                                        Report
                                    </button>
                                </>
                                :
                                <>
                                <Link to="/login" className='btn bg-red-600 hover:bg-red-700'>Please Login as a Buyer</Link>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;