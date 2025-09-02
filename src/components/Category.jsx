import React, { useEffect } from 'react'
import { getData } from '../context/DataContext'
import { motion } from 'framer-motion'

const Category = () => {
  const { data, fetchingData } = getData()

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((currElem) => currElem[property])
    newVal = [...new Set(newVal)]
    newVal = [...newVal, ...newVal]
    return newVal
  }

  const categoryOnlyData = getUniqueCategory(data, 'category')

  useEffect(() => {
    fetchingData()
  }, [])

  return (
    <div className="category-container py-4">
      <div className=" overflow-hidden container">
        {/* Scrolling container */}
        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: ['0%', '-120%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
        >
          {[...categoryOnlyData, ...categoryOnlyData].map((item, index) => (
            <button
              key={index}
              className="uppercase px-5 py-2 bg-gradient-to-r from-btnColor to-btnRight text-white rounded-md shadow hover:opacity-90 transition"
            >
              {item}
            </button>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Category
