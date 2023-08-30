import Navbar from './Navbar'
import Styles from '../styles/Header.module.css'
import Link from 'next/link'

const Header = () => {
  
  // const States = useSelector((state) => state.Products)
  // console.log(States)
  
  // const Products = useProductContext()
  // console.log(Products)

  return (
    <div className={Styles.Header}>
        <Navbar />
        <div className={Styles.innerHeader}>
          <div className={Styles.colfirst}>
            <p>Discover New Taste In Every Bite.</p>
            <h1>Special tasty Burger</h1>
            <p className={Styles.intro}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae officiis, amet in facilis temporibus illo hic nostrum earum aperiam eius eligendi maxime ad porro cum odio labore laudantium ab harum.</p>
            <div className={Styles.colfirst_btn}>
              <Link href='/Order'>Order Now</Link>
              <Link href='/menu'>Go to Menu</Link>
            </div>
          </div>

          <div className={Styles.colsecond}>
            <div className={Styles.image}>
              <img src="/Images/header.png" alt="main"/>
              {/* <Image src='/Images/Header.png' width={100} height={100}/> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header