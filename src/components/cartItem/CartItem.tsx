import { useEffect, useState } from "react";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import Button from "../button/Button";
import type { IProduct } from "../../types/server";
import { getProduct } from "../../services/api";
import { Link } from "react-router-dom";

interface ICartItem {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItem) {
  const [product, setProduct] = useState<IProduct>();

  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();

  useEffect(() => {
    getProduct(id).then((data) => setProduct(data));
  }, []);

  return (
    <div className="flex mt-5 border-b">
      <Link to={`/product/${id}`}><img src={product?.image} className="w-28" /></Link>
      <div>
        <h2>{product?.title}</h2>
        <div className="mt-2">
          <Button
            className="mr-2"
            variant="danger"
            onClick={() => handleRemoveProduct(id)}
          >
            Remove
          </Button>
          <Button
            className="mr-2"
            variant="primary"
            onClick={() => handleIncreaseProductQty(id)}
          >
            +
          </Button>
          <span className="mr-2">{qty}</span>
          <Button
            variant="primary"
            onClick={() => handleDecreaseProductQty(id)}
          >
            -
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
