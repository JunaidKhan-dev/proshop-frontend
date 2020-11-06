import React from "react";
import styled from "styled-components";

const DivWrapper = styled.div`
  background: whitesmoke;
  a {
    display: block;
    text-decoration: none;
    color: ${(props) => props.theme.colors.dark};
    overflow: hidden;
    img {
      transition: all 0.5s ease-in-out;
    }
    :hover img {
      transform: scale(1.1);
    }

    h3 {
      margin: 1rem 0;
    }
  }

  .detail {
    p {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }
    h5 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
      font-weight: 300;
    }
  }
`;
const Product = (props: any) => {
  const rating = Math.round(parseFloat(props.product.rating));
  const { product } = props;
  return (
    <DivWrapper>
      <a href={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} />
      </a>
      <a href={`/product/${product._id}`}>
        <h3>{product.name}</h3>
      </a>

      <div className="detail">
        <p>
          {`⭐`.repeat(rating)}
          <span style={{ filter: `grayscale(100%)` }}>
            {`⭐`.repeat(5 - rating)}{" "}
          </span>
          from {product.numReviews} reviews
        </p>
        <h5>${product.price}</h5>
      </div>
    </DivWrapper>
  );
};

export default Product;
