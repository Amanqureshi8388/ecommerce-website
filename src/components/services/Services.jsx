import React from 'react'
import './services.scss'
import{TbTruckDelivery} from 'react-icons/tb'
import {MdSecurity} from 'react-icons/md'
import {GiReceiveMoney} from 'react-icons/gi'
import {RiSecurePaymentLine} from 'react-icons/ri'

const Services = () => {
  return (
    <>
    <section className='serviceSection'>
        <div className="container">
            <div className="wrapper grid sm:grid-cols-2 md:grid-cols-3  gap-7">
        <div className='box'>
            <div>
            <TbTruckDelivery className='icon'/>
            </div>
            <h3>Super Fast and Free delivery</h3>
        </div>
        <div className=' mid-box grid grid-rows-2  gap-5'>
            <div className='inner-box'>
                <div>
                <MdSecurity className='icon'/>
                </div>
            <h3>None-Contact Shipping</h3>
            </div>
            <div className='inner-box'>
                <div>
                <GiReceiveMoney className='icon'/>
                </div>
                <h3>Money-back Guaranted</h3>
            </div>
        </div>
        <div className='box'>
            <div>
              <RiSecurePaymentLine className='icon'/>
            </div>
            <h3>Super Secure Payment System</h3>
        </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Services