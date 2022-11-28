import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { userAuth } from '../../../../Contexts/AuthContext';
import Loading from '../../../Shared/Loading/Loading';
import ProductCard from './ProductCard/ProductCard';

const MyProducts = () => {
    const {user} = useContext(userAuth);
    const email = user?.email;
    const {data:products = [], isLoading, refetch} = useQuery({
        queryKey: ["products", email],
        queryFn: () => 
            fetch(`http://localhost:5000/products?email=${email}`)
            .then(res => res.json())
        
    })
    
    if(isLoading)
     return (
            <Loading></Loading>
            
        
    )

    
    return (
        <div>
            <div>
                <h1 className='text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400'>My Recent Added Products {products.length}</h1>
            </div>
            <div className='flex flex-col gap-3 mt-5'>
                {products.map(product => <ProductCard refetchFun={refetch} key={product._id} product={product}></ProductCard>)}
            </div>
        </div>
    );
};

export default MyProducts;