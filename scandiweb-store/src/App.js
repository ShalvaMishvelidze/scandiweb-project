import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './pages/Nav';
import MainPage from './pages/MainPage';
import SingleProduct from './pages/SingleProduct';
import Error from './pages/Error';
import Cart from './pages/Cart';

function App() {
  const [category, setCategory] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Nav
              setCategory={setCategory}
              currency={currency}
              setCurrency={setCurrency}
            />
          }
        >
          <Route
            index
            element={<MainPage category={category} currency={currency} />}
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
