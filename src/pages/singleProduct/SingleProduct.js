import { useEffect } from "react";
import {TbReplace, TbTruckDelivery} from 'react-icons/tb'
import {MdSecurity} from 'react-icons/md'
import './singleProduct.scss'
import {useParams} from 'react-router-dom'
import { FetchSingleProductApi } from "../../store/ApiStore";
import {useSelector,useDispatch} from 'react-redux'
import PageNavigation from "../../components/helper/PageNavigation";
import ProductImage from "../../components/productsComponents/ProductImage";
import NumberFormat from '../../components/helper/NumberFormat'
import Loader from "../../components/helper/Loader";
import ProductStar from "../../components/productsComponents/ProductStar";
import AddToCard from "../../components/productsComponents/AddToCard";

const SingleProduct = () =>{
    const {singleProduct,isLoading} = useSelector((state)=>state.ApiReducer)
    const {id} =  useParams()
    const Dispatch = useDispatch()
    const {id:alias,name,company,price,description,stock,stars,reviews,image } = singleProduct


  useEffect(()=>{
    let timeout = setTimeout(()=>{
      Dispatch( FetchSingleProductApi(id))
    },500)
    return () =>clearTimeout(timeout)   
  },[id,Dispatch])



      if(isLoading){
         return  <Loader></Loader>
      }

  return (
    <>
         <section className="singleProduct">
          {/* <PageNavigation tittle = {name}></PageNavigation> */}
          <div className="container">
            <div className="wrapper grid md:grid-cols-2 gap-9">
              <div className="left-box block   md:flex gap-3  ">
                <ProductImage images = {image} />
              </div>
              <div className="right-box">
                <h2>{name}</h2>
                <ProductStar stars={stars} reviews={reviews}/>   
                <p className="mrp">
                    MRP:
                      <del><NumberFormat price={price + 250000}/></del>
                </p>
                <p className="product-data-real-price">
                  Deal of the day : 
                <NumberFormat price={price}/>
                </p>
                <p className="description">{description}</p>
                <div className="product-warranty grid gap-5 grid-cols-2 md:grid-cols-4 justify-between pb-3">
                  <div className="product-warranty-data">
                    <TbTruckDelivery className="warranty-icon"/>
                    <p>Free delivery</p>
                  </div>
                  <div className="product-warranty-data">
                    <TbReplace  className="warranty-icon"/>
                    <p>30 Days Replacement</p>
                  </div>
                  <div className="product-warranty-data">
                    <TbTruckDelivery className="warranty-icon"/>
                    <p>Aman delivery</p>
                  </div>
                  <div className="product-warranty-data">
                    <MdSecurity className="warranty-icon"/>
                    <p>2 year Warranty</p>
                  </div>
                </div>
                <p className="product-data-info">Available : <span>
                {stock> 0 ? ' In stock' : 'Not Available' }</span>
                </p>
                <p className="brand-name brand-id">
                  ID : <span>{ id }</span>
                </p>
                <p className="brand-name">
                  Brand : <span>{ company }</span>
                </p>
                <hr/>
                {stock > 0 ? <AddToCard products={singleProduct}/> : null}
              </div>
            </div>
          </div>
         </section>
    </>
  );
}



export default SingleProduct;
