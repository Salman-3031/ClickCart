import React, { useEffect } from 'react'
import { getData } from '../context/DataContext'

const Products = () => {
  const {data, fetchingData} = getData()

  useEffect(() => {
    fetchingData()
  
  }, [])
  
  return (
    <div>
      {data?.length> 0 ? (
        <div>data</div>
      ):(
        <div>no data</div>
      )}
    </div>
  )
}

export default Products