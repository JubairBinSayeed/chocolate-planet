import React, { useState } from 'react';

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart!`);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl p-4">
      <figure>
        <img
          src="https://via.placeholder.com/150"
          alt="Product"
          className="rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Product Name</h2>
        <p className="text-gray-600">$20.00</p>
        <div className="flex items-center space-x-4 mt-4">
          <button
            className="btn btn-sm btn-outline"
            onClick={decreaseQuantity}
            disabled={quantity === 1}
          >
            -
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button className="btn btn-sm btn-outline" onClick={increaseQuantity}>
            +
          </button>
        </div>
        <button
          className="btn btn-primary mt-4 w-full"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
