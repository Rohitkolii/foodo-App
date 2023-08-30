import React from 'react'
import Navbar from '../../Components/Navbar'
import Subheader from '../../Components/Subheader'
import SingleContainer from '../../Components/SingleContainer'
import { useProductContext } from '../../Context/ProductContext'
import Footer from '../../Components/Footer'
import Loading from '../../Components/Loading'
import SingleLoading from '../../Components/SingleLoading'


// const API = 'https://www.themealdb.com/api/json/v1/1/lookup.php'

const SingleProduct = () => {

  const{SingleProduct, isSingleLoading} = useProductContext()
  const subtext = 'Meal Detail'

  return (
    <div>
      <Navbar />
      <Subheader subtext={subtext} />
      {
        !isSingleLoading ? 
        <SingleContainer SingleProduct={{...SingleProduct}} />
        :
        <SingleLoading />
      }
      <Footer />
    </div>
  )
}

export default SingleProduct