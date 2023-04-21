import { useState } from "react";
import { cartItem } from "../store";

const ProductCartDetails = () => {
  const [amount, setAmount] = useState(0);

  const setCart = () => {
    if (amount <= 0) {
      return;
    }
    cartItem.set({
      name: "Fall Limited Edition Sneakers",
      price: 125,
      amount: amount,
    });
  };

  return (
    <div className="space-y-5 mt-8">
      <div className="flex items-center gap-4">
        <span className="text-3xl font-bold">$125.00</span>
        <span className="text-normal-orange font-bold bg-pale-orange rounded-md px-2">
          50%
        </span>
        <span className="ml-auto text-grayish-blue line-through">$250.00</span>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center p-4 bg-light-grayish-blue rounded-lg">
          <button
            onClick={() => setAmount((prev) => (prev - 1 < 0 ? 0 : prev - 1))}
          >
            <img
              src="/ecommerce-product-page/images/icon-minus.svg"
              alt="Minus"
            />
          </button>
          <p className="font-bold">{amount}</p>
          <button onClick={() => setAmount((prev) => prev + 1)}>
            <img
              src="/ecommerce-product-page/images/icon-plus.svg"
              alt="Plus"
            />
          </button>
        </div>

        <button
          className="flex justify-center items-center gap-4 p-4 text-white font-bold bg-normal-orange rounded-lg"
          onClick={setCart}
        >
          <img src="/ecommerce-product-page/images/icon-cart.svg" alt="Cart" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCartDetails;
