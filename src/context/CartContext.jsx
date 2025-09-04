import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product)=>{
        const itemInCart = cartItems.find((item)=> item.id === product.id)
        // console.log(itemInCart)
        if(itemInCart){
            const updatedCart = cartItems.map((item, index)=>(
                item.id === product.id? {...item, quantity: item.quantity + 1}: item
            ))
            setCartItems(updatedCart)
        }else{
            setCartItems([...cartItems,{...product, quantity: 1}])
        }
        // setCartItems([...cartItems,product])
        console.log(cartItems)
    }

    const UpdateQuantity = (cartItems, productId, action)=>{
        setCartItems(cartItems.map((item)=>{
            if(item.id === productId){
                let newUnit = item.quantity
                if(action === 'increase'){
                    newUnit = newUnit + 1
                }
                else if(action === 'decrease'){
                    newUnit = newUnit - 1
                }
                return newUnit> 0 ? {...item, quantity: newUnit}: null
            }
            return item
        }).filter((item)=> item != null))
    }

    const handleDeleteItem = (productId)=>{
        const deletedItem = cartItems.filter((item)=> item.id != productId)
        setCartItems(deletedItem)
    }
    return <CartContext.Provider value={{cartItems,setCartItems,addToCart,UpdateQuantity,handleDeleteItem}}>
      {children}
    </CartContext.Provider>
}
export const getCart = () => useContext(CartContext)