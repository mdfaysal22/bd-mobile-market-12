import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ModalBody from '../../../../Shared/ModalBody/ModalBody';
import CategoryCard from './CategoryCard/CategoryCard';

const Category = () => {
    const [productData, SetProductData] = useState(null);
    const products = useLoaderData();

    
    return (
        <div className='mx-10 my-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 '>
            {
                products.map(caregoryProduct => <CategoryCard SetProductData={SetProductData} key={caregoryProduct._id} caregoryProduct={caregoryProduct}></CategoryCard>)
            }
            </div>
            {productData && <ModalBody productData={productData} SetProductData={SetProductData}></ModalBody>}
        </div>
    );
};

export default Category;