import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import RecipesContainer from '../Components/RecipesContainer'

const recipes = () => {
  return (
    <>
        <Navbar />
        <RecipesContainer />
        <Footer />
    </>
  )
}

export default recipes