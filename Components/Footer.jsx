import Link from 'next/link'
import React from 'react'
import Styles from '../styles/Footer.module.css'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className={Styles.Footer}>
        <div className={Styles.innerFooter}>
            <div className={Styles.Footeritems}>
                <div className={Styles.logo}>
                    Bite<span>Buddy</span>.
                </div>
                <div className={Styles.FooterLinks}>
                    <ul>
                        <Link href=''>Home</Link>
                        <Link href=''>About</Link>
                        <Link href=''>Contact</Link>
                        <Link href=''>Login</Link>
                    </ul>
                </div>
                <div className={Styles.Socialicons}>
                    <AiOutlineInstagram className={Styles.icon} />
                    <AiOutlineFacebook className={Styles.icon} />
                    <AiOutlineTwitter className={Styles.icon} />
                </div>
            </div>

            <div className={Styles.Copyright}>
                <p>Copyright @2023 <Link href='/'>BiteBuddy.</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Footer