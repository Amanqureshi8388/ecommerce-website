import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'



export const CartAmountToggle = ({amount, setIncrease,setDecrease }) => {
  return (
    <>
     <div className=' flex items-center  gap-3 border-2 border-slate-500'>
        
         <button onClick={()=>setDecrease()} className=' border-r-2 border-slate-500 p-2 '>
             <FaMinus/> 
        </button>
               <p className='amountvalue'>{amount}</p>
        <button onClick={()=> setIncrease()} className=' border-l-2  border-slate-500 p-2  '>
             <FaPlus/> 
        </button>
       </div>
    </>
  )
}
