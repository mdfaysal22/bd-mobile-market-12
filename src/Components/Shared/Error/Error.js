import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const Error = () => {
    useTitle("404 Page");
    return (
        <div className='hero min-h-screen'>
            <div className="bg-white hero-content py-6 sm:py-8 lg:py-12">
                <div className=" px-4 md:px-8 mx-auto">
                    <div className="flex flex-col items-center">
                        <h1 className='text-white text-xl md:text-2xl lg:text-5xl font-semibold mb-4 bg-gradient-to-r from-blue-400 via-orange-500 to-orange-900 bg-clip-text text-transparent sm:text-5xl'>BD Mobile Market</h1>

                        <p className="text-indigo-800 text-sm md:text-base font-semibold uppercase mb-4">That’s a 404</p>
                        <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center mb-2">Page not found</h1>

                        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mb-12">The page you’re looking for doesn’t exist.</p>

                        <Link to="/" className="btn-primary text-white btn text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Go To Home Page</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;