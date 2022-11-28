import React from 'react';
import { BsTrash } from 'react-icons/bs';

const ReportedCard = ({reportedItems, refetch}) => {
    const { _id,status, ProductName, ResellingPrice, productImg } = reportedItems;
    const handleDelete = (id) => {
        fetch(`https://assignment-12-server-mdfaysal22.vercel.app/advertising/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            fetch(`https://assignment-12-server-mdfaysal22.vercel.app/products/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                refetch()
            })
        })
    }
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center border-t-2 border-b-2 py-2">


                <div className='flex justify-start gap-3'>
                    <img className=" w-20 h-20 rounded-lg" src={productImg} alt="" />




                    <div>

                        <h3 className="text-xl leading-none tracking-tighter text-secondary">{ProductName}</h3>
                        <h3 className='text-secondary'>Price :$<span className='semibold '> {ResellingPrice}</span></h3>
                        <h4 className='text-secondary'>Status : {status}</h4>


                    </div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <button onClick={() => handleDelete(_id)} className='btn btn-primary btn-sm'><BsTrash></BsTrash></button>
                </div>

            </div>
        </div>
    );
};

export default ReportedCard;