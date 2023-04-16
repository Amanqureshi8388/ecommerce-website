import React from 'react'
import './AddToCard.scss'
import { FaCheck } from 'react-icons/fa'
import { useState } from 'react'
import { useDispatch} from 'react-redux'
import { AddCartFun} from '../../store/AddToCartSlice'
import { CartAmountToggle } from './CartAmountToggle'

const AddToCard = ({products}) => {
    const dispatch = useDispatch()
    const {colors,id,stock , } = products
    const [curColor ,setCurColor] = useState(colors[0])
    const [amount ,setAmount] = useState(1)
    
    
    
    const HandleAdd = (products) =>{
       dispatch(AddCartFun({products,curColor,amount, stock , id }))
      }

     
      
      
      const color = colors.map((color,i)=>{
         return(
            <button className={color === curColor ? 'colorBtn coloractive' : 'colorBtn'} 
            style={{backgroundColor: color}} 
            onClick={()=>setCurColor(color)} 
            key={i}>
                   {color === curColor ?
                    (<FaCheck style={{color:'white'}}></FaCheck>) :
                   null}
            </button>
        )
      })
      
      
       const setDecrease =() =>{
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
       }
       const setIncrease =() =>{
        amount < stock ? setAmount(amount + 1) : setAmount(stock)
       }

  return (
    <>
       <div className=' flex gap-7 mt-4'>{color}</div>
       <div className=' my-8 flex items-center'>
         <p className=' mr-7 font-bold'>Quantity : </p>
       <CartAmountToggle amount={amount} setIncrease={setIncrease} setDecrease={setDecrease} />
       </div>
       <div className="cart-btn">
        <button className='MainBtn' onClick={()=>HandleAdd(products)}>Add To CarT</button>
       </div>
    </>
  )
}

export default AddToCard