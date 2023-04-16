import React from 'react'
import {FaStar,FaStarHalfAlt} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai'

const span = {
    display:'inline'
}

const icons = {
    color:'hsl(51, 98%, 53%)'
}

const ProductStar = ({stars,reviews}) => {
    // console.log(stars,reviews)

    const starRating = Array.from({length:5},(elem,index)=>{
        let number = index + 0.5
        // console.log(index) 
        return(
            <span key={index} style={span}>
                {
                    stars >= index + 1
                     ? (<FaStar  style={icons}/>) 
                     : stars >= number 
                     ? (<FaStarHalfAlt style={icons}/>) 
                     : (<AiOutlineStar style={icons}/>)
                }
            </span>
        )
    })


  return (
    <>
       <div className="icon-style flex items-center" >
        {starRating }
        <p className=' ml-1'> ({reviews} customer reviews)</p>
       </div>
    </>
  )
}

export default ProductStar