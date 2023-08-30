import Link from 'next/link'
import React from 'react'
import Styles from '../styles/ProductCard.module.css'

const ProductCard = ({elm}) => {

  return (
    <>
          <div className={Styles.ProductCard} key={elm.idMeal}>
            <Link href={`menu/${elm.idMeal}`}>
            <div className={Styles.Image}>
              <img src={elm.strMealThumb} alt={elm.idMeal} />
            </div>
            <div className={Styles.detailscon}>
              <div className={Styles.details}>
                <p className={Styles.MealName}>{elm.strMeal}</p>
                <p>${Math.ceil(elm.idMeal / 80 )}</p>
              </div>
              <div className={Styles.Mealbtn}>
                <p className={Styles.duration}>50-60min</p>
                {/* <p>{elm.Category}</p> */}
              </div>
            </div>
            </Link>
          </div>
    </>
  )
}

export default ProductCard;