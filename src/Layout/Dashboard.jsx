import React from 'react';
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaListAlt, FaSearch, FaShoppingBag, FaShoppingCart, FaUser, FaUtensils, FaVoicemail } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import UseAdmin from '../hooks/UseAdmin';

const Dashboard = () => {
    const [isAdmin] = UseAdmin();

    return (
        <div className='flex '>
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addItems'><FaUtensils></FaUtensils> Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageItems'><FaListAlt></FaListAlt> Manage List</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageBookings'><FaBook></FaBook> Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'><FaUser></FaUser> All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/paymentHistory'><FaCalendar></FaCalendar> Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart> My Cart</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/review'><FaAd></FaAd> Add Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/bookings'><FaList></FaList> My Bookings</NavLink>
                                </li>
                            </>
                    }
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'><FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'><FaSearch></FaSearch> Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'><FaShoppingBag></FaShoppingBag> Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'><FaEnvelope></FaEnvelope> Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1 p-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;