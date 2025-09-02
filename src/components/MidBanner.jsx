import React from 'react'
// import banner from '../assets/banner1.jpg'

const MidBanner = () => {
  return (
    <section className='banner-section'>
        {/* <div className="container bg-[url('../Images/banner1.jpg')] h-52"> */}
        <div className="container bg-red-500 bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('../Images/banner1.jpg')] h-52 my-20 flex text-white justify-center items-center min-h-96 bg-cover bg-center rounded-sm bg-fixed">
            <div className="content text-center space-y-3">
                <h3 className='text-4xl font-semibold'>Next-Gen Electronics at your Fingertips</h3>
                <p>Discover the latest tech innovations with unbeatbale prices and free shipping on all orders</p>
                 <button className="bg-gradient-to-r from-btnColor to-btnRight px-3 py-1 rounded-sm ">Shop Now</button>
            </div>
        </div>
    </section>
  )
}

export default MidBanner