import React from 'react'
import ProductCard from './ProductCard'
import Styles from '../styles/Product.module.css'
import { useProductContext } from '../Context/ProductContext'
import Link from 'next/link'
import Loading from "./Loading"

import { MdKeyboardArrowRight } from "react-icons/md";


const Product = ({slicevalue,producTitle}) => {

  const {isLoading, Products} = useProductContext()

  // console.log(isLoading)

  return (
    <>
    {
      isLoading ? 

      <div className={Styles.Loading}>
        <Loading />
      </div>
                :
    <div className={Styles.ProductContainer}>
      <div className={Styles.productshead}>
        <h1>{producTitle}</h1>
      </div>
            <div className={Styles.innerProductContainer}>
              {
                      Products.meals &&  Products.meals.slice(0,slicevalue).map((elm) => {
                        return(
                            <ProductCard key={elm.idMeal} elm={{...elm}} />
                        )
                      }
                      )
              }
            </div>
        <div className={Styles.Loadbtn}>
          <Link href='/menu'>Explore More <MdKeyboardArrowRight /></Link>
        </div>
    </div>
}
    </>
  )
}

export default Product