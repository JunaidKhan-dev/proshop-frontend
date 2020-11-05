import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  padding-top: 1rem;
  h1 {
    font-size: ${(props) => props.theme.typos.sizes.XL};
  }
`;
const Home = () => {
  return (
    <SectionWrapper className="container">
      <h1>Welcome to HomePage</h1>
    </SectionWrapper>
  );
};

export default Home;
