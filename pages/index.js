'use client'

import Head from "next/head"
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Product from '../Components/Product'

export default function Home() {

  const slicevalue = 8
  const producTitle = "Trending Today"
  return (
    <>
    <Head>
      <title>Foodo | A Food Delivery App</title>
      <link rel="icon" type="image/x-icon" href="/images/header.png"></link>
    </Head>
        <Header />
        <Product producTitle={producTitle} slicevalue={slicevalue} />
        <Contact />
        <Footer />
    </>
  )
}
