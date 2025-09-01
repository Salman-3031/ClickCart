import axios from "axios";
import { createContext, useState } from "react";

export const DataContext = createContext(null)

export const DataProvider = ({children})=>{
    const [data,setData] = useState([])

   const fetchingData = async () =>{
     try {
        const res = axios.get(`https://fakestoreapi.in/api/products?limit=150`)
        const productsData = res.data.products
        setData(productsData)
        console.log(productsData)
    } catch (error) {
        console.log(error)
    }
   }
    return <DataContext.Provider value={{data,setData,fetchingData}}>
        {children}
    </DataContext.Provider>
}