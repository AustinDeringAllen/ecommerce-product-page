import { useState } from "react";

const IMAGES = [
  "image-product-1",
  "image-product-2",
  "image-product-3",
  "image-product-4",
];

const ProductImage = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="relative lg:w-1/2">
      <img
        src={`/ecommerce-product-page/images/${IMAGES[selected]}.jpg`}
        alt=""
        className="-z-10 lg:rounded-lg"
      />
      <ImageSelect selected={selected} setSelected={setSelected} />
    </div>
  );
};

const ImageSelect = ({ selected, setSelected }) => {
  return (
    <div className="absolute inset-x-4 inset-y-0 grid place-items-center lg:static lg:block">
      <MobileImage setSelected={setSelected} />
      <DesktopImage selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default ProductImage;

const MobileImage = ({ setSelected }) => {
  return (
    <div className="flex justify-between w-full lg:hidden">
      <button
        className="w-10 h-10 rounded-full bg-white"
        onClick={() =>
          setSelected((prev) => (prev - 1 < 0 ? IMAGES.length - 1 : prev - 1))
        }
      >
        <span className="sr-only">Previous</span>
        <img
          src="/ecommerce-product-page/images/icon-previous.svg"
          alt="Previous Button"
          className="mx-auto"
        />
      </button>
      <button
        className="w-10 h-10 rounded-full bg-white"
        onClick={() =>
          setSelected((prev) => (prev + 1 > IMAGES.length - 1 ? 0 : prev + 1))
        }
      >
        <span className="sr-only">Next</span>
        <img
          src="/ecommerce-product-page/images/icon-next.svg"
          alt="Next Button"
          className="mx-auto"
        />
      </button>
    </div>
  );
};

const DesktopImage = ({ selected, setSelected }) => {
  return (
    <div className="hidden lg:flex gap-8 py-8">
      {IMAGES.map((image, i) => (
        <div
          key={i}
          className={`relative cursor-pointer group`}
          onClick={() => setSelected(i)}
        >
          <div
            className={`${
              i !== selected ? "hidden" : "block"
            } absolute inset-0 bg-white/50 border-2 border-normal-orange rounded-lg`}
          ></div>
          <div
            className={`hidden absolute inset-0 bg-white/50 border-2 border-transparent ${
              i !== selected ? "group-hover:block" : ""
            }`}
          ></div>
          <img
            src={`/ecommerce-product-page/images/${image}-thumbnail.jpg`}
            alt={`Image-${i + 1} thumbnail`}
            className="-z-10 rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};
