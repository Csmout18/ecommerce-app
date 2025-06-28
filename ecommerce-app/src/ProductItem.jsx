import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ product }) => (
  <div className="product-item">
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  }),
};

export default ProductItem;