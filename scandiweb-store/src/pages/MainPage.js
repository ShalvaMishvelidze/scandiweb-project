import React from "react";
import useCategory from "../hooks/useCategory";
import { Link, useParams } from "react-router-dom";

export default function MainPage({ currency }) {
  const { categoryName } = useParams();
  const { error, data, loading } = useCategory(categoryName);

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
          const { id, gallery, name, prices } = product;
          return (
            <div className="products" key={id}>
              <Link to={`/products/${id}`}>
                <img src={gallery[0]} alt={name} />
                <div>
                  <p className="name">{name}</p>
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
