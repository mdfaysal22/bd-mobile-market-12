import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Navbar from '../Components/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-screen-xl	mx-auto'>
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Main;