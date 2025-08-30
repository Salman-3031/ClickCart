import React from 'react'
import { data, Link, NavLink } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";

const navLinks = [
    { id: 1, link: '/', linkName: 'Home' },
    { id: 2, link: '/product', linkName: 'Product' },
    { id: 3, link: '/about', linkName: 'About' },
    { id: 4, link: '/contact', linkName: 'Contact' },
]

const Navbar = () => {
    const location = false
    return (
        <header className='bg-white py-3 shadow-2xl'>
            <div className='container bg-red-200 flex justify-between items-center'>

                <div className="nav-left flex gap-5 items-center">
                    <div className="logo">
                        <Link className='text-2xl font-semibold'><h1><span className='text-btnColor font-serif'>C</span>lick<span className='text-btnColor font-serif'>C</span>art</h1></Link>
                    </div>
                    <div className="location flex items-center gap-1">
                        <CiLocationOn className='text-btnColor text-xl' />
                        <h4 className='text-paraColor font-medium'>{location ? <div></div> : 'Add Address'}</h4>
                        <IoMdArrowDropdown className='text-xl' />
                    </div>
                </div>

                <nav className='flex items-center gap-5'>
                    <ul className="flex items-center gap-5">
                        {navLinks.map((data) => (
                            <NavLink to={data.link} key={data.id} className={({ isActive }) => `${isActive ? 'border-b-2 transition-all border-b-btnColor text-btnColor':' text-black opacity-60'}`}><li>{data.linkName}</li></NavLink>
                        ))}
                    </ul>
                    <Link to={'cart'} className='border relative'>
                    <GiShoppingCart className='text-xl'/>
                    <span className='absolute flex justify-center items-center -top-[5px] -right-[8px] bg-btnColor rounded-full p-[8px] h-4 w-4 text-center align-baseline text-white font-semibold text-[10px]'>10</span>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar


{/* <NavLink to={'/'} className={({isActive})=>`${isActive ? 'border-b-2 transition-all border-b-btnColor':'text-black opacity-70'} cursor-pointer`}><li>Home</li></NavLink>
                    <NavLink to={'/product'} className={({isActive})=>`${isActive ? 'border-b-2 transition-all border-b-btnColor':'text-black opacity-70'} cursor-pointer`}><li>Products</li></NavLink>
                    <NavLink to={'/about'} className={({isActive})=>`${isActive ? 'border-b-2 transition-all border-b-btnColor':'text-black opacity-70'} cursor-pointer`}><li>About</li></NavLink>
                    <NavLink to={'/contact'} className={({isActive})=>`${isActive ? 'border-b-2 transition-all border-b-btnColor':'text-black opacity-70'} cursor-pointer`}><li>Contact</li></NavLink> */}