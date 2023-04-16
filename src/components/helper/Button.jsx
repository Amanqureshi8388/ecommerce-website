import React from 'react'
import './Button.scss'

const Button = ({Text}) => {
  return (
    <>
    <button type='submit' className='MainBtn'>{Text}</button>
    </>
  )
}

export default Button