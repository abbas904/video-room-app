import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Brand from '../Brand'
import JoinRoom from '../JoinRoom'
import Pricing from '../Pricing'
import FAQ from '../FAQ'
import Footer from '../Footer'
const Home = () => {
    return (
        <div className='overflow-x-hidden'>
     <Navbar/>
      <Hero/>
      <Brand/>
      <JoinRoom/>
      <Pricing/>
      <FAQ/>
      <Footer/>
        </div>
    )
}

export default Home
