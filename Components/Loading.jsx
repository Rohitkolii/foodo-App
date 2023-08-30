import React from 'react'
import Styles from '../styles/Loading.module.css'

const Loading = () => {
  return (
    <div className={Styles.main_item}>
      <div className={Styles.static_background}>
        <div className={`${Styles.background_masker} ${Styles.btn_divide_left}`}></div>
      </div>
  
      <div className={Styles.animated_background}>
        <div className={`${Styles.background_masker} ${Styles.btn_divide_left}`}></div>
      </div>
  
  {/* <div className={Styles.shared_dom}>
    <div className={`${Styles.sub_rect} ${Styles.pure_background}`}></div>
    <div className={`${Styles.sub_rect} ${Styles.pure_background}`}></div>
    <div className={`${Styles.sub_rect} ${Styles.pure_background}`}></div>
    <div className={`${Styles.sub_rect} ${Styles.pure_background}`}></div>
    <div className={`${Styles.sub_rect} ${Styles.pure_background}`}></div>
    <div className={`${Styles.sub_rect} ${Styles.pure_background}`}></div>
    <div className={`${Styles.sub_rect} ${Styles.pure_background}`}></div>
    <div className={`${Styles.sub_rect} ${Styles.pure_background}`}></div>
  </div> */}
</div>
  )
}

export default Loading