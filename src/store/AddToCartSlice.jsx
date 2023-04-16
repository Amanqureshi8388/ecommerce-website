import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getLocalCartData =
  localStorage.getItem("AddCartData") === null
    ? []
    : JSON.parse(localStorage.getItem("AddCartData"));
    
const getLocalAmount = JSON.parse(localStorage.getItem("amountvalue"));

const AddToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    AddCartData: getLocalCartData,
    amount: getLocalAmount,
    Total_Amount: 1,
    shippingFee: 50000,
    totalOrder: "10000",
    Total_price: "",
    total_cart_item:''
  },

  reducers: {
    cartItem(state){
        const  UpdateItemValue = state.AddCartData.reduce((initial,item)=>{
          let {amount} = item
          initial = initial + amount
          return initial
        },0)
        return{...state,total_cart_item:UpdateItemValue}
    },
    AddCartFun(state, { payload }) {
      let { id, curColor, amount, products } = payload;
      let existingProduct = state.AddCartData.find(
        (item) => item.id === id + curColor
      );
      if (existingProduct) {
        let updatedProduct = state.AddCartData.map((curItem) => {
          if (curItem.id === id + curColor) {
            let newAmount = curItem.amount + amount;
            return {
              ...curItem,
              amount: newAmount,
            };
          } else {
            return curItem;
          }
        });
        state.AddCartData = updatedProduct;
      } else {
        let cartProduct = {
          id: id + curColor,
          name: products.name,
          curColor,
          amount,
          image: products.image[0].url,
          price: products.price,
          max: products.stock,
        };
        state.AddCartData = [...state.AddCartData, cartProduct];
      }

      localStorage.setItem("AddCartData", JSON.stringify(state.AddCartData));
      toast.success("Item added to cart ", { position: "bottom-left" });
    },

    setIncrease(state, { payload }) {
      let UpdateCart = state.AddCartData.map((curElem) => {
        if (curElem.id === payload) {
          let incAmount = curElem.amount;
          incAmount += 0;
          incAmount < curElem.max
            ? (incAmount += 1)
            : (incAmount = curElem.max);
          return { ...curElem, amount: incAmount };
        } else {
          return curElem;
        }
      });
      state.AddCartData = UpdateCart;
      localStorage.setItem("AddCartData", JSON.stringify(state.AddCartData));
      toast.info("Item added to cart ", { position: "bottom-left" });
    },

    setDecrease(state, { payload }) {
      let UpdateCart = state.AddCartData.map((curElem) => {
        if (curElem.id === payload) {
          let decAmount = curElem.amount;
          decAmount--;
          if (decAmount < 1) decAmount = 1;
          return { ...curElem, amount: decAmount };
        } else {
          return curElem;
        }
      });
      state.AddCartData = UpdateCart;
      localStorage.setItem("AddCartData", JSON.stringify(state.AddCartData));
      toast.warning("Item remove from  cart ", { position: "bottom-left" });
    },

    RemoveCart(state, action) {
      const {id,curColor} = action.payload
      let update = state.AddCartData.filter(
        (item) => item.id !== id
      );
      state.AddCartData = update;
      localStorage.setItem("AddCartData", JSON.stringify(state.AddCartData));

      if(curColor){
      toast.success("Item Order from cart ", { position: "bottom-left" });
      }else{
        toast.error("Item delete from cart ", { position: "bottom-left" });
      }
    },

    TotalPriceFun(state,action){
       let Total_price = state.AddCartData.reduce((ini,item)=>{
             let {price,amount} = item
             ini = ini + price * amount
             return ini      
       },0) 
       return {...state,Total_price:Total_price}
    },






    
   
  },
});

export const { AddCartFun, setIncrease, setDecrease, RemoveCart , AddOrder , TotalPriceFun , cartItem } =
  AddToCartSlice.actions;
export default AddToCartSlice.reducer;
