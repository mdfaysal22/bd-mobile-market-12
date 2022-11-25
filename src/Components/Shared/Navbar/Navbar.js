import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { userAuth } from '../../../Contexts/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
    const [state, setState] = useState(false)
    const { user, signOutSystem } = useContext(userAuth);
    console.log(user);
    const navigation = [
        { title: "Home", path: "/home" },
        { title: "Shop", path: "/main" },
        { title: "Blog", path: "/blog" },
        { title: "Dashboard", path: "/shop" }
    ]
    const handleSignOut = () => {
        signOutSystem()
            .then(result => {
                toast.success(`Successfully Sign Out ${user?.displayName}`);
            })
            .catch(() => { })
    }
    return (
        <nav className="bg-white w-full shadow-sm border-b md:border-0 md:static">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link to={'/'}>
                        <h1 className='text-black text-2xl '>BD Mobile Market</h1>
                    </Link>
                    <div className="md:hidden">
                        <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>

                    <ul className="justify-center  items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-secondary hover:text-primary">
                                        <NavLink className={({ isActive }) =>
                                            isActive ? "text-primary" : undefined
                                        } to={item.path}>
                                            {item.title}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }

                    </ul>
                    <div>
                        <ul className="flex mt-6 flex-col-reverse md:hidden space-x-0 lg:space-x-6 lg:flex-row">
                            {user?.uid ?
                                <div className='flex justify-between items-center'>
                                    <div className='flex justify-start items-center gap-3'>
                                        <div className="avatar placeholder">
                                            <div className="bg-neutral-focus text-neutral-content rounded-full w-14">
                                                <img src={user?.photoURL} alt="" />
                                            </div>
                                        </div>
                                        <div className='text-secondary'>
                                            <h2>{user?.displayName}</h2>
                                            <h4>{user?.email}</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={handleSignOut} className='btn rounded-none btn-primary btn-sm'>LogOut</button>
                                    </div>
                                </div>
                                :
                                <li className="mt-8 lg:mt-0">
                                    <Link to="/signup" className="btn btn-primary text-center text-white rounded-none w-full">
                                        Sign In
                                    </Link>
                                </li>
                            }
                        </ul>
                    </div>


                </div>
                <div className="hidden md:inline-block">
                    {user?.uid ?
                        <div className='flex justify-start items-center gap-3'>
                            <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                                    <img src={user?.photoURL} alt="" />
                                </div>
                            </div>

                            <div>
                                <button onClick={handleSignOut} className='btn rounded-none btn-primary btn-sm'>LogOut</button>
                            </div>
                        </div>
                        : <Link to="/signup" className="btn btn-primary text-white rounded-none ">
                            Sign In
                        </Link>}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;