import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { userAuth } from '../Contexts/AuthContext';
import useTitle from '../Components/Hooks/useTitle';
import useBuyer from '../Components/Hooks/useBuyer';
import useSeller from '../Components/Hooks/useSeller';
import useAdmin from '../Components/Hooks/useAdmin';

const DashboardLayout = () => {
    const { user } = useContext(userAuth);
    const [isBuyer] = useBuyer(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)
    console.log(isBuyer);
    useTitle("Dashboard")
    const name = user?.displayName;
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <div className='flex md:hidden justify-start gap-5 my-5 ml-3 items-center'>
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden"><HiBars3BottomLeft></HiBars3BottomLeft></label>
                    <div>
                        <h1 className='text-xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400'>Welcome To {name}'s DashBoard</h1>
                    </div>

                </div>

                <div className='m-10'>
                    <Outlet></Outlet>
                </div>


            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
                <div className="menu p-4 w-80 bg-base-100 text-base-content">
                    <h1 className='text-2xl my-5 hidden md:block  font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400'>Welcome To {name}'s DashBoard</h1>
                    {/* <!-- Sidebar content here --> */}
                    <div className='flex flex-col gap-3'>
                        {isSeller &&
                            <>
                                <Link to="/dashboard/myproducts"><button className='btn btn-primary w-full'>My Product</button></Link>
                                <Link to='/dashboard/addproduct'><button className='btn btn-primary w-full'>Add Product</button></Link>
                            </>
                        }
                        {
                            isAdmin &&
                            <>
                                <Link to='/dashboard/allseller'><button className='btn btn-primary w-full'>All Seller</button></Link>
                                <Link to='/dashboard/allbuyer'><button className='btn btn-primary w-full'>All Buyer</button></Link>
                                <Link to='/dashboard/reporteditems'><button className='btn btn-primary w-full'>Reported Products</button></Link>
                            </>
                        }
                        {
                            isBuyer && <>
                                <Link to='/dashboard/myorders'><button className='btn btn-primary w-full'>My Orders</button></Link>
                            </>

                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashboardLayout;