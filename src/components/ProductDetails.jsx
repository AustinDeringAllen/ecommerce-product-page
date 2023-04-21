import { useState } from "react";
import { cartItem } from "../store";

const ProductDetails = () => {
  return (
    <>
      <ProductText />
      <ProductCart />
    </>
  );
};

const ProductText = () => {
  return (
    <div className="space-y-4 mb-10">
      <h3 className="uppercase text-normal-orange tracking-widest font-bold">
        Sneaker Company
      </h3>
      <h2 className="text-3xl font-bold lg:text-5xl">
        Fall Limited Edition Sneakers
      </h2>
      <p className=" text-dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
    </div>
  );
};

const ProductCart = () => {
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
    <div className="space-y-6">
      <div className="flex justify-between items-center font-bold lg:block">
        <p className="flex items-center gap-4">
          <span className="text-2xl">$125.00</span>
          <span className="text-normal-orange bg-pale-orange px-2 py-0.5 rounded-lg">
            50%
          </span>
        </p>
        <p className="line-through text-grayish-blue">$250.00</p>
      </div>
      <div className="space-y-6 lg:flex lg:gap-4 max-h-min lg:space-y-0">
        <div className="flex justify-between items-center p-4 bg-light-grayish-blue rounded-lg lg:w-2/5">
          <button
            onClick={() => setAmount((prev) => (prev - 1 < 0 ? 0 : prev - 1))}
          >
            <span className="sr-only">Lower Quantity</span>
            <img
              src="/ecommerce-product-page/images/icon-minus.svg"
              alt="Minus"
            />
          </button>
          <p>{amount}</p>
          <button onClick={() => setAmount((prev) => prev + 1)}>
            <span className="sr-only">Raise Quantity</span>
            <img
              src="/ecommerce-product-page/images/icon-plus.svg"
              alt="Plus"
            />
          </button>
        </div>
        <button
          className="w-full flex justify-center items-center gap-4 p-4 bg-normal-orange rounded-lg text-white font-bold lg:w-3/5"
          onClick={setCart}
        >
          <img src="/ecommerce-product-page/images/icon-cart.svg" />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
