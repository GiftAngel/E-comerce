import React, { useEffect, useState } from "react";
import { useStateValue } from "./CatContext/CartContext";
import CheckoutProduct from "./checkoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./CatContext/CartContextProvider";
import axios from "axios";


function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisable] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log("the secret key is", clientSecret);
  const submits = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({ type: "EMPTY_BASKET" });
        navigate("/orders");
      });
    console.log("hii");
  };
  const change = (event) => {
    setDisable(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>Busan</p>
            <p>South Korea</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment-items">
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
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">
            <form onSubmit={submits}>
              <CardElement onChange={change} />
              <div className="payment-priceConainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>
                      Order Total:<strong>{value}</strong>
                    </h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType="text"
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>processing</p> : "Buy now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
