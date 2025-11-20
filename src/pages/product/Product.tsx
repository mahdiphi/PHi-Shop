import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { getProduct } from "../../services/api";
import type { IProduct } from "../../types/server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Product() {
  const params = useParams<{ id: string }>();

  const [product, setProduct] = useState<IProduct>();

  const { cartItems, handleIncreaseProductQty, handleDecreaseProductQty } =
    useShoppingCartContext();

  useEffect(() => {
    getProduct(params.id as string).then((data) => {
      setProduct(data);
    });
  }, []);

  console.log(cartItems);

  return (
    <div>
      <Container>
        <div className="h-96 shadow grid grid-cols-12 mt-5">
          <div className="bg-amber-300 col-span-2 p-4">
            <img className="rounded" src={product?.image} alt="" />
            <div>
              <Button
                onClick={() =>
                  handleIncreaseProductQty(parseInt(params.id as string))
                }
                className="mt-2 w-full py-3"
                variant="success"
              >
                Add to Cart
              </Button>
              <Button
                onClick={() =>
                  handleDecreaseProductQty(parseInt(params.id as string))
                }
                className="mt-2 w-full py-3"
                variant="success"
              >
                -
              </Button>
            </div>
          </div>
          <div className="bg-gray-800 col-span-10 p-4">
            <h1 className="text-cyan-50">{product?.title}</h1>
            <div className="text-cyan-50">
              <p>Price: {product?.price}$</p>
              <p>{product?.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
