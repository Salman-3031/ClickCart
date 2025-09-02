import axios from "axios";
import { createContext, useContext, useState } from "react";

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
    return <DataContext.Provider value={{data,setData,fetchingData}}>
        {children}
    </DataContext.Provider>
}

export const getData = () => useContext(DataContext)