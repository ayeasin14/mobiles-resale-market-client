import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaMobileAlt } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }


    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/category'>Category</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        {/* <li><Link to='/login'>Login</Link></li> */}
        {
            user?.uid ?
                <>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                </>
                :
                <li><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar bg-base-100 shadow-lg mb-6 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"> <FaMobileAlt className='text-2xl font-semibold text-primary' /> <span className='ml-3 text-2xl font-semibold text-primary'>ReSale</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>

            </div>
            <div className='navbar-end'>
                <div className=''>
                    {
                        user?.uid &&
                        <div className="flex justify-between">
                            <div className='mr-3 hidden md:flex'>
                                {
                                    user?.uid ? <p>Hi <span className="text-lg font-bold">{user.displayName}</span></p> : 'Welcome'
                                }

                            </div>
                            <div>
                                {
                                    user?.photoURL ? <img className="w-9 rounded-full" src={user.photoURL} alt="" /> : <FaUserCircle className='text-3xl' />
                                }
                            </div>
                            <button className='btn btn-warning btn-sm ml-3 text-white hover:text-gray-100 bg-gradient-to-r from-yellow-500 to-red-500 ' onClick={handleLogOut}>Sign Out</button>
                        </div>
                    }
                </div>
            </div>

        </div >
    );
};

export default Navbar;