import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import ShopCard from './ShopCard/ShopCard';

const Shop = () => {
    const { data: allProducts = [] } = useQuery({
        queryKey: ['allproducts'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/allproducts')
            return res.data
        }
        
    })
    console.log(allProducts);
    return (
        <div className='mx-10'>
            <div className='text-center my-5 text-xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400'>
                <h1>Welcome to Our Online Shop</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {allProducts.map(product => <ShopCard key={product._id} product={product}></ShopCard>)}
            </div>
        </div>
    );
};

export default Shop;