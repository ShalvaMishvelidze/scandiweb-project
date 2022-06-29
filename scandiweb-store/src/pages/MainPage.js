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
    <>
      <h2 className="category-name">{categories.name}</h2>
      <div className="container">
        {categories.products.map((product) => {
          const { id, gallery, name, prices } = product;
          return (
            <div key={id}>
              <Link to={`/products/${id}`}>
                <img src={gallery[0]} alt={name} />
                <div>
                  <h3>{name}</h3>
                  <p>
                    {prices[currency].amount}
                    {prices[currency].currency.symbol}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
