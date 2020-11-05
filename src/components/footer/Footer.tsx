import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: ${(props) => props.theme.colors.dark};
  min-height: 8rem;
  color: ${(props) => props.theme.colors.yellow};
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Footer = (props: any) => {
  return (
    <FooterWrapper>
      <div className="container">
        <h2>
          Copyright &copy; {new Date().getFullYear()}
          ProShop
        </h2>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
