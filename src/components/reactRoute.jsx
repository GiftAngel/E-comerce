import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const ReactRoutes = () => {
  return (
    <Fragment>
      <Header />
      
      <Outlet />
      <Footer/>
    </Fragment>
  );
};
export default ReactRoutes;
