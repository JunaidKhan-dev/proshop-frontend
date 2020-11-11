import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import products from "../products";
const DivWrapper = styled.div`
  padding-top: 2rem;
  a {
    margin-top: 3rem;
    padding: 7px 14px;
    display: block;
    text-align: left;
    color: ${(p) => p.theme.colors.dark};
    transition: transform 0.5s ease-in-out;
    :hover {
      transform: scale(1.05);
    }
  }

  article {
    margin: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    img {
      width: 40%;
    }
    div {
      margin-left: 6rem;
      h2,
      p {
        max-width: 300px;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid ${(props) => props.theme.colors.orange};
        &.description {
          padding-top: 1rem;
          border-bottom: none;
          font-size: 1.8rem;
        }
      }
      h2 {
        padding-top: 0;
      }
    }
    .add-to-cart {
      border: 4px solid ${(props) => props.theme.colors.light};
      align-self: flex-start;
      padding: 2rem 4rem;
      p {
        border: none;
      }
      button {
        cursor: pointer;
        padding: 7px 14px;
        background: ${(p) => p.theme.colors.orange};
        outline: none;
        border: none;
        color: ${(p) => p.theme.colors.yellow};
        transition: transform 0.5s ease-in-out;
        :hover {
          transform: scale(1.05);
        }
      }
    }
  }
`;
interface Props {
  match: any;
}

const ProductDetail: FC<Props> = ({ match }) => {
  const { id } = match.params;
  const product = products.find((product) => product._id === id);
  return (
    <DivWrapper className="container">
      Product Details
      {product && (
        <article>
          <img src={product.image} alt={product.name} />
          <div>
            <h2>{product.name}</h2>
            <p>
              {`⭐`.repeat(product.rating)}
              <span style={{ filter: `grayscale(100%)` }}>
                {`⭐`.repeat(5 - product.rating)}{" "}
              </span>
              from {product.numReviews} reviews
            </p>
            <p>Price: {product.price}</p>
            <p className="description">{product.description}</p>
          </div>
          <div className="add-to-cart">
            <p>Price: {product.price}</p>
            <p>
              Status: {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <button>ADD TO CART</button>
          </div>
        </article>
      )}
      <Link to="/">Go Back</Link>
    </DivWrapper>
  );
};

export default ProductDetail;
