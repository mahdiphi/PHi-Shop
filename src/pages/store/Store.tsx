import React, { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/api";
import type { IProduct } from "../../types/server";

function Store() {
  const [product, setProduct] = useState<IProduct[]>([])

  useEffect(()=>{
    getProducts().then(result => {
      setProduct(result)
    })
  },[])

  console.log(product)

  return (
    <div>
      <Container>
        <h1 className="mt-5">New Products</h1>
        <div className="grid grid-cols-4 mt-5 gap-2">
          {product.map((item, index) => (
            <Link to={`/product/${item.id}`} key={index}>
              <ProductItem {...item} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Store;
