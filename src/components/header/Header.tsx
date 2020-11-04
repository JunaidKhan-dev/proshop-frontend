import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
`;

const Header = (props: any) => {
  return (
    <header>
      <Button>Header </Button>
    </header>
  );
};

export default Header;
