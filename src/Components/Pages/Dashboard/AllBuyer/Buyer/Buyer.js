import React from 'react';
import { BsTrash } from 'react-icons/bs';

const Buyer = ({buyer, refetch}) => {
    const {_id,imgURL, name, email} = buyer;
    const handleDelete = (id) => {
        fetch(`https://assignment-12-server-mdfaysal22.vercel.app/users/${id}`, {
        method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            refetch();
        })
    }
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center border-t-2 border-b-2 py-2">


                <div className='flex justify-start items-center gap-3'>
                    <img className="object-cover w-12 h-12 rounded-full" src={imgURL} alt="" />




                    <div>

                        <h3 className="text-xl leading-none tracking-tighter text-secondary">{name}</h3>
                        <h3 className='text-secondary'>{email}</h3>



                    </div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <button onClick={() => handleDelete(_id)} className='btn btn-primary btn-sm'><BsTrash></BsTrash></button>
                </div>

            </div>
        </div>
    );
};

export default Buyer;