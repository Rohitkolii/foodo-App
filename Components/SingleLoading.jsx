import React from 'react'
import Styles from '../styles/SingleLoading.module.css'

const SingleLoading = () => {
  return (
    <div className={Styles.main_item}>
  
      <div className={Styles.animated_background}>
        <div className={`${Styles.background_masker} ${Styles.btn_divide_left}`}></div>
      </div>
</div>
  )
}

export default SingleLoading