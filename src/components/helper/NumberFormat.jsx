import React from 'react'

const NumberFormat = ({price}) => {
  return (
    Intl.NumberFormat("en-in",{
        style:'currency',
        currency:'INR',
        maximumSignificantDigits:3,
    }).format(price / 100)
  )
}

export default NumberFormat