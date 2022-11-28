import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { userAuth } from '../../../Contexts/AuthContext';
import useTitle from '../../Hooks/useTitle';
import ModalBody from '../../Shared/ModalBody/ModalBody';
import ShopCard from './ShopCard/ShopCard';

const Shop = () => {
    useTitle("Shop")
    const {user} = useContext(userAuth);
    const currentUser = user?.email
    const [productData, SetProductData] = useState(null);
    const { data: allProducts = [], refetch } = useQuery({
        queryKey: ['allproducts'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/allproducts')
            return res.data
        }

    })

    
    
    return (
        <div className='mx-10'>
            <div className='text-center my-5 text-xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400'>
                <h1>Welcome to Our Online Shop</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {allProducts.map(product => <ShopCard currentUser={currentUser} SetProductData={SetProductData} key={product._id} product={product}></ShopCard>)}
            </div>


            {productData && <ModalBody refetch={refetch} productData={productData} SetProductData={SetProductData}></ModalBody>}
        </div>
    );
};

export default Shop;