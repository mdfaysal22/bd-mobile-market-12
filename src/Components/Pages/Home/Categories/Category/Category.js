import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard/CategoryCard';

const Category = () => {
    const products = useLoaderData();

    
    return (
        <div className='mx-10 my-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 '>
            {
                products.map(caregoryProduct => <CategoryCard key={caregoryProduct._id} caregoryProduct={caregoryProduct}></CategoryCard>)
            }
            </div>
        </div>
    );
};

export default Category;