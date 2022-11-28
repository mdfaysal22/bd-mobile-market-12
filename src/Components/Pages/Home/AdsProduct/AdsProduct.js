import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
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
        queryFn: () => fetch('http://localhost:5000/advertising')
            .then(res => res.json())

    })

    return (
        <div className='mt-5'>
            {
                adsProducts.length !== 0 && <>
                    <div className='text-center'>
                        <h1 className='text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400'>Advertising Product {adsProducts.length}</h1>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 mt-5 gap-3 md:grid-cols-3 lg:grid-cols-4 '>
                        {
                            adsProducts.map(adsProduct => <AdsCard isBuyer={isBuyer} key={adsProduct._id} SetProductData={SetProductData} adsProduct={adsProduct}></AdsCard>)
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