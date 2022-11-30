import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import Navber from '../../Shared/Navber';

const DashboardLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashboard">My Booking</Link></li>
                        <>
                            <li><Link to="/dashboard/seller">Sellers</Link></li>
                            <li><Link to="/dashboard/bayer">Bayers</Link></li>
                            <li><Link to="/dashboard/myproducts">My Products</Link></li>
                            <li><Link to="/dashboard/manageproducts">Manage Products</Link></li>
                        </>


                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;