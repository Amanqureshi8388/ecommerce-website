import React from 'react'
import './herosection.scss'
import {NavLink} from 'react-router-dom'
import Button from '../helper/Button'

const HeroSection = ({heading}) => {
  return (  
    <>
    <section className='heroSection'>
        <div className="container">
            <div className="wrapper grid md:grid-cols-2 gap-4 ">
               <div className="left">
                <small>{heading.welcome}</small>
                <h1>{heading.data}</h1>
                <p className=' tracking-wide leading-9'>{heading.about}</p>
                <div className="btn">
                    <NavLink to='/products'>
                      <Button Text={"Shop Now"} />
                    </NavLink>
                </div>
               </div>
               <div className="right self-center">
                <figure>
                    <img src='images/hero.jpg' alt="" />
                </figure>
               </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HeroSection