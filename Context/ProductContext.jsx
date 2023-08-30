import axios from 'axios'
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../Reducers/ProductReducer'
import { useRouter } from 'next/router'

const ProductContext = createContext()


const API = 'https://www.themealdb.com/api/json/v1/1/search.php?s'
const API2 = 'https://www.themealdb.com/api/json/v1/1/lookup.php'

const initialState = {
    isLoading: false,
    Products: [],
    isError: false,

    SingleProduct: {},
    isSingleLoading:false,
    isSingleError: false,
    FilterItems:[],

    GridStyle: ''
}



const ProductProvider = ({children}) => {


    const[State, dispatch] = useReducer(reducer, initialState)

    const FetchProducts = async (url) => {
        dispatch({ type: "PRODUCTS_LOADING" });  
        try {
            const res = await axios.get(url)
            const products = await res.data
            // console.log(products)
            dispatch({ type: "ALLPRODUCTS" , payload: products })
        } catch (error) {
            dispatch({type:'ERROR'})
            console.log('ERROR')
        }

    }


    // ===========+++++++++++++++++++++
    // Single roducts API LOADING============
    // ===============================
    
    const route = useRouter()
    const routeid = route.query.SingleProduct;
    // console.log(routeid)
    
    const FetchSingleProducts = async (url) => {
        dispatch({type:'SINGLELOADING'})
            try {
            const res = await axios.get(url)
            // const productss = await res.data
            // console.log(res.data.meals)
            dispatch({ type: "SINGLEPRODUCTS" , singlepayload: res.data.meals })
        } catch (error) {
            dispatch({type:'SINGLEERROR'})
            console.log('ERROR')
        }
    }


    useEffect(()=> {
        FetchProducts(API)
        // FilterProducts()
        FetchSingleProducts(`${API2}?i=${routeid}`)
    },[routeid])

    return <ProductContext.Provider value={{...State, FetchSingleProducts}}>{children}</ProductContext.Provider>

    
}

const useProductContext = () =>{
    return useContext(ProductContext)
}

export {ProductProvider, ProductContext, useProductContext};