'use client'

import Link from 'next/link'
import Styles from '../styles/Navbar.module.css'
import {AiOutlineShoppingCart, AiOutlineUser, AiOutlineMenu} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { useCartContext } from '../Context/CartContext'
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoIosRestaurant } from "react-icons/io";


const Navbar = () => {

  const [ Hammenu, setHammenu] = useState(false)
  const [isClient, setIsClient] = useState(false)

  const {Cart} = useCartContext()
  
  // const showsignin = () => {
  //   if(typeof window !== 'undefined'){
  //     const item = localStorage.getItem('token')
  //     if(item){
  //       return <Link onClick={()=> localStorage.removeItem('token')} className={Styles.login} href='/login'><AiOutlineUser className={Styles.icon} /> Sign out</Link>
  //     } else {
  //       return <Link className={Styles.login} href='/login'><AiOutlineUser className={Styles.icon} /> Sign in</Link>
  //     } 
  //   }
  // }

  // const showmobilesignin = () => {
  //   if(typeof window !== 'undefined'){
  //     const item = localStorage.getItem('token')
  //     if(item){
  //       return <Link onClick={()=> localStorage.removeItem('token')} className={Styles.mobilelinks} href='/login'><AiOutlineUser className={Styles.icon} />Sign out</Link>
  //     } else {
  //       return <Link className={Styles.mobilelinks} href='/login'><AiOutlineUser className={Styles.icon} /> Sign in</Link>
  //     } 
  //   }
  // }

  const handleMenu = () =>{
    setHammenu(!Hammenu);
    if (!Hammenu) document.body.style.overflowY = "hidden"
    else document.body.style.overflowY = "scroll"
  }


  useEffect(()=> {
    setIsClient(true)

  }, [])

  return (<>
    {/* <div className={Styles.Navbar}>
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
              {
                isClient ?
                showmobilesignin()
                :
                ""
              }
            <Link className={Styles.mobilelinks} href='/login'><AiOutlineUser className={Styles.icon} />Login</Link>
            <Link className={Styles.mobilelinks} href='/cart'><AiOutlineShoppingCart className={Styles.icon} />Cart <span>{Cart.length}</span></Link>
          </ul>
        </div>
        <div className={Styles.userarea}>
          <ul>
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
    </div> */}

    <nav className={Styles.Navbar}>
      <div className={Styles.logo}>
        Bite<span>Buddy</span>.
      </div>
      <div className={`${!Hammenu ? Styles.navlist : Styles.mobilelinks}`}>
        <ul>
          <Link href=''>Home</Link>
          <Link href=''>Menu</Link>
          <Link href=''>Foods</Link>
          <Link href='/cart'>Recipe</Link>
          <Link className={Styles.login} href='/login'><AiOutlineUser className={Styles.icon} /> Sign in</Link>
          {/* <Link className={Styles.cart} href='/cart'><AiOutlineShoppingCart className={Styles.icon} /><span>{Cart.length}</span></Link> */}

        </ul>
      </div>
      {
        Hammenu ?
        <MdOutlineRestaurantMenu onClick={()=> handleMenu()} className={Styles.hammenu} />
        : 
        <IoIosRestaurant onClick={()=> handleMenu()} className={Styles.hammenu} />
      }
    </nav>
    </>
  )
}

export default Navbar