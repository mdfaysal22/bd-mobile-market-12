import React from 'react';
import {CiDeliveryTruck} from 'react-icons/ci';
import {GiPriceTag} from 'react-icons/gi';
import {MdOutlineHighQuality} from 'react-icons/md';
import {BiSupport } from 'react-icons/bi';
const Features = () => {
    return (
        <div className='bg-red-100 rounded-md shadow-lg shadow-red-300 text-black text-3xl font-semibold p-10 my-5 '>
            <h1 className='text-center mb-5 text-5xl'>Our Features</h1>
            <div className='  flex mx-auto justify-between items-center'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <CiDeliveryTruck className='text-7xl'/>
                <h1>Free Delivery</h1>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <GiPriceTag  className='text-7xl'/>
                <h1>Best Price</h1>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <MdOutlineHighQuality   className='text-7xl'/>
                <h1>High Quality</h1>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <BiSupport className='text-7xl'/>
                <h1>Customer Support</h1>
            </div>
            
        </div>
        </div>
    );
};

export default Features;