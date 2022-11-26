import React from 'react';
import toast from 'react-hot-toast';
import {BsTrash} from 'react-icons/bs'

const ProductCard = ({ product, refetch }) => {
    const { _id,PostDate,status, ProductName, description, quality, OriginalPrice, ResellingPrice, productImg } = product;
    const handleAds = () => {
        fetch(`http://localhost:5000/advertising`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Ads Section Added Successfully");
                
            });
    }
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/advertising/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => console.log(data))

        fetch(`http://localhost:5000/products/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            refetch()
        })

    }
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center border-t-2 border-b-2 py-2">


                <div className='flex justify-start gap-3'>
                    <img className="object-cover w-20 h-20 rounded-lg" src={productImg} alt="" />




                    <div>

                        <h3 className="text-xl leading-none tracking-tighter text-secondary">{ProductName}</h3>
                        <h3 className='text-secondary'>Price :$<span className='semibold '> {ResellingPrice}</span></h3>
                        <h4 className='text-secondary'>Status : {status}</h4>


                    </div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    {status === "unsold"  && <button onClick={handleAds} className='btn bg-green-700 hover:bg-green-900 btn-sm'>Ads</button>}
                    <button onClick={() => handleDelete(_id)} className='btn btn-primary btn-sm'><BsTrash></BsTrash></button>
                </div>

            </div>

        </div>
    );
};

export default ProductCard;