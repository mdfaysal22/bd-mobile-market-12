import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { userAuth } from '../../../../../Contexts/AuthContext';
import ModalBody from '../../../../Shared/ModalBody/ModalBody';
import CategoryCard from './CategoryCard/CategoryCard';

const Category = () => {
    const [productData, SetProductData] = useState(null);
    const products = useLoaderData();
    const {user} = useContext(userAuth);
    const currentUser = user?.email;
    
    return (
        <div className='mx-10 my-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 '>
            {
                products.map(caregoryProduct => <CategoryCard currentUser={currentUser} SetProductData={SetProductData} key={caregoryProduct._id} caregoryProduct={caregoryProduct}></CategoryCard>)
            }
            </div>
            {productData && <ModalBody productData={productData} SetProductData={SetProductData}></ModalBody>}
        </div>
    );
};

export default Category;