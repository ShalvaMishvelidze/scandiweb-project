import React from "react";
import useIndexPageQuerry from "../hooks/useIndexPageQuerry";
import { Link } from "react-router-dom";

export default function IndexPage({ currency }) {
  const { error, data, loading } = useIndexPageQuerry();

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>something went wrong...</div>;
  }
  const category = data?.category;
  return (
    <main className="main">
      <p className="category-name">{category.name}</p>
      <div className="container">
        {category.products.map((product) => {
          const { id, gallery, name, brand, prices } = product;
          return (
            <div className="products" key={id}>
              <Link to={`/products/${id}`}>
                <img src={gallery[0]} alt={name} className="products-img" />
                <div className="products-desc">
                  <p className="name">
                    {name} {brand}
                  </p>
                  <p className="price">
                    {prices[currency].currency.symbol}
                    {prices[currency].amount}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
