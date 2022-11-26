import React from 'react';

const ProductCard = ({ product }) => {
    const {PostDate, ProductName, description, quality, OriginalPrice, ResellingPrice, productImg } = product;
    const handleAds = () => {
        fetch(`http://localhost:5000/advertising`, {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body:JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }
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

                        <div className='text-center mt-5'><button onClick={handleAds} className='btn btn-wide btn-primary btn-sm'>Advertising</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;