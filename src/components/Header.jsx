import Cart from "./Cart";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="flex items-baseline p-4 pt-4 pb-6 gap-2 lg:items-center lg:gap-12 lg:px-0 lg:py-9">
        <Navbar />
        <a href="">
          <img
            src="/ecommerce-product-page/images/logo.svg"
            alt="Sneakers Logo"
          />
        </a>
        <div className="flex items-baseline gap-4 ml-auto order-3 lg:items-center lg:gap-10">
          <Cart />
          <img
            src="/ecommerce-product-page/images/image-avatar.png"
            alt="Avatar Image"
            className="cursor-pointer w-6 h-6 border-transparent rounded-full lg:w-12 lg:h-12 lg:border-2 hover:border-normal-orange"
          />
        </div>
      </div>
      <hr className="hidden lg:block" />
    </header>
  );
};

export default Header;
