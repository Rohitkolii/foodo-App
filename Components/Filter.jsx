import React, { useState } from 'react'
import{CgMenuGridR, CgMenu} from "react-icons/cg"
import Styles from "../styles/Filter.module.css"
import { useFilterContext } from '../Context/FilterContext'

const Filter = () => {

    // const {setGridStyle, GridStyle} = useFilterContext()

    // console.log(GridStyle)

  return (
    <div className={Styles.Filtercon}>
        <div>
            <CgMenuGridR onClick={() => setGridStyle('card')} className={Styles.icon} />
            <CgMenu onClick={() => setGridStyle('list')} className={Styles.icon} />
        </div>
        <div>
            <p>{'122 Meals'}</p>
        </div>
        <div>
            <select className={Styles.sort} name="cars" id="cars">
                <option value="volvo">low price</option>
                <option value="saab">high price</option>
                <option value="mercedes">a-z</option>
                <option value="audi">z-a</option>
            </select>
        </div>
    </div>
  )
}

export default Filter