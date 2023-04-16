import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection'

const About = () => {
  const heading = {
    data:'eCommerce',
    about:`At Shopping hub, our aim is to offer you best products that show you that we really care! Not only have we got the trendiest products, but we can also guarantee that they are of the finest quality.
    We started as a small business in Delhi, and our aim is to continue providing our customers with products that keep them happy, at prices that keep them happy.  
    Our customers are our top priority and through our products we work hard towards building long-lasting and meaningful relations with them.`
   }
  return (
    <>
    <HeroSection heading={heading}/>
    </>
  )
}

export default About