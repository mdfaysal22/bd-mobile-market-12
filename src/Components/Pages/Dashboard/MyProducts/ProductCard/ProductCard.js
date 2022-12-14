import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import {BsTrash} from 'react-icons/bs'
import Loading from '../../../../Shared/Loading/Loading';

const ProductCard = ({ product, refetchFun }) => {
    const { _id,status, ProductName, ResellingPrice, productImg } = product;
    
    const handleAds = () => {
        fetch(`https://assignment-12-server-mdfaysal22.vercel.app/advertising`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Ads Section Added Successfully");
                
                refetch()
            });
    }

    const {data: alreadyAds = [], refetch, isLoading} = useQuery({
        queryKey: ["advertising"],
        queryFn: async() => {
            const res = await axios.get(`https://assignment-12-server-mdfaysal22.vercel.app/advertising`)
            return res.data;
        }
    })
    const myAds = alreadyAds.find(ads => ads?._id === _id);
    const handleDelete = (id) => {
        fetch(`https://assignment-12-server-mdfaysal22.vercel.app/advertising/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            fetch(`https://assignment-12-server-mdfaysal22.vercel.app/products/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                refetchFun()
            })
        })
    }
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center border-t-2 border-b-2 py-2">


                <div className='flex justify-start gap-3'>
                    <img className=" w-20 h-20 rounded-lg" src={productImg} alt="" />




                    <div>

                        <h3 className="text-xl leading-none tracking-tighter text-secondary">{ProductName}</h3>
                        <h3 className='text-secondary'>Price :$<span className='semibold '> {ResellingPrice}</span></h3>
                        <h4 className='text-secondary'>Status : {status}</h4>


                    </div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    {status === "unsold" && !myAds && <button onClick={handleAds} className='btn bg-green-700 hover:bg-green-900 btn-sm'>Ads</button>}
                    <button onClick={() => handleDelete(_id)} className='btn btn-primary btn-sm'><BsTrash></BsTrash></button>
                </div>

            </div>

        </div>
    );
};

export default ProductCard;