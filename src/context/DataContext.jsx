import axios from "axios";
import { createContext, useContext, useState } from "react";
import Category from "../components/Category";

export const DataContext = createContext(null)

export const DataProvider = ({children})=>{
    const [data,setData] = useState()

   const fetchingData = async () =>{
     try {
        const res = await axios.get(`https://fakestoreapi.in/api/products?limit=150`)
        const productsData = res.data.products
        // console.log(productsData)
        setData(productsData)
    } catch (error) {
        console.log(error)
    }
   }

//    fetchingData by Category 
  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((currElem) => currElem[property])
    newVal = ['All',...new Set(newVal)]
    return newVal
  }

  const categoryOnlyData = getUniqueCategory(data, 'category')
  const brandOnlyData = getUniqueCategory(data,'brand')

    return <DataContext.Provider value={{data,setData,fetchingData, categoryOnlyData,brandOnlyData}}>
        {children}
    </DataContext.Provider>
}

export const getData = () => useContext(DataContext)