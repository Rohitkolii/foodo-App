'use client'

import Link from 'next/link'
import Styles from '../styles/Navbar.module.css'
import {AiOutlineShoppingCart, AiOutlineUser, AiOutlineMenu} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { useCartContext } from '../Context/CartContext'

const Navbar = () => {

  const [ Hammenu, setHammenu] = useState(false)
  const [isClient, setIsClient] = useState(false)

  const {Cart} = useCartContext()
  
  const showsignin = () => {
    if(typeof window !== 'undefined'){
      const item = localStorage.getItem('token')
      if(item){
        return <Link onClick={()=> localStorage.removeItem('token')} className={Styles.login} href='/login'><AiOutlineUser className={Styles.icon} /> Sign out</Link>
      } else {
        return <Link className={Styles.login} href='/login'><AiOutlineUser className={Styles.icon} /> Sign in</Link>
      } 
    }
  }

  useEffect(()=> {
    setIsClient(true)
  }, [])

  return (
    <div className={Styles.Navbar}>
        <div className={Styles.logo}>
            <Link href='/'>
              <h1>
              Foodo<span>.</span>
              </h1>
            </Link>
        </div>
        <div className={!Hammenu ? Styles.navlist : Styles.reslist}>
          <ul>
            <Link href='/'>Home</Link>
            <Link href='/menu'>Menu</Link>
            <Link href='/orders'>Order</Link>
            <Link href='/recipes'>Recipes</Link>
            <Link className={Styles.mobilelinks} href='/login'><AiOutlineUser className={Styles.icon} />Login</Link>
            <Link className={Styles.mobilelinks} href='/cart'><AiOutlineShoppingCart className={Styles.icon} />Cart <span>{Cart.length}</span></Link>
          </ul>
        </div>
        <div className={Styles.userarea}>
          <ul>
            {/* {
              localStorage.getItem('token') ? 
              <Link onClick={()=> localStorage.removeItem('token')} className={Styles.login} href='/login'><AiOutlineUser className={Styles.icon} /> Sign out</Link>
             : 
              <Link className={Styles.login} href='/login'><AiOutlineUser className={Styles.icon} /> Sign in</Link>
            } */}
            

            {
              isClient ?
              showsignin()
              :
              ''
            }
              <Link className={Styles.cart} href='/cart'><AiOutlineShoppingCart className={Styles.icon} /><span>{Cart.length}</span></Link>
          </ul>
        </div>
          <AiOutlineMenu onClick={()=> setHammenu(!Hammenu)} className={Styles.hammenu}/>
    </div>
  )
}

export default Navbar