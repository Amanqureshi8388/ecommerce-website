import React from "react";
import "./filterSection.scss";
import { useSelector, useDispatch } from "react-redux";
import { SearchFuc } from "../../../store/FilterProductSlice";
import {FiSearch} from 'react-icons/fi'

const FilterSection = () => {
  const { AllProducts } = useSelector(
    (state) => state.ProductFeatureReducer
  );

  const { SearchValue } = useSelector((state) => state.FilterProduct);
  const dispatch = useDispatch();

  return (
    <>
      <div className="filter-section sm:grid grid-cols-[200px_1fr] items-center justify-start gap-3">
        <p className=" w-full text-center sm:text-start mb-3 sm:mb-0 ">
          Available products {AllProducts.length}
        </p>
        <div className=" flex border border-b-black w-full items-center gap-10 pr-3">
        <input
          type="Search"
          className=" outline-0 p-4   w-full"
          placeholder="Search"
          value={SearchValue}
          onChange={(e) => dispatch(SearchFuc(e.target.value))}
          />
          <FiSearch className="icon-search"/>
          </div>
      </div>
    </>
  );
};

export default FilterSection;
