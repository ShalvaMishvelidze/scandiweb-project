import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';

export default function SingleProduct({ currency }) {
  const { productId } = useParams();
  const { error, data, loading } = useProduct(productId);
  const [image, setImage] = useState(0);

  if (loading) {
    return <h3>loading...</h3>;
  }
  if (error) {
    return <h3>something went wrong</h3>;
  }

  const product = data.product;
  const attributes = product.attributes;

  if (attributes) {
    return (
      <div className="product">
        <div className="image-container">
          {product.gallery.map((image, index) => {
            return (
              <button
                key={index}
                className="img-btn"
                onClick={() => setImage(index)}
              >
                <img key={image} src={image} alt={product.name} />
              </button>
            );
          })}
        </div>
        <img
          className="product-image"
          src={product.gallery[image]}
          alt={product.name}
        />
        <div className="product-content">
          <h1>
            {product.brand} {product.name}
          </h1>
          {/* {attributes.map((attribute) => {
            return (
              <div key={attribute.id} className="attribute-container">
                <h1>{attribute.name}</h1>
                {attribute.items.map((item) => {
                    return (
                        <div className="atribute-values">
                            <div style={ attribute.name = 'color' ? {`color: ${attribute.color}`} } className="atribute-color"></div>

                        </div>
                    )
                })}
              </div>
            );
          })} */}
        </div>
      </div>
    );
  }

  return <div>SIngleProduct</div>;
}
