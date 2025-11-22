import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import Button from "../button/Button";

function Navbar() {
  const { cartQty,handleLogout } = useShoppingCartContext();

  return (
    <div className="h-14 border-2 shadow flex items-center">
      <Container>
        <div className="flex justify-between">
          <ul className="flex">
            <li className="mr-4">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-4">
              <Link to="/store">Store</Link>
            </li>
          </ul>
          <Link className="relative" to="/cart">
            <span className="absolute w-5 h-5 bg-red-600 text-white flex justify-center items-center -left-6 top-0.5 rounded-full text-sm">
              {cartQty}
            </span>
            <button className="cursor-pointer">Store Cart</button>
          <Button onClick={handleLogout}>Logout</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
