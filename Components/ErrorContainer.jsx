import React from 'react'
import Styles from '../styles/Error.module.css'
import Link from 'next/link' 

const ErrorContainer = () => {
  return (
    <>
        <div className={Styles.ErrorContainer}>
                <div className={Styles.Imagecol}>
                    <img src="/Images/error.jpg" alt="error" />
                </div>
        </div>
        <div className={Styles.Errortext}>
            <p>Page you are looking for not found</p>
            <Link href='/'>Go to Home</Link>
        </div>
            </>
  )
}

export default ErrorContainer