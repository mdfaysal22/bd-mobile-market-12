import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Seller from './Seller/Seller';

const AllSeller = () => {
    const {data: allUsers = [], refetch} = useQuery({
        queryKey:['users'],
        queryFn: () => 
            fetch("http://localhost:5000/users")
            .then(res => res.json())
        
    })
    const sellers = allUsers.filter(user => user.role === "seller")
    
    return (
        <div>
            <div>
                <h1 className='text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400'>Recent Sign Up Seller</h1>
            </div>
            <div>
                {sellers.map(seller => <Seller refetch={refetch} key={seller._id} seller={seller}></Seller>)}
            </div>
        </div>
    );
};

export default AllSeller;