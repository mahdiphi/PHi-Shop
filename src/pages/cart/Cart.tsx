import React from "react";
import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

function Cart() {
  return (
    <div>
        <Container>
      <div>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="bg-gray-200 mt-5">
        <p>Total price: 2,003</p>
        <p>Your discount: 100</p>
        <p>Final price: 1903</p>
      </div>
      <div className="mt-3 text-right">
        <Button variant="success">Final order registeration</Button>
      </div>
    </Container>
    </div>
  );
}

export default Cart;
