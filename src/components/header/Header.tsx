import React from "react";
import styled from "styled-components";
import { FaThemeco, FaShoppingCart, FaUser } from "react-icons/fa";
const HeaderWrapper = styled.header`
  background: ${(props) => props.theme.colors.orange};
  color: ${(props) => props.theme.colors.light};
  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    min-height: 8rem;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 50px;
      font-size: 3rem;
      text-shadow: 7px 4px 10px ${(props) => props.theme.colors.dark};
      cursor: pointer;
      i {
        align-self: center;
        vertical-align: center;
        display: inline-flex;
        margin-left: 0.5rem;
        font-size: 5rem;
        color: ${(props) => props.theme.colors.yellow};
      }
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    li {
      display: inline-block;
      margin: 0 1rem;
      a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.yellow};
        display: flex;
        align-items: center;
        justify-content: center;
        i {
          margin: 0 0.3rem;
        }
      }
    }
  }
`;
const Header = (props: any) => {
  return (
    <HeaderWrapper>
      <nav className="container">
        <span onClick={() => console.log("go to home")}>
          ProShop{" "}
          <i>
            <FaThemeco />
          </i>
        </span>
        <ul>
          <li>
            <a href="#">
              <i>
                <FaShoppingCart />
              </i>{" "}
              CART
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <FaUser />
              </i>
              SIGN IN
            </a>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
