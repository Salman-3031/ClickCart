import React, { useContext, useEffect } from 'react'
import {DataContext} from '../context/DataContext'

const Carousel = () => {
    const {fetchingData,data} = useContext(DataContext)
console.log(data)
    useEffect(() => {
      fetchingData()
    }, [data])
    
  return (
    <div>Carousel</div>
  )
}

export default Carousel