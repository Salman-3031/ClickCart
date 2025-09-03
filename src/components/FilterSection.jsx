import React from 'react'
import { getData } from '../context/DataContext'

const FilterSection = ({search, setSearch, category, setCategory, brand, setBrand, priceRange, setPriceRange, handleCategoryChange, handleBrandChange, resetFilters}) => {
    const { categoryOnlyData, brandOnlyData } = getData()
    // console.log(categoryOnlyData)
    return (
        <div className='p-5 shadow shadow-[#0000005d] bg-gray-100 h-max max-w-[250px]  min-w-[150px] w-full'>
            <input 
            className='px-3 py-1 text-black outline-[1px] focus:outline-gray-400 border border-gray-400 rounded-sm w-full' 
            type="text" 
            placeholder='Search...'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />

            {/* search by categoryOnlyData  */}
            <div className="category">
                <h2 className='font-semibold text-xl mt-5'>Category</h2>
                <div className="flex flex-col gap-2 mt-2">
                    {categoryOnlyData?.map((item, index) => (
                        <div key={index} className='flex gap-2'>
                            <input
                             id={item} 
                            type='radio'
                             name='category'
                             value={item}
                            // value={category}
                             className='accent-btnColor'
                             checked={category === item}
                             onChange={handleCategoryChange}
                             />
                            <label htmlFor={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</label>
                        </div>
                    ))}
                </div>
            </div>

            {/* search by brandOnlyData  */}
            <div className="brand">
                <h2 className='font-semibold text-xl mt-5'>Brand</h2>
                <div className="flex flex-col gap-2 mt-2">
                    <select className='px-3 py-1 text-black outline-[1px] focus:outline-gray-400 border border-gray-400 rounded-sm bg-white'
                    value={brand}
                    onChange={handleBrandChange}>
                        {brandOnlyData?.map((brandName, index) => (
                            <option key={index} value={brandName}>{brandName.toUpperCase()}</option>
                        ))}
                    </select>
                </div>
            </div>

              {/* search by price range  */}
            <div className="pricerange">
                <h2 className='font-semibold text-xl mt-5'>Price Range</h2>
                <div className="flex flex-col gap-2 mt-2">
                    <label htmlFor="pricerange">Price Range ${priceRange[0]}-${priceRange[1]}</label>
                    
                    <input 
                    type="range" 
                    id='pricerange'
                    min={0} 
                    max={5000}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                    className='accent-btnColor'/>
                </div>
            </div>

           <button 
           onClick={resetFilters}
           className='bg-btnColor mt-3 text-white px-2 py-1 w-full rounded-sm'>Reset Filter</button>


        </div>
    )
}

export default FilterSection