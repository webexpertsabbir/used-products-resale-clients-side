import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvide';
import useAdmin from '../../../Hooks/useAdmin';
import useSaller from '../../../Hooks/UseSaller';
import Footer from '../../Shared/Footer';
import Navber from '../../Shared/Navber';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSaller] = useSaller(user?.email)

    return (
        <div className='max-w-[1280px] mx-auto'>
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

                            {
                                isAdmin ? <>
                                    <li><Link to="/dashboard/seller">Sellers</Link></li>
                                    <li><Link to="/dashboard/bayer">Bayers</Link></li>
                                </>
                                    :

                                    isSaller ? <>
                                        <li><Link to="/dashboard/addproducts">Add Products</Link></li>
                                        <li><Link to="/dashboard/myproducts">My Products</Link></li>
                                    </>
                                        :
                                        <li><Link to="/dashboard">My Booking</Link></li>
                                // <li><Link to="/dashboard">My Booking</Link></li>

                            }


                        </ul>

                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default DashboardLayout;