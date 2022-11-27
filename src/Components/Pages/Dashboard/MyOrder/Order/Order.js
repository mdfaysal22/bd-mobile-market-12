import React from 'react';

const Order = ({order}) => {
    const {productImg, MeetingLocation, ProductName,ResellingPrice, SellerName,SellerPhone} = order;
    return (
        <div>
            <div className="flex flex-row justify-between items-center border-t-2 border-b-2 py-2">


                <div className='flex justify-start items-center gap-3'>
                    <img className="object-cover w-20 h-20 rounded-sm" src={productImg} alt="" />




                    <div>
                        <h3 className="font-semibold text-secondary">{ProductName}</h3>
                        <h3 className='text-secondary'>Price: {ResellingPrice}</h3>
                        <p>Meeting Location {MeetingLocation}</p>
                        <p>Seller Name: {SellerName}</p>
                        <p>Seller Contact: {SellerPhone}</p>

                    </div>
                </div>
                <div>
                    <button className='btn btn-primary btn-sm '>Pay</button>
                </div>

            </div>
        </div>
    );
};

export default Order;