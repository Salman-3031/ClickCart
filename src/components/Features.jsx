import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { IoMdRefresh } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
// import { IoTime } from 'react-icons/io5';

const featuresData = [
    {
        id: 1, logo: CiDeliveryTruck,
        title: 'Free Shipping', desc: 'On order over $100' 
    },
    {
        id: 2, logo: CiLock,
        title: 'Secure Payment', desc: 'On order over $100' 
    },
    {
        id: 3, logo: IoMdRefresh,
        title: 'Easy Returns', desc: 'On order over $100' 
    },
    {
        id: 4, logo: IoMdTime,
        title: '24/7 Support', desc: 'On order over $100' 
    },
]

const Features = () => {
  return (
    <section className='features-section pb-10'>
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {featuresData.map((item)=>(
                <div key={item.id} className='flex gap-5 items-center '>
                    <div className="logo">
                        <item.logo className='text-5xl'/>
                    </div>
                    <div>
                    <h2 className='text-xl font-medium'>{item.title}</h2>
                    <p>{item.desc}</p>
                    </div>
                </div>
            ))}

        </div>
    </section>
  )
}

export default Features