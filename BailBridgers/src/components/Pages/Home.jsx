import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Hero from '../Hero'
import CustomCarousel from '../CustomCarousel'
import InfoSections from '../Users'
import Works from '../Works'

function Home() {
  return (
   <>
   <Navbar/>
   <CustomCarousel/>
   <InfoSections/>
   <Works/>
   <Footer/>
   </>
  )
}

export default Home