import React from 'react'
import './footer.scss'
import {AiFillInstagram,AiFillYoutube,AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="mid-footer grid grid-cols-2 sm:grid-cols-4 sm:justify-items-center  md:items-start gap-5 md:7">
                <div className="mid-col-1 mid">
                    <h6>Shopping hub</h6>
                    <p>I hope you enjoy shopping to a best website</p>
                </div>
                 <div className="mid-col-2 mid">
                    <h6>Subscribe to get important update</h6>
                    <form action="">
                        <input type="email" placeholder='YOUR E-EMAIL' className=' rounded-md' required/>
                        <div className="btn">
                            <button type='submit' className='MainBtn'>SUBSCRIBE</button>
                        </div>
                    </form>
                 </div>
                 <div className="mid-col-3 mid">
                    <h6>Follow Us</h6>

                    <div className="social-icon">
                        <div className="icon"> <a  href="https://www.instagram.com/amanqureshi8833/" rel="noreferrer" target='_blank'><AiFillInstagram/></a>   </div>
                        <div className="icon"> <a href="https://twitter.com/AmanQureshi8388" rel='noreferrer' target='_blank'><AiFillTwitterCircle/></a>  </div>
                        <div className="icon"> <a href="https://www.linkedin.com/in/aman-qureshi-920457202/" rel="noreferrer" target='_blank'>{<AiFillLinkedin/>}</a>
                          </div>
                    </div>
                 </div>
                 <div className="mid-col-4 mid">
                    <h6>Contacts Us</h6>
                    <p>+91 7303063031</p>
                    <p >amanqureshi8388@gmail.com</p>
                 </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer