import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { useNavigate} from 'react-router-dom'

const ProductCard = ({product}) => {
  const navigate = useNavigate()

  const goToSingleProduct = (id) =>{
    navigate(`/product/${id}`)
  }
  
    // console.log(product)
  return (
    <div className='px-3 py-3 h-max shadow shadow-[#0000005d] hover:scale-[1.02] transition-all duration-300 space-y-2' >
        <div className="img h-52 w-full bg-gray-100" onClick={()=>goToSingleProduct(product.id)}>
            <img className='h-full w-full object-cover' src={product.image} alt={product.title} />
        </div>
        <div className="info space-y-1">
            <h4 className='line-clamp-2'>{product.title}</h4>
            <h5 className='font-semibold'>${product.price}</h5>
            <button className='bg-btnColor text-white flex gap-1 items-center px-2 py-1 w-full justify-center rounded-sm'><GiShoppingCart/> Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard