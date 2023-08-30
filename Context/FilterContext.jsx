import axios from 'axios'
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../Reducers/FilterReducer'

const FilterContext = createContext()

const initialState = {
    GridStyle: ''
}



const Filter = ({children}) => {

    const[State, dispatch] = useReducer(reducer, initialState);


    // ===========+++++++++++++++++++++
    // Set Grid Css Style============
    // ===============================
    
    const setGridStyle = (stl) => {
        dispatch({type: "SETGRIDSTYLE", payload:stl})
    }
    

    useEffect(()=> {
    },[])

    return <FilterContext.Provider value={{...State, setGridStyle}}>{children}</FilterContext.Provider>

    
}

const useFilterContext = () =>{
    return useContext(FilterContext)
}

export {Filter, FilterContext, useFilterContext};