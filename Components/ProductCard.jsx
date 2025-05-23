import Link from 'next/link'
import React from 'react'
import Styles from '../styles/ProductCard.module.css'

import { FaStar } from "react-icons/fa";
// import { FaRegStar } from "react-icons/fa";
// import { FaStarHalfAlt } from "react-icons/fa";

const ProductCard = ({elm}) => {
  console.log(elm);
  

  return (
    <>
          <div className={Styles.ProductCard} key={elm.idMeal}>
            <div>
            <div className={Styles.Image}>
              <img src={elm.strMealThumb} alt={elm.idMeal} />
            </div>

            <div className={Styles.detailscon}>
              <div className={Styles.details}>
                <p className={Styles.MealName}>{elm.strMeal} {elm.strCategory}</p>
                <Link href={`menu/${elm.idMeal}`}>Order Now</Link>
              </div>

              <div className={Styles.Mealbtn}>
                <p className={Styles.rating}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
                <p className={Styles.price}>${Math.ceil(elm.idMeal / 80 )}</p>
              </div>
            </div>
            </div>
          </div>
    </>
  )
}

export default ProductCard;