import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Product from "../components/product/Product";
import Spinner from "../components/spinner/Spinner";
import products from "../products";

const SectionWrapper = styled.section`
  padding: 2rem 0;
  h1 {
    font-size: ${(props) => props.theme.typos.sizes.XL};
    color: ${(props) => props.theme.colors.dark};
    margin-bottom: ${(props) => props.theme.typos.sizes.MD};
  }
  article {
    display: grid;
    grid-template-columns: 1fr;
    div {
      text-align: center;
    }
  }

  /* media queries */

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    article {
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
    article {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1rem;
    }
  }
`;

const Home = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const spinnerTimeout = window.setTimeout(() => {
      setShow(true);
      console.log("timeout trigger");
    }, 500);

    return () => {
      window.clearTimeout(spinnerTimeout);
    };
  }, []);
  return (
    <SectionWrapper className="container">
      <h1>Latest Products</h1>
      {!show && (
        <motion.div>
          <Spinner />
        </motion.div>
      )}

      {show && (
        <motion.article
          transition={{ duration: 1.5 }}
          animate={{ opacity: 1 }}
          style={{ opacity: 0.1 }}
        >
          {products.map((product) => {
            return <Product key={product._id} product={product} />;
          })}
        </motion.article>
      )}
    </SectionWrapper>
  );
};

export default Home;
