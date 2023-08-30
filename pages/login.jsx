import React from 'react'
import Footer from '../Components/Footer'
import LoginContainer from '../Components/LoginContainer'
import Navbar from '../Components/Navbar'
import Subheader from '../Components/Subheader'

const login = () => {

    
  const subtext = 'Login'

  return (
    <>
        <Navbar />
        {/* <Subheader subtext={subtext} /> */}
        <LoginContainer />
        {/* <Footer /> */}
    </>
  )
}

export default login