import React from "react";
import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { Link } from "react-router-dom";

function Store() {
  const arr = [1, 2, 3, 4, 5];

  return (
    <div>
      <Container>
        <h1 className="mt-5">New Products</h1>
        <div className="grid grid-cols-4 mt-5 gap-2">
          {arr.map((_, i) => (
            <Link to={`/product/${i + 1}`} key={i}>
              <ProductItem />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Store;
