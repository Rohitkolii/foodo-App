import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Subheader from '../Components/Subheader'
import Footer from '../Components/Footer'
import CartContainer from '../Components/CartContainer'
import SubTotal from '../Components/SubTotal'
import CartCheckout from '../Components/CartCheckout'
import Styles from '../styles/CartContainer.module.css'
import Link from 'next/link'

const Cart = () => {

  const [isClient, setIsClient] = useState(false)

  const showIfLogin = () => {
    if(typeof window !== 'undefined'){
      const item = localStorage.getItem('token')
      if(item){
        return <>
        <CartContainer />
        <SubTotal />
        </>
      } else{
        return(
          <div className={Styles.cartlogincontainer}>
            <img src="Images/login.png" alt="login illustration" />
            <h1>Please Login First</h1>
            <Link className={Styles.cartloginbtn} href='/login'>Login</Link>
          </div>
        )
      }
    }
  }

  useEffect(()=>{
    setIsClient(true)
  })

  return (
    <div>
        <Navbar />
        {/* <Subheader /> */}
        {/* <CartCheckout /> */}
        {/* <CartContainer /> */}
        {
          isClient
          ?
          showIfLogin()
          :
          ''
        }
        
        <Footer />
    </div>
  )
}

export default Cart