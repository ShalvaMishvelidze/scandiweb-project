import React from 'react';
import { useProducts } from '../hooks/useProducts';
import { Link } from 'react-router-dom';

export default function MainPage({ category, currency }) {
  const { error, data, loading } = useProducts();

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>something went wrong...</div>;
  }
  const categories = data.categories[category];
  return (
    <main className="main">
      <p className="category-name">{categories.name}</p>
      <div className="container">
        {categories.products.map((product) => {
          const { id, gallery, name, prices } = product;
          return (
            <div className="products" key={id}>
              <Link to={`/products/${id}`}>
                <img src={gallery[0]} alt={name} />
                <div>
                  <p className="name">{name}</p>
                  <p className="price">
                    {prices[currency].amount}
                    {prices[currency].currency.symbol}
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
