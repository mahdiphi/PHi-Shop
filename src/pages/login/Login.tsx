import React, { useState, type ChangeEventHandler } from "react";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import Container from "../../components/container/Container";

function Login() {
  const { handleLogin, isLogin } = useShoppingCartContext();

  const [ user, setUser ] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <Container>
        <div className="bg-amber-500 p-15 ">
          <input
            onChange={handleChange}
            type="text"
            placeholder="username"
            name="username"
            value={user.username}
          />
          <input
            onChange={handleChange}
            type="password"
            placeholder="password"
            name="password"
            value={user.password}
          />
          <Button onClick={() => handleLogin(user.username, user.password)}>Login</Button>
        </div>
      </Container>
    </div>
  );
}

export default Login;
