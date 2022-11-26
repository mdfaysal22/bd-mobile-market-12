import React from 'react';
import { Link } from 'react-router-dom';

const ShopCard = ({product}) => {
    const {PostDate,_id, ProductName, description, quality, OriginalPrice, ResellingPrice, productImg } = product;
    return (
        <div>
            <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">

                <div className="flex-shrink-0">
                    <img className="object-cover w-full h-48 rounded-lg" src={productImg} alt="" />
                </div>

                <div className="flex flex-col justify-between flex-1">

                    <div className="flex-1">

                        <div className="flex pt-6 space-x-1 text-sm text-gray-500">
                            <span> Post:  </span>
                            <span> {PostDate} </span>
                            <span> Quality : {quality} </span>
                        </div>


                        <h3 className="text-2xl font-semibold leading-none tracking-tighter text-secondary">{ProductName}</h3>
                        <p className="text-lg mt-3 font-normal text-gray-500">{description.slice(0, 100)}...</p>


                        <h3 className='text-secondary'>Price :$<span className='line-through'>{OriginalPrice}</span> <span className='semibold '> {ResellingPrice}</span></h3>

                        <Link to={`/shop/${_id}`} className='text-center mt-5'><button className='btn btn-wide btn-primary btn-sm'>See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;