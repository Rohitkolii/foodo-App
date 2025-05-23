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
            <h1>The Perfect Space to Enjoy Fantastic <span> Food</span></h1>
            <p className={Styles.intro}>Festive dining at Farthings where we are strong believers in using the very best produce</p>
            <div className={Styles.colfirst_btn}>
              <Link href='/Order'>Order Now</Link>
              <Link href='/menu'>Go to Menu</Link>
            </div>
          </div>

          <div className={Styles.colsecond}>
            <div className={Styles.image}>
              <img src="/Images/fi3.png" alt="main"/>
            </div>
          </div>
        </div>
        <img className={Styles.wave1} src="/Images/wave3.svg" alt="" />
        <img className={Styles.wave1} src="/Images/wave.svg" alt="" />
        <img className={Styles.wave2} src="/Images/wave2.svg" alt="" />
    </div>
  )
}

export default Header