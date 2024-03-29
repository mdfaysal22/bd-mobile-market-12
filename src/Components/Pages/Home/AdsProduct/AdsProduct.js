import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { userAuth } from '../../../../Contexts/AuthContext';
import useBuyer from '../../../Hooks/useBuyer';
import ModalBody from '../../../Shared/ModalBody/ModalBody';
import AdsCard from './AdsCard/AdsCard';

const AdsProduct = () => {
    const [productData, SetProductData] = useState(null);
    const {user} = useContext(userAuth);
    const [isBuyer] = useBuyer(user?.email)
    const { data: adsProducts = [], refetch } = useQuery({
        queryKey: ['advertising'],
        queryFn: () => fetch('https://assignment-12-server-mdfaysal22.vercel.app/advertising')
            .then(res => res.json())

    })

    const handleReportedItem = id => {
        fetch(`https://assignment-12-server-mdfaysal22.vercel.app/allproducts/${id}`, {
            method: "PUT"
        })
        .then(res => res.json())
        .then(data => {
            if(data.matchedCount === 1){
                toast.success("Report Successful")
            }
            
        })

    }

    return (
        <div className='mt-10'>
            {
                adsProducts.length !== 0 && <>
                    <div className='text-center bg-red-100  rounded-md shadow-lg shadow-red-300 py-2'>
                        <h1 className='text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r text-black uppercase'>Advertising Product {adsProducts.length}</h1>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 mt-5 gap-3 md:grid-cols-3 lg:grid-cols-4 '>
                        {
                            adsProducts.map(adsProduct => <AdsCard handleReportedItem={handleReportedItem} isBuyer={isBuyer} key={adsProduct._id} SetProductData={SetProductData} adsProduct={adsProduct}></AdsCard>)
                        }
                    </div>
                </>
            }
            {productData && isBuyer && <ModalBody refetch={refetch} productData={productData} SetProductData={SetProductData}></ModalBody> 
            }
        </div>
    );
};

export default AdsProduct;