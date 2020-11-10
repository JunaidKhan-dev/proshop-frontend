import React from "react";
import { Link } from "react-router-dom";

const ProductDetail = (props: any) => {
  const { id } = props.match.params;
  console.log(id);
  return (
    <div>
      Product Details
      <Link to="/">Home</Link>
    </div>
  );
};

export default ProductDetail;
