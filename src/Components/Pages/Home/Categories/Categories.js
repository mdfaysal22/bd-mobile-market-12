import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillApple} from 'react-icons/ai'
import {SiSamsung, SiNokia} from 'react-icons/si'

const Categories = () => {
    const categories = [
        {
            id: "01",
            Name: "Apple",
            categoryId: "Apple",
            logo: <AiFillApple></AiFillApple>

        },
        {
            id: "02",
            Name: "Samsung",
            categoryId: "Samsung",
            logo: <SiSamsung></SiSamsung>
        },
        {
            id: "03",
            Name: "Nokia",
            categoryId: "Nokia",
            logo: <SiNokia></SiNokia>
        }
    ]
    return (
        <div className='text-center'>
            <div>
            <h1 className='text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400'>Product Categories</h1>
        </div>
        <div className='mt-5 flex flex-col md:flex-row justify-center gap-5 items-center'>
            
            {categories.map(category => <Link className='bg-black rounded-lg' key={category.id} to={`/${category.categoryId}`}>
                <div className="flex flex-col justify-center text-white p-5 items-center cursor-pointer">

                    <div>
                        <span className='text-9xl'>{category.logo}</span>
                    </div>
                    
                </div>

            </Link>)}
        </div>
        </div>
    );
};

export default Categories;