import Styles from '../styles/CartContainer.module.css'
import { useCartContext } from '../Context/CartContext'
import { ImBin2 } from 'react-icons/im'

const CartItem = ({elm}) => {

    const {id, name, image, Quantity, Category, price, finalprice} = elm
    const {setCartDecrement, setCartIncrement, removeCartItem} = useCartContext()

  return (
    <div className={Styles.ItemCard}>
        <div className={Styles.CartItems}>
            <div className={Styles.col1}>
                <div className={Styles.imgcontainer}>
                    <img src={image} alt={name} />
                </div>
                <div>
                    <p>{name}</p>
                    <p>{Category}</p>
                </div>
                <div>
                    <p className={Styles.mobileprice}>Total :${price*Quantity}</p>
                </div>
            </div>
            <div className={Styles.col2}>
                <p>${price}</p>
            </div>
            <div className={Styles.col3}>
            <button onClick={()=> setCartDecrement(id)}>-</button>
                <span>{Quantity}</span>
            <button onClick={()=> setCartIncrement(id)}>+</button>
            </div>
            <div className={Styles.col4}>
                <p>${ price * Quantity }</p>
            </div>
            <div className={Styles.col5}>
                <button onClick={()=> removeCartItem(id)}> <ImBin2 /> </button>
            </div>
        </div>
    </div>
  )
}


export default CartItem