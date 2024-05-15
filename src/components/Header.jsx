import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./CatContext/CartContext";
import { motion } from "framer-motion";

import { auth } from "./firebase";

export default function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        {" "}
        <img
          className="header-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbaBJuxW9NmwG9uTK9SrkA2p-j3jV5K3Zk5yDPvGnA4A&s"
        />
      </Link>

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="header-searchIcon"
        >
          <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
        </svg>
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header-option">
            <span className="header-optionOne">
              Hello Guest
            </span>
            <h2 className="header-optionTwo">
             Subscribe
            </h2>
          </div>
        </Link>
       
        <div className="header-option">
          {" "}
          <span className="header-optionOne">Shipping</span>
          <span className="header-optionTwo">Cart</span>
        </div>
        <div className="header-optionBasket">
          <Link to="/checkout">
            <motion.svg
              className="shopping-cart"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.3 }}
              key={basket?.length}
            >
              <path
                fill="#fff"
                d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"
              ></path>
            </motion.svg>
          </Link>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.3 }}
            key={basket?.length}
            className="header-optionTwoBasket"
          >
            {basket?.length}
          </motion.span>
        </div>
      </div>
    </div>
  );
}
