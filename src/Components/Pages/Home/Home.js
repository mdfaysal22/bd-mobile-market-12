import React from 'react';
import AdsProduct from './AdsProduct/AdsProduct';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div className=' px-4 md:px-8 mx-auto'>
            <Banner></Banner>
            <Categories></Categories>
            <AdsProduct></AdsProduct>
            
        </div>
    );
};

export default Home;