import React from 'react';
import {SiNokia, SiSamsung} from "react-icons/si"
import {AiFillApple} from 'react-icons/ai'
import {FaCcPaypal, FaMicrosoft} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc';
import {GrFacebook} from 'react-icons/gr'

const OurTrasted = () => {
    return (
        <div className='my-5'>
            <div className='bg-red-100 shadow-lg shadow-red-300 p-10 text-black font-semibold'>
                <div className='text-center'>
                    <h1 className='text-xl md:text-4xl lg:text-6xl'>Our Trusted Client</h1>
                </div>
                <div className='mt-5 flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10'>
                    <SiSamsung className='text-8xl'></SiSamsung>
                    <AiFillApple className='text-6xl'></AiFillApple>
                    <SiNokia className='text-8xl'></SiNokia>
                    <FaCcPaypal className='text-6xl'></FaCcPaypal>
                    <FaMicrosoft className='text-6xl'></FaMicrosoft>
                    <FcGoogle className='text-6xl'></FcGoogle>
                    <GrFacebook className='text-6xl'></GrFacebook>
                </div>
            </div>
        </div>
    );
};

export default OurTrasted;