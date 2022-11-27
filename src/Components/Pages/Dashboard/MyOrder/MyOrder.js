import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { userAuth } from '../../../../Contexts/AuthContext';
import Order from './Order/Order';

const MyOrder = () => {
    const {user} = useContext(userAuth)
    const email = user.email;
    console.log(email)
    const {data: orders = []} = useQuery({
        queryKey: ["orders", email],
        queryFn: async() => {
            const res = await axios.get(`http://localhost:5000/orders?BuyerEmail=${email}`)
            return res.data
        }
    })
    console.log(orders)
    return (
        <div>
            <div>
                <h1 className='text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400'>My Orders</h1>
            </div>
            <div className='mt-5'>
                {
                    orders.map(order => <Order key={order._id} order={order}></Order>)
                }
            </div>
        </div>
    );
};

export default MyOrder;