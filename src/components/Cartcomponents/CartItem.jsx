import React, { useEffect } from "react";
import "./cartItem.scss";
import NumberFormat from "../helper/NumberFormat";
import { useDispatch, useSelector } from "react-redux";
import { CartAmountToggle } from "../productsComponents/CartAmountToggle";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import {
  RemoveCart,
  setDecrease,
  setIncrease,
} from "../../store/AddToCartSlice";

const CartItem = ({ id, name, image, curColor, price, amount }) => {
  const { AddCartData, shippingFee } = useSelector(
    (state) => state.AddToCartReducer
  );

  
  const dispatch = useDispatch();

  return (
    <>


      <div className="cart-info grid grid-cols-4  md:grid-cols-5 items-center justify-items-center my-10">
        <div className="cart-image--name  block md:flex items-center justify-center md:justify-self-start gap-2">
          <div>
            <figure>
              <img src={image} alt="" />
            </figure>
          </div>
          <div>
            <p>{name}</p>
            <div className="color-div flex items-center gap-4">
              <p>color : </p>
              <div
                className="color-style"
                style={{ backgroundColor: curColor, color: curColor }}
              ></div>
            </div>
          </div>
        </div>

        <div className="cart-hide hidden md:block ">
          <p>
            <NumberFormat price={price} />
          </p>
        </div>

         {/* quantity  */}

         <CartAmountToggle
          amount={amount}
          setIncrease={() => dispatch(setIncrease(id))}
          setDecrease={() => dispatch(setDecrease(id))}
        /> 
       

        {/* {/* subtotal */}
        <div className="cart-hide-subtotal ">
          <p>
            <NumberFormat price={price * amount} />
          </p>
        </div>
        <div className="tickDelete  flex gap-2">
          <div className="">
          <FaTrash
            className="remove_icon cursor-pointer text-red-700 sm:text-lg"
            onClick={() => dispatch(RemoveCart({id}))}
          />
          </div>
        </div>
      </div> 


















      {/* <div className="cart-info flex gap-8 items-start justify-items-center my-10">
        <div className="left-img">
        <figure className=" w-60">
              <img src={image} alt="" />
            </figure>
        </div>
        <div className="right-about">
        <p className=" text-2xl">{name}</p>
        <div className="color-div flex items-center gap-4">
              <p className=" text-xl my-2">color : </p>
              <div
                className="color-style"
                style={{ backgroundColor: curColor, color: curColor }}
              ></div>
        </div>
        <div className="cart-hide-subtotal flex gap-4 ">
            <p className=" text-xl">Price : </p>
          <p className=" text-xl font-bold ">
            <NumberFormat price={price * amount} />
          </p>
        </div>
         <div className="flex gap-2 justify-center items-center mt-3">
          <p className="text-xl">Quantity</p>
        <CartAmountToggle
          amount={amount}
          setIncrease={() => dispatch(setIncrease(id))}
          setDecrease={() => dispatch(setDecrease(id))}
        />
         </div>



        </div>   
      </div> */}
    </>
  );
};

export default CartItem;
