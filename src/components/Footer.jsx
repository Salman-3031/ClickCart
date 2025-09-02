import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white'>
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
            <div className='footer1'>
                {/* <h2>ClickCart</h2> */}
                 <Link className='text-2xl font-semibold'><h1><span className='text-btnColor font-serif'>C</span>lick<span className='text-btnColor font-serif'>C</span>art</h1></Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus mollitia voluptatum unde</p>
            </div>

              <div className='footer2'>
                <h2 className='text-xl font-semibold'>Customer Service</h2>
              <ul>
                <li>Conatct us</li>
                <li>Conatct us</li>
                <li>Conatct us</li>
                <li>Conatct us</li>
                <li>Conatct us</li>
              </ul>
            </div>

              <div className='footer3'>
                <h2 className='text-xl font-semibold'>Follow Us</h2>
               <div className='flex gap-2'>
                <CiFacebook/>
                <CiTwitter/>
                <FaInstagram/>
               </div>
            </div>

             <div className='footer4 '>
                <h2 className='text-xl font-semibold'>Stay in the Loop</h2>
                <p className='text-sm'>Subscribe to get special offers, free giveaways and more.</p>
               <div className='flex border justify-between w-full mt-2'>
                <input className='px-3 py-1 outline-none border-none text-black flex-1' type="email" placeholder='email'  />
                <button className=' bg-btnColor border-none text-sm flex-1'>Subscribe</button>
               </div>
            </div>

        </div>
        <div className="lower container py-3">
            <div className='w-full h-px bg-slate-400'></div>
            <h2 className='text-center text-gray-200 pt-2 pb-1'>copyright all rights reserved</h2>
        </div>
    </div>
  )
}

export default Footer