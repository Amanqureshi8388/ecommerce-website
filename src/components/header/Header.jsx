import React from "react";
import { RxCross2 } from "react-icons/rx";
import { RiShoppingCart2Line } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";
import "./header.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SiElement } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { cartItem } from "../../store/AddToCartSlice";

const Header = () => {
  const [menuBar, setmenuBar] = useState();
  const { AddCartData , total_cart_item } = useSelector((state) => state.AddToCartReducer);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const pathname = useLocation().pathname
  const splitLocation = pathname.split("/")
  const [account, setAccount] = useState(true);
  const dispatch = useDispatch();

 
  useEffect(()=>{
       dispatch(cartItem())
  },[dispatch,AddCartData])

  return (
    <header>
      <div className="logo">
        <p>
          <SiElement />
        </p>
      </div>
      <nav className={menuBar ? " nav active" : "nav"}>
        {/* <nav className='nav'> */}
        <ul>
          <div className="close-menu cursor-pointer">
            <RxCross2 onClick={() => setmenuBar(false)} />
          </div>
          <li>
            <NavLink to="/" className={splitLocation[1] === "" ? "activelink":"navlink"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={splitLocation[1] === "about" ? "activelink":"navlink"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={splitLocation[1] === "products" ? "activelink":"navlink"}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={splitLocation[1] === "contact" ? "activelink":"navlink"}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={splitLocation[1] === "cart" ? "activelink":"navlink"}>
              <div className="addCart">
                <RiShoppingCart2Line />
                <div>{total_cart_item}</div>
              </div>
            </NavLink>
          </li>
          <li className="user-li">
            {
             isAuthenticated ? (
              <img className="img" src={user.picture} alt={user.name} onClick={() => setAccount(!account)}/>
             ) : (
            <FaUserCircle
              className="user-icon"
              onClick={() => setAccount(!account)}
            />)
            }
            <div className={account ? "hidden" : "active-profile"}>
            {  isAuthenticated && (
              <div>
                <img src={user.picture} alt={user.name} />
                <hr className=" border border-black" />
                <h2 className=" mt-4">{user.name}</h2>
                <p className="mb-5">{user.email}</p>
              </div>
              )}
              {isAuthenticated ? (
                <div>
                  <button
                    className="MainBtn"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    {" "}
                    Log Out{" "}
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    className="MainBtn"
                    onClick={() => loginWithRedirect()}
                  >
                    Log In
                  </button>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
      <div className="mobile-menu cursor-pointer">
        <HiMenu onClick={() => setmenuBar(true)} />
      </div>
    </header>
  );
};

export default Header;
