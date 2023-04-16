import React from "react";
import './proucts.scss'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterSection from "../../components/subComponent/FilterComponent/FilterSection";
import { ProductList } from "../../components/subComponent/ProductList";
import { FetchApi } from "../../store/ApiStore";
import { FilterName } from "../../store/FilterProductSlice";
import { Categoryfunc } from "../../store/ProductSlice";

const Products = () => {
  const dispatch = useDispatch();
 
 

  useEffect(() => {
    let timeout = setTimeout(()=>{
      dispatch(FetchApi());

    },800)
    return () => clearTimeout(timeout)
  }, [dispatch]);
  return (
    <>
      <section className="Main-Products">
        <div className="container">
          <div className="">
            <div className="product-filter mb-4">
              <FilterSection />
            </div>
            <div className="product-show">
              <div className="product-view flex gap-5">
              </div>
              <div className="productlist">
                <ProductList />
              </div>
            </div>
          </div>
        </div>
        {/* <Footer/> */}
      </section>
    </>
  );
};

export default Products;
