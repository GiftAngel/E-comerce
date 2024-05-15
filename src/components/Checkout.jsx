import React from "react";
import SubTotal from "./SubTotal";
import CheckoutProduct from "./checkoutProduct";
import { useStateValue } from "./CatContext/CartContext";


function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/Amazon_Music_Merch/HVE/T11_2023/NEW_T11_2023/FINAL_T11_2023/111723_USEN_ArtistMerch_Hero_Website_D_CDsVinyl_1500x375.jpg"
          alt="an ad showing"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout-title">Your Shopping Basket</h2>
         
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        
        </div>
      </div>
      <div className="checkout-right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
