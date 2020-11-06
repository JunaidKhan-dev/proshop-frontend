import React from "react";
import styled from "styled-components";
import Product from "../components/product/Product";
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
  return (
    <SectionWrapper className="container">
      <h1>Latest Products</h1>
      <article>
        {products.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </article>
    </SectionWrapper>
  );
};

export default Home;
