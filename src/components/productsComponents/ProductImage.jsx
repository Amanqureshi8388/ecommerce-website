import React from 'react'
import { useState } from 'react'

const ProductImage = ({images = [{url : ""}]}) => {
  const [ mainImg ,setMainImg] = useState(images[0])

  const mainIMg = {
    width:'300rem',
    cursorPointer:'pointer'
  }
  return (
    <>
      <div className="grid grid-cols-4 gap-3 md:block mb-4">
           {
            images && images.map((elem,i)=>{
              return(
                 <figure key={i} className =' justify-self-center'>
                    <img src={elem.url} alt={elem.filename}  onClick={()=> setMainImg(elem)} key={i} />
                </figure>
              )
            })
           }
      </div>
      <div className="main-img">
        <img src={mainImg.url} alt="" style={mainIMg}/>
      </div>
    </>
  )
}

export default ProductImage