import React from 'react'
import Styles from '../styles/Subheader.module.css'
// import{AiOutlineSearch} from 'react-icons/ai'

const Subheader = ({subtext}) => {
  return (
    <div className={Styles.subheader}>
            <h1>{subtext}</h1>
            {/* <div>
              <input type="text" />
              <button><AiOutlineSearch /> Search</button>
            </div> */}
    </div>
  )
}

export default Subheader