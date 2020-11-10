import React from "react";
import { Route, Switch } from "react-router";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

const App = (props: any) => {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps: any) => <Home {...routerProps} />}
          />
          <Route
            path="/product/:id"
            exact
            render={(routerProps: any) => <ProductDetail {...routerProps} />}
          />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default App;
