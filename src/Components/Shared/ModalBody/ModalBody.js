import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { userAuth } from '../../../Contexts/AuthContext';

const ModalBody = ({ productData, refetch, SetProductData }) => {
    const {  _id, ProductName,  email, name, PhoneNumber,  location,  ResellingPrice, productImg } = productData;
    const { user } = useContext(userAuth);


    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const order = {
            ProductName,
            productImg,
            SellerName: name,
            SellerPhone: PhoneNumber,
            SellerEmail: email,
            ResellingPrice,
            BuyerName: user?.displayName,
            BuyerEmail: user?.email,
            BuyerPhone: form.BuyerPhone.value,
            MeetingLocation: form.location.value
        }
        fetch('https://assignment-12-server-mdfaysal22.vercel.app/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                fetch(`https://assignment-12-server-mdfaysal22.vercel.app/advertising/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        fetch(`https://assignment-12-server-mdfaysal22.vercel.app/products/${_id}`, {
                        method: "PUT"
                    })
                        .then(res => res.json())
                        .then(data => {
                            refetch();
                            form.reset();
                            SetProductData(null)
                            toast.success("Order Successfully Done.")
                        });
                    })
                    
            });
    }
    return (
        <div>
            {/* The button to open modal */}

            <input type="checkbox" id="Product-connector" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box text-secondary relative">
                    <label htmlFor="Product-connector" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleOrder}>
                        <h3 className="text-lg font-bold">Product's Information</h3>
                        <p className='font-semibold'>Product Name: {ProductName}</p>
                        <p className="pb-4">Product Price: Tk{ResellingPrice}</p>
                        <h3 className='text-lg font-bold'>Seller Information</h3>
                        <p>Seller Name: {name}</p>
                        <p>Seller Email: {email}</p>
                        <p>Seller Contact Number: {PhoneNumber}</p>
                        <p>Seller Location: {location}</p>
                        <p className='font-bold text-xl mt-4'>My Information</p>
                        <p>Name: {user?.displayName}</p>
                        <p>Email: {user?.email}</p>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-secondary">Phone Number</span>
                            </label>
                            <input type="number" required name='BuyerPhone' placeholder="Phone Number" className="input text-black input-bordered w-full" />

                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-secondary">Meeting Location</span>
                            </label>
                            <input type="text" required name='location' placeholder="Meeting Location" className="input text-black input-bordered w-full" />

                        </div>

                        <button className='btn btn-primary w-full my-3'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalBody;