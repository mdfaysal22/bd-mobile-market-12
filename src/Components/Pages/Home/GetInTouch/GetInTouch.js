import React from 'react';
import './style.css'

const GetInTouch = () => {
    return (
        <div className='bg'>
            <div className='p-10 text-center'>
                <h1 className='text-5xl font-semibold text-white text-center'>Get In Touch</h1>
                <input type="text" placeholder="Email" className="input bg-inherit focus-within:border-white mt-2 placeholder:text-2xl placeholder:text-white border-white input-bordered input-secondary w-full max-w-xs" />
                <br />
                <button className="btn mt-4 bg-red-800 text-white border-red-800">Subscribe Now</button>
            </div>            
        </div>
    );
};

export default GetInTouch;