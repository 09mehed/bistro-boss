import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';
import UseAdmin from '../../../hooks/UseAdmin';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const [cart] = useCart()
    const [isAdmin] = UseAdmin()

    const handleLogout = () => {
        logout()
            .then(res => {
                console.log(res);
            })
    }

    const links = <>
        <NavLink to='/' className='px-2 uppercase text-xl'>Home</NavLink>
        <NavLink to='/secret' className='px-2 uppercase text-xl'>Secret</NavLink>
        <NavLink to='/menu' className='px-2 uppercase text-xl'>Our Menu</NavLink>
        <NavLink to='/order/salad' className='px-2 uppercase text-xl'>Our Shop</NavLink>
        {
            user && isAdmin && <NavLink to='/dashboard/adminHome' className='px-2 uppercase text-xl'>Our Menu</NavLink>
        }
        {
            user && !isAdmin && <NavLink to='/dashboard/userHome' className='px-2 uppercase text-xl'>Our Menu</NavLink>
        }
        <NavLink to='/dashboard/cart'>
            <button className="btn">
                <FaShoppingCart className='text-xl'></FaShoppingCart>
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </NavLink>
        {
            user ? <>
                <button onClick={handleLogout} className='btn btn-ghost'>Logout</button>
            </> :
                <>
                    <NavLink to='/login' className='px-2 uppercase text-xl'>Login</NavLink>
                </>
        }

    </>

    return (
        <>
            <div className="navbar items-center fixed z-10 bg-opacity-30 bg-black text-white max-w-6xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;