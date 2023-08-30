import React, { useState } from 'react'
import Styles from '../styles/CartContainer.module.css'
import { useCartContext } from '../Context/CartContext'
import {BsArrowRightShort} from 'react-icons/bs'

const SubTotal = () => {

    const {Cart} = useCartContext()
    let subtotal = 0;
    let Promocode = "FOODO50";
    
    const [Promo, setPromo] = useState('')
    const [Promoammount, SetPromoammount] = useState(0)
    const PromoHandler = () => {
        if(Promo && Promo === Promocode){
            SetPromoammount(50)
        } else{
            SetPromoammount(0)
        }
    }
    
    Cart.map((elm)=> {
        return subtotal = elm.price * elm.Quantity + subtotal;
    })
    
    let Total = subtotal + 50 - (2.5/100*subtotal) - Promoammount



    
  return (
    <>
    {
        Cart.length ? 
        <div className={Styles.SubTotal}>
            <div className={Styles.innerSubTotal}>

                <div className={Styles.Promo}>
                    <input value={Promo} onChange={(e)=> setPromo(e.target.value)}  type="text" placeholder='Enter Promo Code' />
                    <BsArrowRightShort onClick={()=> PromoHandler()} className={Styles.icon} />
                </div>

                <div className={Styles.SubTotalCard}>
                    <div className={`${Styles.SubTotalcol1} ${Styles.col}`}>
                        <p>Subtotal</p>
                        <p>${subtotal}</p>
                    </div>
                    <div className={`${Styles.SubTotalcol2} ${Styles.col}`}>
                        <p>Deliver fee</p>
                        <p>$50</p>
                    </div>
                    <div className={`${Styles.SubTotalcol3} ${Styles.col}`}>
                        <p>Discount</p>
                        <p>2.5%</p>
                    </div>

                    <div className={`${Styles.SubTotalcol4} ${Styles.col}`}>
                        <p>Total</p>
                        <p>${Total}</p>
                    </div>

                    <div>
                        <button>Pay</button>
                        {/* <button></button> */}
                    </div>
                </div>
            </div>
        </div>

        : 
        <div className={Styles.Emptycart}>

        </div>
    }
    </>
  )
}

export default SubTotal