import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Buyer from './Buyer/Buyer';

const AllBuyer = () => {
    const {data: allUsers = [], refetch} = useQuery({
        queryKey:['users'],
        queryFn: () => 
            fetch("http://localhost:5000/users")
            .then(res => res.json())
        
    })
    const buyers = allUsers?.filter(user => user.role === "buyer")
    return (
        <div>
            <div>
                <h1 className='text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400'>Recent Sign Up Seller</h1>
            </div>
            <div>
                {buyers.map(buyer => <Buyer refetch={refetch} key={buyer._id} buyer={buyer}></Buyer>)}
            </div>
        </div>
    );
};

export default AllBuyer;