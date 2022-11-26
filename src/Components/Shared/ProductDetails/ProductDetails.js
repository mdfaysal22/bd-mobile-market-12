import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    // const {PostDate,_id, ProductName, description, quality, OriginalPrice, ResellingPrice, productImg } = 
    const data = useLoaderData();
    const {BrandName,OriginalPrice,PostDate,ProductName,ResellingPrice,description,email, location, name, productImg, quality, usedYear, _id} = data[0];
    return (
        <div>
            
        </div>
    );
};

export default ProductDetails;