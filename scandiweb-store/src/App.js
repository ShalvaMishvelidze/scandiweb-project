import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './pages/Nav';
import MainPage from './pages/MainPage';
import SingleProduct from './pages/SingleProduct';

function App() {
  const [category, setCategory] = useState(0);
  const [currency, setCurrency] = useState(0);

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
            element={<SingleProduct currency={currency} />}
          />
          {/* <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
