import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../../../Assets/phone.jpg';

const Banner = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="md:h-[25rem] flex flex-col sm:flex-row bg-primary rounded-lg overflow-hidden">

                    <div className="w-full sm:w-1/2 lg:w-2/5 flex flex-col justify-center p-4 sm:p-8">
                        <h2 className="text-white text-xl md:text-2xl lg:text-4xl font-semibold mb-4 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent sm:text-5xl">Sell your All Old Model Phone Up to 70% Price. <br /> Buy Used Phone by reasonable Price </h2>


                        <div>
                            <Link to="/" className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Explore Now</Link>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-3/5 h-52 sm:h-auto order-first sm:order-none bg-gray-700">
                        <img src={bannerImage}  alt="Photos by Iphone" className="w-full h-full object-cover object-top" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;