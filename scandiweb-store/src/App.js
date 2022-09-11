import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import MainPage from "./pages/MainPage";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import useIndexPageQuerry from "./hooks/useIndexPageQuerry";
import IndexPage from "./pages/IndexPage";

function App() {
  const [currency, setCurrency] = useState(0);
  const [cart, setCart] = useState([]);

  const { error, data, loading } = useIndexPageQuerry();

  console.log(error, data, loading);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Nav currency={currency} setCurrency={setCurrency} />}
        >
          <Route index element={<IndexPage currency={currency} />} />
          <Route
            path="/:categoryName"
            element={<MainPage currency={currency} />}
          />
          <Route
            path="/products/:productId"
            element={
              <SingleProduct
                currency={currency}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
