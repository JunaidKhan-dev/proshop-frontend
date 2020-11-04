import React from "react";
import Layout from "./components/layout/Layout";

const App = (props: any) => {
  return (
    <>
      <Layout>{props.children}</Layout>
    </>
  );
};

export default App;
