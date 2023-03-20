import React from 'react';
import useTitle from '../../Hooks/useTitle';
import AdsProduct from './AdsProduct/AdsProduct';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import OurTrasted from './OurTrasted/OurTrasted';
import Talk from './Talk/Talk';

const Home = () => {
    useTitle("Home")
    return (
        <div className=' px-4 md:px-8 mx-auto'>
            <Banner></Banner>
            <Categories></Categories>
            <AdsProduct></AdsProduct>
            <Talk></Talk>
            <OurTrasted></OurTrasted>
        </div>
    );
};

export default Home;