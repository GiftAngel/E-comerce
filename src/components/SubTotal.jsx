import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./CatContext/CartContext";
import { getBasketTotal } from "./CatContext/CartContextProvider";
import {  useNavigate } from "react-router-dom";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="subtotal-button" onClick={(e) => navigate("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default SubTotal;
