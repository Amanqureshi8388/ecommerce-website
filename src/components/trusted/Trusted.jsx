import React from "react";
import "./trusted.scss";
import { SiNintendogamecube } from "react-icons/si";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { DiIntellij, DiPhotoshop, DiWebplatform } from "react-icons/di";

const Trusted = () => {
  return (
    <>
      <section className="trustedsection">
        <div className="container">
          <div className="wrapper">
            <h3>Trusted by the 1000+ company</h3>
            <div className="companies grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5  items-center justify-center gap-10 sm:gap-4">
              <div className="company">
                <div>
                  <SiNintendogamecube className="icon" />
                  <span>LOGIC+</span>
                </div>
              </div>
              <div className="company">
                <div>
                  <HiOutlineChartSquareBar className="icon" />
                  <span>LINE</span>
                </div>
              </div>
              <div className="company">
                <div>
                  <DiIntellij className="icon" />
                  <span>INTELLIJ</span>
                </div>
              </div>
              <div className="company">
                <div>
                  <DiPhotoshop className="icon" />
                  <span>PHOTOSHOP</span>
                </div>
              </div>
              <div className="company">
                <div>
                  <DiWebplatform className="icon" />
                  <span>WEBPLATFROM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trusted;
