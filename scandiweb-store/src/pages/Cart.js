import React from 'react';

export default function Cart({ cart }) {
  return (
    <div className="cart-items">
      {cart.map((item) => {
        return (
          <section key={item.id}>
            <img src={item.gallery[0]} alt={item.name} />
            <p>{item.name}</p>
          </section>
        );
      })}
    </div>
  );
}
