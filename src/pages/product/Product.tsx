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

  const {
    cartItems,
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    getProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();

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
              {getProductQty(parseInt(params.id as string)) === 0 ? (
                <Button
                  className="mt-2 w-full py-3"
                  variant="success"
                  onClick={() =>
                    handleIncreaseProductQty(parseInt(params.id as string))
                  }
                >
                  Add to Cart
                </Button>
              ) : (
                <>
                <div className="grid grid-cols-3">
                  <Button
                    className="mt-2 w-full"
                    variant="success"
                    onClick={() =>
                      handleIncreaseProductQty(parseInt(params.id as string))
                    }
                  >
                    +
                  </Button>
                  <span className="flex justify-center items-center">
                    {getProductQty(parseInt(params.id as string))}
                  </span>
                  <Button
                    className="mt-2 w-full"
                    variant="success"
                    onClick={() =>
                      handleDecreaseProductQty(parseInt(params.id as string))
                    }
                  >
                    -
                  </Button>
                </div>
                <Button
                    className="mt-2 w-full"
                    variant="danger"
                    onClick={() =>
                      handleRemoveProduct(parseInt(params.id as string))
                    }
                  >
                    Remove
                  </Button>
                </>

              )}
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
