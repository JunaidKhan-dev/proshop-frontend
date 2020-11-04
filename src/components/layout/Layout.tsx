import React, { ReactNode } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

interface Props {
  children: {
    content: ReactNode;
  };
}
const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
