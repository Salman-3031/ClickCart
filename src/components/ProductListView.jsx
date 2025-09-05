import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getCart } from '../context/CartContext'
import { GiShoppingCart } from "react-icons/gi";

const ProductListView = ({categoryData}) => {
    const navigate = useNavigate()
    const {addToCart} = getCart()
  return (
    <div className='p-3 shadow shadow-[#0000004a] flex-col flex  sm:flex-row gap-10 items-center'>
        <div className='max-w-52 w-full aspect-square'>
            <img
            //  onClick={()=>navigate(`/product/${categoryData.id}`)}
              className='w-full h-full object-cover ' src={categoryData.image} alt={categoryData.title} />
        </div>
        <div className='space-y-1 w-full'>
            <h2 className='text-xl font-semibold'>{categoryData.title}</h2>
            <p className=''><span className='align-super'>$</span><span className='text-2xl font-medium'>{categoryData.price}</span> <span className='align-super'>({categoryData.discount}% off)</span></p>
            <p>Free delivery Fri, 18 Apr <br />
            Or fastest delivery Tomorrow, 17 Apr</p>
             <button onClick={()=>addToCart(categoryData)} className='bg-btnColor w-max text-white flex gap-1 items-center px-2 py-1 justify-center rounded-sm !mt-2'><GiShoppingCart/> Add to Cart</button>
        </div>
        
    </div>
  )
}

export default ProductListView