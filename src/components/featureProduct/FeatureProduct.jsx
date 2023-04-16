import React, { useEffect } from "react";
import "./featurProduct.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import NumberFormat from "../helper/NumberFormat";
import Loader from "../helper/Loader";

const FeatureProduct = () => {
  const { getData, isLoading } = useSelector((state) => state.ApiReducer);
  const [feature, setfeature] = useState();

  const GetProduct = () => {
    const items = getData.filter((elem) => elem.featured === true);
    setfeature(items);
  };

  useEffect(() => {
    GetProduct();
  }, [getData]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <section className="features">
        <div className="container">
          <section className="wrapper">
            <p className=" text-bold">CHECK NOW</p>
            <h1 className=" font-semibold">Our Feature Services</h1>
            <div className="productItem grid grid-cols-1 sm:grid-cols-3  gap-3 sm:gap-6">
              {feature &&
                feature.map((feature) => {
                  return (
                    <NavLink
                      to={`/singleproduct/${feature.id}`}
                      key={feature.id}
                    >
                      <div className="card">
                        <figure>
                          <img src={feature.image} alt="" />
                          <figcaption className="caption">
                            {feature.category}
                          </figcaption>
                        </figure>
                        <div className="card-data flex justify-between items-end">
                          <h3>{feature.name}</h3>
                          <p>{<NumberFormat price={feature.price} />}</p>
                        </div>
                      </div>
                    </NavLink>
                  );
                })}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default FeatureProduct;
