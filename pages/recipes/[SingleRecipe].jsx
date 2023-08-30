import React from 'react'
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { useProductContext } from '../../Context/ProductContext';
import SingleRecipecon from '../../Components/SingleRecipecon';

const SingleRecipe = () => {

    const {SingleProduct} = useProductContext()
    // console.log(SingleProduct)

  return (
    <>
        <Navbar />
        <SingleRecipecon SingleProduct={{...SingleProduct}} />
        <Footer />
    </>
  )
}

export default SingleRecipe;