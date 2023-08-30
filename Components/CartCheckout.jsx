import React from 'react';
import Styles from '../styles/CartCheckout.module.css'
import {MdOutlineDoneAll} from 'react-icons/md'

const CartCheckout = () => {
  return (
    <div className={Styles.CartCheckout}>
        <div className={Styles.innerCartCheckout}>
            <div>
                <MdOutlineDoneAll className={Styles.icon} />
            </div>
            <h1>Order Placed</h1>
        </div>
    </div>
  )
}

export default CartCheckout