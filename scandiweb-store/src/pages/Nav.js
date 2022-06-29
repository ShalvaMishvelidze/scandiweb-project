import React, { useState } from 'react';
import useCategories from '../hooks/useCategories';
import { NavLink, Outlet } from 'react-router-dom';

function Nav() {
  const { error, data, loading } = useCategories();
  const [dropdown, setDropdown] = useState(false);
  const [category, setCategory] = useState(0);
  const [currency, setCurrency] = useState(0);

  if (error) {
    return <h2>something went wrong</h2>;
  }
  if (loading) {
    return <h2>loading...</h2>;
  }

  console.log(data);
  const categories = data.categories;
  const currencies = data.currencies;
  console.log(currencies);

  return (
    <nav>
      <div className="nav">
        <div className="categories">
          {categories.map((category, index) => {
            return (
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                <button key={index} onClick={() => setCategory(0)}>
                  {category.name}
                </button>
              </NavLink>
            );
          })}
        </div>
        <div className="currency-container">
          <button
            className="currency-changer"
            onClick={() => setDropdown(!dropdown)}
          >
            {currencies[currency].symbol}
          </button>
          <div
            className={
              dropdown ? `dropdown-menu display-block` : `dropdown-menu`
            }
          >
            {currencies.map((currency, index) => {
              console.log(currency, index);
              return (
                <button
                  className="currency-btn"
                  key={index}
                  onClick={() => setCurrency(index)}
                >
                  {currency.symbol} {currency.label}
                  <span></span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <section>
        <Outlet />
      </section>
    </nav>
  );
}

export default Nav;
