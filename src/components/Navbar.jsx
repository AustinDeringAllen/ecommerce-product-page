import { useState } from "react";

const LINKS = ["Collections", "Men", "Women", "About", "Contact"];

const Navbar = () => {
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
};

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="z-10 lg:hidden"
      >
        <img
          src={
            !open
              ? "/ecommerce-product-page/images/icon-menu.svg"
              : "/ecommerce-product-page/images/icon-close.svg"
          }
          alt="Menu Icon"
        />
      </button>

      {open && (
        <aside className="absolute inset-0 h-screen bg-black/75 lg:hidden">
          <nav className="w-1/2 h-screen px-6 py-24 bg-white">
            <ul className="font-bold space-y-6">
              {LINKS.map((link, i) => (
                <li key={i} className="cursor-pointer">
                  <a>{link}</a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}
    </>
  );
};

const DesktopNav = () => {
  return (
    <nav className="hidden lg:block order-2 grow max-w-md">
      <ul className="flex justify-around text-dark-grayish-blue">
        {LINKS.map((link, i) => (
          <li
            key={i}
            className="cursor-pointer relative w-1/5 text-center after:absolute after:top-16 after:inset-x-0 after:h-2 hover:after:bg-normal-orange"
          >
            <a>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
