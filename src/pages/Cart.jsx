import React from 'react'
import { getCart } from '../context/CartContext'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { CiMoneyCheck1 } from "react-icons/ci";
import { useUser } from '@clerk/clerk-react';
import empty_cart from '../assets/empty-cart.png'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate  = useNavigate()
  const { cartItems, UpdateQuantity, handleDeleteItem } = getCart()
  const { user } = useUser()
  // console.log(user)
  const totalPrice = cartItems.reduce((total, currentItem) => total + currentItem.price, 0)
  // console.log(cartItems)

  return (
    <div>
      {cartItems.length > 0 ? (
        <div className="container py-5">
          <h2 className='text-lg font-semibold'>My Cart ({cartItems.length})</h2>

          {/* cart items  */}
          <div className="container cartItems-data mt-5 space-y-2">
            {cartItems.map((item) => (
              <div key={item.id} className='flex justify-between items-center  '>
                <div className="item-info flex items-center gap-3">
                  <div className=" min-w-16 h-16">
                    <img className='h-full w-full object-cover' src={item.image} alt="" />
                  </div>
                  <div>
                    <h4 className='max-w-[70%]'>{item.title}</h4>
                    <h5 className='text-btnColor font-medium'>${item.price}</h5>
                  </div>
                </div>

                <div className="item-action flex items-center gap-5">
                  <div className="btns-con bg-btnColor p-2 text-white flex justify-center space-x-3 rounded-sm">
                    <button onClick={() => UpdateQuantity(cartItems, item.id, 'decrease')}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => UpdateQuantity(cartItems, item.id, 'increase')}>+</button>
                  </div>
                  <RiDeleteBin6Line onClick={() => handleDeleteItem(item.id)} className='text-2xl text-btnColor' />
                </div>
              </div>
            ))}
          </div>

          <div className="container more-details grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {/* form div */}
            <div className="form-div px-3 py-5 shadow shadow-[#00000069] h-max">
              <h2 className='text-lg font-semibold mb-3'>Delivery Info</h2>
              <form className='space-y-3'>
                <div>
                  <label htmlFor="">Full Name</label>
                  <input className='px-2 py-1 rounded-sm w-full shadow shadow-[#00000069]' type="text" />
                </div>
                <div>
                  <label htmlFor="">Address</label>
                  <input className='px-2 py-1 rounded-sm w-full shadow shadow-[#00000069]' type="text" />
                </div>

                <div className='flex-col flex md:flex-row gap-5'>
                  <div>
                    <label htmlFor="">State</label>
                    <input className='px-2 py-1 rounded-sm w-full shadow shadow-[#00000069]' type="text" />
                  </div>
                  <div>
                    <label htmlFor="">PostCode</label>
                    <input className='px-2 py-1 rounded-sm w-full shadow shadow-[#00000069]' type="text" />
                  </div>
                </div>

                <div className='flex-col flex md:flex-row gap-5'>
                  <div>
                    <label htmlFor="">Country</label>
                    <input className='px-2 py-1 rounded-sm w-full shadow shadow-[#00000069]' type="text" />
                  </div>
                  <div>
                    <label htmlFor="">phone No</label>
                    <input className='px-2 py-1 rounded-sm w-full shadow shadow-[#00000069]' type="phone" />
                  </div>
                </div>

                <button className='bg-btnColor px-3 py-1 !mt-3 rounded-sm text-white '>Submit</button>
              </form>
            </div>

            {/* bills div  */}
            <div className="bills-div px-3 py-5 shadow shadow-[#00000069] h-max">
              <h2 className='text-lg font-semibold mb-3'>Bill Details</h2>
              <form className='space-y-3'>

                <div className='flex justify-between gap-1 items-center'>
                  <p className='flex items-center gap-2'>
                    <MdProductionQuantityLimits />
                    items Total
                  </p>
                  <h5>${totalPrice}</h5>
                </div>

                <div className='flex justify-between gap-1 items-center'>
                  <p className='flex items-center gap-2'>
                    <MdOutlineDeliveryDining />
                    Delivery Charge
                  </p>
                  <h5 className='space-x-1'><span className='line-through'>$10</span><span className='text-btnColor'>Free</span></h5>
                </div>

                <div className='flex justify-between gap-1 items-center'>
                  <p className='flex items-center gap-2'>
                    <CiMoneyCheck1 />
                    Handling Charge
                  </p>
                  <h5>$5</h5>
                </div>

                <div className='flex justify-between gap-1 items-center '>
                  <p className='text-lg font-semibold'>
                    Grand Total
                  </p>
                  <h5 className='text-lg font-semibold'>${totalPrice + 5}</h5>
                </div>

                <div className='flex justify-between gap-1 items-center shadow shadow-[#00000070]'>
                  <input className='px-3 py-1 rounded-sm w-full ' type="text" placeholder='Enter Code' />
                  <button className='px-2 py-1 bg-slate-200'>Apply</button>
                </div>

                <button className='bg-btnColor px-3 py-1  rounded-sm w-full text-white'>Proceed to checkout</button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="container min-h-[calc(100vh-58px)] flex justify-center items-center py-5">
          <div className='h-[calc(100vh-98px)] flex justify-center text-center flex-col'>
            <h1 className='text-4xl font-bold text-btnColor text-center'>Oh no! Your cart is empty</h1>
            <img className='h-[80%]' src={empty_cart} alt="" />
            <div>
              <button onClick={() => navigate('/product')} className='bg-btnColor px-3 py-1 rounded-sm text-white'>Continue Shoppping</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart