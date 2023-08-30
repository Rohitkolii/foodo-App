import React from 'react'
import Navbar from '../Components/Navbar'
import Product from '../Components/Product'
import Subheader from '../Components/Subheader'
import Filter from '../Components/Filter'

const Products = () => {

  const slicevalue = 100
  const subtext = 'All Products'
  const producTitle = 'Explore All'


  return (
    <div>
      <Navbar />
      <Subheader subtext={subtext} />
      {/* <Filter /> */}
      <Product producTitle={producTitle} slicevalue={slicevalue} />
    </div>
  )
}

export default Products