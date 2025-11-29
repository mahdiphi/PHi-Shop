import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import "./App.css";
import Layout from "./components/layout/Layout";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import { useShoppingCartContext } from "./context/ShoppingCartContext";
import Login from "./pages/login/Login";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

function App() {
  const { isLogin } = useShoppingCartContext();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/login"
          element={isLogin ? <Navigate to="/" /> : <Login />}
        />
        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
