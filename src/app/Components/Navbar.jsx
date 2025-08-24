import Link from 'next/link'
import React from 'react'
import { CiLogin } from "react-icons/ci";

export default function
    () {
    return (
        // <div>
        //     <nav className='flex justify-center'>
        //         <ul className='flex justify-between w-1/2'>
        //         <Link href='/'>
        //             <li>Home</li>
        //         </Link>
        //         <Link href='/services'>
        //             <li>Services</li>
        //         </Link>
        //         <Link href='/about'>
        //             <li>About</li>
        //         </Link>
        //         </ul>
        //     </nav>
        // </div>
        <div className="navbar max-w-10/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Link href='/'>
                            <li className='text-white'><a>Home</a></li>
                        </Link>
                        <li className='text-white'><a>Product List</a></li>
                        <li className='text-white'><a>About</a></li>
                        {/* <li>
                            <a>
                                <div className="navbar-end flex lg:gap-2 lg:text-xl">
                                    <p><CiLogin /></p>
                                    <a className="">Login</a>
                                </div>
                            </a>
                        </li> */}
                    </ul>
                </div>
                <a className="text-white">ToolsStation</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link href='/'>
                        <li className='text-white'><a>Home</a></li>
                    </Link>
                    <Link href='/services'>
                        <li className='text-white'><a>ProductList</a></li>
                    </Link>
                    <Link href='/about'>
                        <li className='text-white'><a>About</a></li>
                    </Link>
                </ul>
            </div>
            <div className='navbar-end'>
                <Link href='/register'>
                    <div className="navbar-end flex gap-1 ">
                        <p className='text-white'><CiLogin /></p>
                        <a className='text-white'>Login</a>
                    </div>
                </Link>
            </div>
        </div>
    )
}
