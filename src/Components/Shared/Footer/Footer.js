import React from 'react';
import {GrFacebookOption} from 'react-icons/gr';
import {DiGithubAlt} from 'react-icons/di';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerNavs = [
        {
            to: '/',
            name: 'About'
        },
        {
            to: '/blog',
            name: 'Blog'
        },
        {
            to: '/',
            name: 'Suuport'
        }
    ]
    return (
        <footer className="text-gray-500 bg-red-50 px-4 py-5">
            <div className='max-w-screen-xl	mx-auto'>
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <h1 className='text-primary font-semibold text-4xl'>BD Mobile Market</h1>
                <p className="leading-relaxed mt-2 text-[15px]">
                    If your Buy or Sell a Used Product. You Are in the Right Place. Visit Our Effective Used Product Buying and Selling Website. We are Provide Free Advertising your Used Product. 
                </p>
            </div>
            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {
                    footerNavs.map((item, idx) => (
                        <li key={idx} className=" hover:text-primary">
                            <Link  to={item.to}>
                                { item.name }
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2022 BD Mobile Market All rights reserved.
                    <h1 className='font-semibold'>Design And Developed By <a href="https://www.facebook.com/mdfaysal.programmer" className='text-primary'>Md Faysal</a></h1>
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a  href="https://www.facebook.com/mdfaysal.programmer" rel='noreferrer' target="_blank">
                                <GrFacebookOption></GrFacebookOption>
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a target="_blank" rel='noreferrer' href="https://github.com/mdfaysal22">
                                <DiGithubAlt></DiGithubAlt>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx="true">{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
            </div>
        </footer>
    );
};

export default Footer;