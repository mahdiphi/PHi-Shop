import React from "react";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import Container from "../../components/container/Container";

function Login() {
  const { handleLogin, isLogin } = useShoppingCartContext();
  console.log(isLogin);
  return (
    <div>
      <Container>
        <div className="bg-amber-500 p-15 ">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </Container>
    </div>
  );
}

export default Login;
