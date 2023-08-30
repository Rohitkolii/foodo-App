import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../Reducers/CartReducer'

const CartContext = createContext()

const initialState = {
    Cart: [],
    CartPrice: ''
}


const CartProvider = ({children}) => {
    const[State , dispatch] = useReducer(reducer, initialState)
    
    const AddToCartHandler = (idMeal, strMeal, strMealThumb, strCategory, Quantity, price, Product) =>{
        dispatch({type:"ADDTOCART", payload: { idMeal, strMeal, strMealThumb, strCategory, Quantity, price, Product } });
        // console.log(State.Cart)
        // console.log(Product)
    }

    const setCartIncrement = (id) => {
        dispatch({type: "SETINCREMENT", payload: id})
    }
    
    const setCartDecrement = (id) => {
        dispatch({type: "SETDECREMENT" , payload: id})
    }
    
    const removeCartItem = (id) => {
        dispatch({type: "REMOVECARTITEM" , payload: id})
    }

    return <CartContext.Provider value={{ ...State, AddToCartHandler, setCartIncrement, setCartDecrement, removeCartItem}}>{children}</CartContext.Provider>

    
}

const useCartContext = () =>{
    return useContext(CartContext)
}

export { CartProvider ,useCartContext}