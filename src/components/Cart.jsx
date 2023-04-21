import { useStore } from "@nanostores/react";
import { useState } from "react";
import { cartItem, itemAmount } from "../store";

const Cart = () => {
  const [open, setOpen] = useState(false);

  const $cartItem = useStore(cartItem);

  return (
    <>
      <button
        className="relative cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        {$cartItem && (
          <div className="absolute -top-2 -right-2 bg-normal-orange rounded-full text-xs text-white px-2">
            {$cartItem.amount}
          </div>
        )}

        <img
          src="/ecommerce-product-page/images/icon-cart.svg"
          alt="Cart Icon"
        />
      </button>

      {open && <CartInventory />}
    </>
  );
};

const CartInventory = () => {
  const $cartItem = useStore(cartItem);

  return (
    <div className="absolute top-20 inset-x-2 bg-white rounded-md z-10 shadow-xl lg:w-[375px] lg:right-0">
      <h3 className="font-bold p-4">Cart</h3>
      <hr />
      {!$cartItem ? <EmptyCart /> : <FullCart storeCart={$cartItem} />}
    </div>
  );
};

const EmptyCart = () => {
  return (
    <div className="grid place-items-center w-full py-28">
      <p className="text-darl-grayish-blue font-bold">Your cart is empty.</p>
    </div>
  );
};

const FullCart = ({ storeCart }) => {
  return (
    <div className="px-4 py-6 space-y-6">
      <div className="flex gap-4">
        <div className="rounded-md overflow-hidden">
          <img
            src="/ecommerce-product-page/images/image-product-1-thumbnail.jpg"
            alt=""
            className="h-16 w-16"
          />
        </div>
        <div className="flex flex-col justify-around text-dark-grayish-blue">
          <h4>{storeCart.name}</h4>
          <p>
            ${storeCart.price.toFixed(2)} x {storeCart.amount}{" "}
            <span className="text-black font-bold">
              ${(storeCart.price * storeCart.amount).toFixed(2)}
            </span>
          </p>
        </div>
        <div className="self-center">
          <button onClick={() => cartItem.set(null)}>
            <img
              src="/ecommerce-product-page/images/icon-delete.svg"
              alt="delete"
            />
          </button>
        </div>
      </div>
      <button className="w-full text-white text-center p-4 bg-normal-orange rounded-md">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
