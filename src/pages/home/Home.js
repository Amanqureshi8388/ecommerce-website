import React, { useEffect } from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import Services from '../../components/services/Services'
import Trusted from '../../components/trusted/Trusted'

import {  useDispatch } from 'react-redux'
import { FetchApi } from '../../store/ApiStore'
import FeatureProduct from '../../components/featureProduct/FeatureProduct'

const Home = () => {
  const dispatch = useDispatch()
  const heading = {
   data:'Shopping Hub',
   welcome:'Welcome To',
   about:`If you’re looking for something new, you’re in the right place. We strive to be industrious and innovative, offering our customers something they want, putting their desires at the top of our priority list.`
  }
  
  useEffect(()=>{
    dispatch(FetchApi())
  },[dispatch])

  
  return (
    <>
      <HeroSection heading={heading}/>
      <FeatureProduct/>
      <Services/>
      <Trusted/>
    </>
  )
}


export default Home