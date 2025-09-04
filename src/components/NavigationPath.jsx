import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavigationPath = ({title}) => {
    const navigate = useNavigate()

  return (
    <div>
        <h1 className='text-lg font-semibold'><span className='cursor-pointer' onClick={()=>navigate('/')}>Home/</span> <span className='cursor-pointer' onClick={()=>navigate('/product')}>Products/</span> <span>{title}</span></h1>
    </div>
  )
}

export default NavigationPath