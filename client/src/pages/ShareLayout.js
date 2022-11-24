import React from "react";

import { Outlet } from "react-router-dom";
import {
  BigNavbar,
  Footer,
  ScrollTop,
  SmallNavbar,
  SubScribe,
} from "../Components";

const ShareLayout = () => {
  return (
    <>
      <BigNavbar />
      <SmallNavbar />
      {<Outlet />}
      <SubScribe />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default ShareLayout;
