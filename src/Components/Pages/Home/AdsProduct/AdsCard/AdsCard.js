import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../../Shared/Loading/Loading';

const AdsCard = ({adsProduct,}) => {
    const { ProductName,email, productImg} = adsProduct;
    const {data: user = [], isLoading} = useQuery({
        queryKey: ['verifieduser', email],
        queryFn: async() => {
            const res = await axios.get(`https://assignment-12-server-mdfaysal22.vercel.app/verifieduser?email=${email}`)
            
            return res.data;
        }
        
    })
    if(isLoading){
        
        return <Loading></Loading>
    }
    const userInfo = user?.[0]
    return (
        <div>
            <Link to={'/shop'}>
            <div className="flex shadow-lg shadow-red-300 p-5 rounded-md border-2 border-red-200 flex-col mb-12 overflow-hidden cursor-pointer">

                <div className="flex-shrink-0">
                    <img className="object-cover w-full h-48 rounded-lg" src={productImg} alt="" />
                </div>

                <div className="flex flex-col pt-2 justify-between flex-1">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold leading-none tracking-tighter text-secondary">{ProductName}</h3>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default AdsCard;