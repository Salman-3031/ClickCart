import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import loading from '../assets/Loading4.webm'
import ProductListView from '../components/ProductListView'

const CategoryProduct = () => {
    const [searchData, setsearchData] = useState([])
    const navigate = useNavigate()
    const params = useParams()
    const { category } = params
    // console.log(category)

    const getFilterData = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.in/api/products/category?type=${category}`)
            const data = res.data.products
            //  console.log(res.data.products)
            setsearchData(data)

        } catch (error) {
            console.log(error)
        }

    }
            console.log(searchData)

    useEffect(() => {
        getFilterData()
    }, [])

    return (
        <div>
            <div className="container  min-h-[calc(100vh-58px)] py-5">
                {searchData.length > 0 ? (
                    <div className=' space-y-5'>
                        <button onClick={()=>navigate('/')} className='px-3 py-1 rounded-sm bg-black text-white'> &lt; Back</button>
                        {searchData.map((categoryData)=>(
                            <ProductListView key={categoryData.id} categoryData={categoryData}/>
                        ))}
                    </div>
                ) : (
                    <div className='container flex justify-center items-center '>
                        <video muted loop autoPlay>
                            <source src={loading} type='video/webm' />
                        </video>
                    </div>
                )}

            </div>
        </div>
    )
}

export default CategoryProduct