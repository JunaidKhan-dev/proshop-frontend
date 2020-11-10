import React from "react";
import { Route, Switch } from "react-router";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";

const App = (props: any) => {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route
            to="/"
            exact
            render={(routerProps: any) => <Home {...routerProps} />}
          />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default App;
