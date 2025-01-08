import { useState, useEffect } from "react";

const AddToCart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
  ];

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.some((item) => item.id === product.id);
      if (isProductInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="p-6 bg-base-200 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Add to Cart Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product List */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          <div className="grid gap-4">
            {products.map((product) => (
              <div key={product.id} className="card bg-base-100 shadow-md p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <p className="text-sm text-gray-600">${product.price}</p>
                  </div>
                  <button  className="relative btn  inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-900  rounded-lg group" onClick={() => addToCart(product)}>
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#8C593C] rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <btn className="relative " >Add to Cart</btn>
            </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Cart</h2>
          <div className="bg-base-100 p-4 rounded shadow-md">
            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <div>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b py-2"
                  >
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        ${item.price} x {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        className="input input-bordered w-16"
                        value={item.quantity}
                        min={1}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      />
                      
                      <button onClick={() => removeFromCart(item.id)}  className="relative inline-block btn-sm  group">
    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight  transition-colors duration-300 ease-out border-2 border-rose-500 rounded-lg group-hover:text-rose-950">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-rose-500 group-hover:-rotate-180 ease"></span>
        <span className="relative">Remove</span>
    </span>
    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-rose-500 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</button>
                    </div>
                  </div>
                ))}
                <div className="mt-4 text-lg font-bold">
                  Total: ${total.toFixed(2)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Place Order Section */}
      {cart.length > 0 && (
        <div className="mt-8 p-4 bg-base-100 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Place Order</h2>
          <p className="mb-4">Total Amount: ${total.toFixed(2)}</p>
          
          <button onClick={handlePlaceOrder}  className="relative w-full  btn inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-900 rounded-lg group">
  <span className="absolute inset-0 w-full h-full transition-all duration-500 ease-in-out bg-[#8C593C] rounded-lg scale-0 group-hover:scale-100"></span>
  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
  <span className="relative">Place Order</span>
</button>

        </div>
      )}
    </div>
  );
};

export default AddToCart;
