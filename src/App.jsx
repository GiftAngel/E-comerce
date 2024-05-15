import React, { useEffect } from "react";
import ReactRoutes from "./components/reactRoute";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import { useStateValue } from "./components/CatContext/CartContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";
const promise = loadStripe(
  "pk_test_51OG5dyHGnl8bD57wVqdDpeXUYbrZ7ATl3CR4Viklgl09fNznaGB0u4cXaZ2b1QHoFoVRMq8u3UIUDWxzMqmkdyns00s0064vH6"
);

const Router = createBrowserRouter([
  {
    path: "/",
    element: <ReactRoutes />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "checkout", element: <Checkout /> },
      {
        path: "payment",
        element: (
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        ),
      },
      { path: "orders", element: <Orders /> },
    ],
  },
]);
export default function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const auths = getAuth();
    onAuthStateChanged(auths, (authUser) => {
      console.log("THE USER IS >>> ", authUser.email);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <RouterProvider router={Router}>
      <div className="app" />
    </RouterProvider>
  );
}
