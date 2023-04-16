import React from "react";
import "./productList.scss";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categoryfunc, getAllProduct } from "../../store/ProductSlice";
import { FilterSearch } from "../../store/ProductSlice";
import NumberFormat from "../helper/NumberFormat";
import Loader from '../helper/Loader'

export const ProductList = () => {
  const dispatch = useDispatch();
  const { getData , isLoading } = useSelector((state) => state.ApiReducer);
  const { AllProducts } = useSelector((state) => state.ProductFeatureReducer);
  const { SearchValue } = useSelector((state) => state.FilterProduct);



  useEffect(() => {
    dispatch(getAllProduct(getData));
    dispatch(FilterSearch(SearchValue));
  }, [dispatch, getData, SearchValue]);





  if(isLoading){
      return <Loader/>
  }

  if(AllProducts.length === 0){
    return (
      <div className="grid mt-4  place-items-center">
        <div className=" text-center">
        <p className=" text-2xl font-bold">Hey, it feels so light</p>
        <p className=" text-xl">There is no item</p>
        </div>
      </div>
    )
  }
  


  return (
    <>
      <div className="features">
        <div className="productItem grid gap-5 sm:gap-6 md:gap-7 grid-cols-2 sm:grid-cols-4">
          {AllProducts &&
            AllProducts.map((item, i) => {
              return (
                <NavLink to={`/singleproduct/${item.id}`} key={i}>
                  <div className="card">
                    <figure>
                      <img src={item.image} alt="" />
                      <figcaption className="caption">
                        {item.category}
                      </figcaption>
                    </figure>
                    <div className="card-data flex justify-between items-end">
                      <h3>{item.name}</h3>
                      <p>{<NumberFormat price={item.price} />}</p>
                    </div>
                  </div>
                </NavLink>
              );
            })}
        </div>
      </div>
    </>
  );
};
