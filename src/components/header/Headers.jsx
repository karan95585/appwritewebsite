import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import image2 from '../../Images/logo.jpg'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LogoutBtn from '../Logout/LogoutBtn'


function Header() {


    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

   

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={image2}
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    {/* <div className="flex items-center lg:order-2">
                        <li>
                        <NavLink
                            to="/login"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </NavLink>
                        </li>
                        
                        
                    </div> */}
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to="home"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/aboutUs"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    contact
                                </NavLink>
                            </li>
                            {!authStatus && (<li>
                                <NavLink to="/login"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    login
                                </NavLink>
                            </li>
                            )}
                            {!authStatus && (<li>
                                <NavLink to="/signup"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    signup
                                </NavLink>
                            </li>
                            )}

                            {authStatus && (
                                <li>
                                    <LogoutBtn />
                                </li>
                            )}



                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
