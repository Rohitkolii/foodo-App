import React, {useState } from 'react'
import Styles from '../styles/SingleContainer.module.css'
import { useCartContext } from '../Context/CartContext'


const SingleContainer = (SingleProduct) => {


    const {strMealThumb,strMeal, strArea, strCategory, strInstructions, idMeal} = SingleProduct.SingleProduct[0] || {}
    const Product = SingleProduct.SingleProduct[0]
    const price = Math.ceil(idMeal / 80 )

    const { AddToCartHandler } = useCartContext()
    
    const[Quantity, setQuantity] = useState(1)
    
    return (
        <div className={Styles.SingleContainer}>
        <div className={Styles.ImageArea}>
            <div className={Styles.MainImgCon}>
                <img src={strMealThumb} alt={strArea} />
            </div>
            <div className={Styles.subImgCon}>
                <div className={Styles.subImg}>
                    <img src={strMealThumb} alt={strArea} />
                </div>
                <div className={Styles.subImg}>
                    <img src={strMealThumb} alt={strArea} />
                </div>
                <div className={Styles.subImg}>
                    <img src={strMealThumb} alt={strArea} />
                </div>
            </div>
        </div>
        <div className={Styles.Detailscon}>
            <h1>{strMeal}</h1>
            <p className={Styles.Category}>{strCategory}</p>
            <p className={Styles.intro}>{strInstructions}</p>
            <p className={Styles.price}>${price}</p>

            <div className={Styles.QuantitySelector}>
                <button onClick={()=> setQuantity(Quantity-1)}>-</button>
                    <span>{Quantity}</span>
                <button onClick={()=> setQuantity(Quantity + 1)}>+</button>
            </div>

            <div className={Styles.Addtocart}>
                <button onClick={()=> AddToCartHandler(idMeal, strMeal, strMealThumb, strCategory, Quantity, price, Product)}>ADD TO CART</button>
            </div>

        </div>
    </div>
  )
}

export default SingleContainer