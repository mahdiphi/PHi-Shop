import React, { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/api";

function Store() {
  const [product, setProduct] = useState([])

  useEffect(()=>{
    getProducts().then(result => {
      setProduct(result)
    })
  },[])

  return (
    <div>
      <Container>
        <h1 className="mt-5">New Products</h1>
        <div className="grid grid-cols-4 mt-5 gap-2">
          {product.map((item, i) => (
            <Link to={`/product/${i}`} key={item}>
              <ProductItem />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Store;
