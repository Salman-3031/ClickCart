import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import loading from '../assets/Loading4.webm'
import NavigationPath from './NavigationPath'
import { GiShoppingCart } from "react-icons/gi";




const SingleProduct = () => {
    const [singleProduct, setSingleProduct] = useState()
    const params = useParams()
    // console.log(params)

    const getSingelProduct = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.in/api/products/${params.id}`)
            console.log(res.data.product)
            const product = res.data.product
            setSingleProduct(product)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getSingelProduct()
    }, [])

    // const originalPrice = Math.round(SingleProduct.price + (getSingelProduct.price * singleProduct.discount /100))
    // or 
    const originalPrice = Math.round(singleProduct?.price / (1 - singleProduct?.discount / 100))

    return (
        <div className=' min-h-[calc(100vh-58px)] h-[calc(100vh-58px)]'>
            <div className="container h-full bg-red-400 py-5">
                {singleProduct ? (
                    <div className='bg-red-300 h-full'>
                        <NavigationPath title={singleProduct.title} />
                        <div className="product-details mt-5 grid grid-cols-1 sm:grid-cols-2 gap-10 h-full">
                            <div className="product-img h-96 overflow-hidden">
                                <img className='h-full w-auto bg-cover' src={singleProduct.image} alt="" />
                            </div>

                            <div className="info space-y-3">
                                <h3 className='text-lg font-semibold'>{singleProduct.title}</h3>
                                <h5 className='text-sm text-gray-800 tracking-wide'>{singleProduct.brand}/{singleProduct.category}/{singleProduct.model}</h5>
                                <p className='space-x-1'><span className='text-btnColor'>${singleProduct.price} </span><span>${originalPrice}</span> <span className='text-white px-2 py-1 bg-btnColor rounded-sm'>{singleProduct.discount}% dicount</span></p>
                                <p className='text-gray-800'>{singleProduct.description} lorem20</p>
                                <div className="quantity">
                                    <label htmlFor="quantity">Quantity: </label>
                                    <input type="number" min={1} className='shadow shadow-[#0000005e] rounded-sm px-2 py-1 w-20' placeholder='1' />
                                </div>
                                <button className='bg-btnColor w-max text-white flex gap-1 items-center px-2 py-1 w-full justify-center rounded-sm'><GiShoppingCart/> Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex justify-center items-center min-h-[calc(100vh-78px)]'>
                        <video muted loop autoPlay>
                            <source src={loading} type='video/webm' />
                        </video>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SingleProduct