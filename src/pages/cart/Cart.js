import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/Cartcomponents/CartItem";
import Button from "../../components/helper/Button";
import { NavLink } from "react-router-dom";
import NumberFormat from "../../components/helper/NumberFormat";
import "./cart.scss";
import { useEffect } from "react";
import { TotalPriceFun } from "../../store/AddToCartSlice";

const Cart = () => {
  const { AddCartData, shippingFee, Total_price } = useSelector(
    (state) => state.AddToCartReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TotalPriceFun(AddCartData));
  }, [AddCartData, dispatch]);

  if (AddCartData.length === 0) {
    return (
      <div className="grid h-screen place-items-center">
        <div className=" text-center">
          <p className=" text-2xl font-bold">Hey, it feels so light</p>
          <p className=" text-xl">
            There is nothing in your cart. Let's add some.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="cart">
        <div className="container">
          <div className="cart_heading grid grid-cols-4 md:grid-cols-5 items-center justify-items-center  ">
            <p>Item</p>
            <p className="cart_hide hidden md:block">Price</p>
            <p>Quantity</p>
            <p className="cart_hide  ">Subtotal</p>
            <div>
              <p>Cancel</p>
            </div>
          </div>
          <hr />

          <div className="cart-item mt-4">
            {AddCartData.map((curElem) => {
              return <CartItem key={curElem.id} {...curElem} />;
            })}
          </div>
          <hr />

          <div className="btn mt-4 sm:flex justify-between">
            <NavLink to={"/products"}>
              <Button Text={"continue Shopping"} />
            </NavLink>

            <div className=" border p-8 text-xl bg-gray-100 mt-4">
              <div className="subtotal flex gap-10 justify-between">
                <p className=" text-lg font-semi-bold">Subtotal :</p>
                <p className=" w-20 font-semibold">
                  <NumberFormat price={Total_price} />
                </p>
              </div>
              <div className="shipping-fee flex gap-10 my-3 justify-between">
                <p className=" text-lg font-semi-bold">ShippingFee :</p>
                <p className=" w-20 font-semibold">
                  <NumberFormat price={shippingFee} />
                </p>
              </div>
              <hr />
              <div className="total-order flex gap-10 justify-between mt-2">
                <p className=" text-lg font-bold">Total Price :</p>
                <p className=" w-20 font-semibold">
                  <NumberFormat price={shippingFee + Total_price} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
