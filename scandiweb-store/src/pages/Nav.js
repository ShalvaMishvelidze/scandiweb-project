import React, { useState } from "react";
import useCategories from "../hooks/useCategories";
import { NavLink, Outlet } from "react-router-dom";

function Nav({ currency, setCurrency }) {
  const [dropdown, setDropdown] = useState(false);
  const { error, data, loading } = useCategories();

  if (error) {
    return <h2>something went wrong</h2>;
  }
  if (loading) {
    return <h2>loading...</h2>;
  }

  const categories = data?.categories;
  const currencies = data?.currencies;

  return (
    <nav
      onClick={() => {
        if (dropdown) {
          setDropdown(!dropdown);
        }
      }}
    >
      <div className="nav">
        <div className="categories">
          {categories.map((category, index) => {
            return (
              <NavLink to={index === 0 ? `/` : `/${category.name}`} key={index}>
                {({ isActive }) => (
                  <div className={isActive ? "link active-div" : "link"}>
                    {category.name}
                  </div>
                )}
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
              return (
                <div
                  className="currency-btn"
                  key={index}
                  onClick={() => {
                    setCurrency(index);
                    setDropdown(false);
                  }}
                >
                  {currency.symbol} {currency.label}
                  <span></span>
                </div>
              );
            })}
          </div>
        </div>
        <NavLink to={"/cart"}>Cart</NavLink>
      </div>
      <section>
        <Outlet />
      </section>
    </nav>
  );
}

export default Nav;
