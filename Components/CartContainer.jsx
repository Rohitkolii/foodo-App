import React from 'react'
import Styles from '../styles/CartContainer.module.css'
import CartItem from './CartItem'
import { useCartContext } from '../Context/CartContext'
import Link from 'next/link'

const CartContainer = () => {

  const {Cart} = useCartContext()
  console.log(Cart)
  
  return (
    <>
    {
      Cart.length ?
        <div className={Styles.CartContainer}>
        <div className={Styles.inerCartContainer}>
        <div className={Styles.Cartheading}>
        <p>Product</p>
        <p>Unit Price</p>
        <p>QTY</p>
        <p>Price</p>
                <p>Remove</p>
                </div>
            {
              Cart && Cart.map((elm)=> {
                return(
                  <CartItem elm={{...elm}} />
                  )
                })
              }
              </div>
        </div>
      :
        <div className={Styles.Emptycart}>
          <img src="Images/cart.png" alt="" />
        <h1>No Meals in cart</h1>
        <Link href='/menu'>Get Your Meal</Link>
        </div>
    }
    </>
  )
}

export default CartContainer