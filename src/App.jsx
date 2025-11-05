import React from 'react'
import Header from './componet/Header'
import HeroSection from './componet/HeroSection'
import Section from './componet/Section'

import Owner from './componet/Owner'
// import Service from './componet/Service'
import ServicesSection from './componet/ServiceSection'


function App() {
  return (
    <>
      
    <Header/>
    <HeroSection/>
    <Section/>
    {/* <Service/> */}
     <ServicesSection/>
         <Owner/>
    
    </>
  )
}

export default App
