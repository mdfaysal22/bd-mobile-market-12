import React from 'react';
import useTitle from '../../Hooks/useTitle';
import AdsProduct from './AdsProduct/AdsProduct';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import OurTrasted from './OurTrasted/OurTrasted';
import Talk from './Talk/Talk';
import Delivery from './Delivery/Delivery';
import AboutUs from './AboutUs/AboutUs';
import Features from './Features/Features';
import GetInTouch from './GetInTouch/GetInTouch';
import Discount from './Discount/Discount';

const Home = () => {
    useTitle("Home")
    return (
        <div className=' px-4 md:px-8 mx-auto'>
            <Discount/>
            <Banner/>
            <Categories/>
            <AdsProduct/>
            <Talk/>
            <AboutUs/>
            <GetInTouch/>
            <Features/>
            <Delivery/>
            <OurTrasted/>
        </div>
    );
};

export default Home;