import Link from 'next/link'
import React from 'react'

import Styles from "../styles/Comitment.module.css"

import { IoArrowForwardOutline } from "react-icons/io5";
import { IoFastFood } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";


const Comitment = () => {
  return (
    <>
    <div className={Styles.Comitment}>
        <div className={Styles.innComitment}>
            <div className={Styles.col1}>
                <p className={Styles.italic}>We Guarantee</p>
                <p className={Styles.text1}>30 Minutes Delivery!</p>
                <p className={Styles.text2}>30-Minutes Delivery Guarantee! Botanica’s is the only food
                    company that guarantees your order will arrive within 30
                    minutes or we’ll give you a free Regular.</p>
                    <div className={Styles.commitcontact}>
                        <div>
                            <img src="/Images/delivery-icon.svg" alt="" />
                        </div>
                        <div className={Styles.phone}>
                            <p>call us Free :</p>
                            <p>+ 91 9899989998</p>
                        </div>
                    </div>
            </div>

            <div className={Styles.col2}>
                <img src="/Images/delivery.svg" alt="" />
            </div>

            <div className={Styles.col3}>
                <p className={Styles.text1}>Choose what you want <br /> select a pick up time</p>
                <p className={Styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam non mi eu neque congue pellentesque ut non ligula.
                    Duis dignissim feugiat quam</p>
                    {/* <br /> */}
                    <Link href=''>Know more <IoArrowForwardOutline /></Link>
            </div>
        </div>
    </div>

    <div className={Styles.highlight}>
        <div className={Styles.innhighlight}>
            <div className={Styles.highlightimg}>
                <img src="/Images/f2.jpg" alt="" />
            </div>

            <div className={Styles.highlightcon}>
                <p>about our food</p>
                <p>the best delicious food <br /> made from us...</p>
                <p>Its the perfect dining experience where every dish is crafted with fresh, high-quality dining experience
                    Experience quick and efficient service that ensures your food is servead fresh Its the where every dining
                    experience where every dish is crafted with fresh, high-quality ingredients fresh, high-quality</p>
                    <br />
                    <div className={Styles.nums}>
                        <div>
                            <p>Satisfied Clients</p>
                            <p>250K+</p>
                        </div>
                        <div>
                            <p>Food Categories</p>
                            <p>130+</p>
                        </div>
                        <div>
                            <p>Award Win</p>
                            <p>11+</p>
                        </div>
                    </div>
            </div>

        </div>
        
    </div>


    <div className={Styles.appintro}>
        <div className={Styles.innappintro}>
            <div className={Styles.appintrocol1}>
                <p>Best App For Foods Ordering</p>
                <p>Manage your resttaurant anytime anywhere!</p>
                <ul>
                    <li><IoFastFood />Higher Reach - Minimal Effort</li>
                    <li><IoFastFood />Showcase your Brand</li>
                    <li><IoFastFood />Exclusive offers & discounts</li>
                </ul>
                <div className={Styles.btn}>
                    <Link href=''><FaGooglePlay />Google Play</Link>
                    <Link href=''><FaApple />App Store</Link>
                </div>
            </div>


            <div className={Styles.appintrocol2}>
                <img width={150} src="/Images/yellowsc.svg" alt="" />
                <img className={Styles.phoneimg} src="/Images/phone.svg" alt="" />
                {/* <img width={200} src="/Images/fi1.png" alt="" /> */}
                <div className={Styles.appstyle}></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Comitment