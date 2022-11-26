import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdsCard from './AdsCard/AdsCard';

const AdsProduct = () => {
    const {data: adsProducts = [], isLoading} = useQuery({queryKey: ['advertising'], 
        queryFn: () => fetch('http://localhost:5000/advertising')
        .then(res => res.json())
    
    })

    return (
        <div className='mt-5'>
           {
            adsProducts && <>
                <div className='text-center'>
                <h1 className='text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400'>Advertising Product {adsProducts.length}</h1>
            </div> 

            <div className='grid grid-cols-1 sm:grid-cols-2 mt-5 gap-3 md:grid-cols-3 lg:grid-cols-4 '>
                {
                    adsProducts.map(adsProduct => <AdsCard key={adsProduct._id} adsProduct={adsProduct}></AdsCard>)
                }
            </div>
            </>
           }
        </div>
    );
};

export default AdsProduct;