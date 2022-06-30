import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';

export default function SingleProduct({ currency, cart, setCart }) {
  const { productId } = useParams();
  const { error, data, loading } = useProduct(productId);
  const [image, setImage] = useState(0);
  // const [cartItem, setCartItem] = useState({});

  if (loading) {
    return <h3>loading...</h3>;
  }
  if (error) {
    return <h3>something went wrong</h3>;
  }

  const product = data.product;

  const cartProduct = {
    name: product.name,
    id: product.id,
    gallery: product.gallery,
    description: product.description,
    attributes: product.attributes,
    prices: product.prices,
    brand: product.brand,
  };

  function addToCart(id) {
    setCart([...cart, cartProduct]);
  }

  const { name, id, gallery, description, attributes, prices, brand } =
    cartProduct;

  let scroll = false;

  if (description.length > 248) {
    scroll = true;
  }

  return (
    <div className="product">
      <div className="image-container">
        {gallery.map((image, index) => {
          return (
            <button
              key={index}
              className="img-btn"
              onClick={() => setImage(index)}
            >
              <img key={image} src={image} alt={name} />
            </button>
          );
        })}
      </div>
      <img className="product-image" src={gallery[image]} alt={name} />
      <div className="product-content">
        <h1>
          {brand} {name}
        </h1>
        {attributes &&
          attributes.map((attribute) => {
            const { id, name, items } = attribute;
            return (
              <div key={id} className="attribute-container">
                <h1>{name}:</h1>
                <div className="items-container">
                  {name === 'Color' &&
                    items.map((item) => {
                      const { displayValue, value, id } = item;
                      return (
                        <div key={id}>
                          <div
                            className="color-container"
                            style={{ backgroundColor: `${value}` }}
                          ></div>
                          <p>{displayValue}</p>
                        </div>
                      );
                    })}
                  {name !== 'Color' &&
                    items.map((item) => {
                      const { value, id } = item;
                      return (
                        <div key={id}>
                          <div className="other-att-container">
                            <span>{value}</span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
        <h1>Price:</h1>
        <h1>
          {prices[currency].amount}
          {prices[currency].currency.symbol}
        </h1>
        <button className="cart-btn" onClick={() => addToCart(id)}>
          add to cart
        </button>
        <div className={scroll ? 'scroll-bg' : undefined}>
          <div className={scroll ? 'scroll-div' : undefined}>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
