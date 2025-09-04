import React, { useEffect, useState } from 'react'
import Lottie from "lottie-react";
import { getData } from '../context/DataContext'
import loading from '../assets/Loading4.webm'
import FilterSection from '../components/FilterSection'
import ProductCard from '../components/ProductCard'
import Pagination from '../components/Pagination'
import notfound from '../assets/notfound.json'

const Products = () => {
  const { data, fetchingData } = getData()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [brand, setBrand] = useState('All')
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [page, setPage] = useState(1)
  // console.log(data)
  useEffect(() => {
    fetchingData()
    // window.scrollTo(0,0) //one way is this
  }, [])

  const filterData = data?.filter((product) => {
    const matchSearch = product.title.toLowerCase()
      .includes(search.toLowerCase())

    const matchCategory = category === 'All' || product.category === category

    const matchBrand =
      brand === 'All' ||
      product.brand === brand

    const matchPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

    return matchSearch && matchCategory && matchBrand && matchPrice
  })
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value
    setCategory(selectedCategory)
    // console.log(selectedCategory)
  }

  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value
    setBrand(selectedBrand)
    console.log(selectedBrand)
  }

  const resetFilters = () => {
    setSearch('')
    setCategory('All')
    setBrand('All')
    setPriceRange([0, 5000])
  }

  const pageHandler = (selectedPage) => {
    setPage(selectedPage)
  }
  const dynamicPage = Math.ceil(filterData?.length / 8)
  return (
    <div className='py-5 min-h-[calc(100vh-58px)]'>
      <div className="container">
        {data?.length > 0 ? (
          <div className='flex gap-8'>
            <FilterSection search={search} setSearch={setSearch} category={category} setCategory={setCategory} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} handleCategoryChange={handleCategoryChange} handleBrandChange={handleBrandChange} resetFilters={resetFilters} />

            {filterData?.length> 0 ? (
                 <div className='cardsBox'>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 '>
                {filterData?.slice(page * 8 - 8, page * 8).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
                <Pagination page={page} pageHandler={pageHandler} dynamicPage={dynamicPage} />

            </div>
            ):(
              <div className='flex justify-center items-center w-full h-[calc(100vh-78px)] overflow-hidden'>
                  <Lottie className='w-full h-full' animationData={notfound} loop={true} />
              </div>
            )}
         
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

export default Products