import React, { useEffect, useState } from "react";
import ProductCart from "../ProductCart/ProductCart";

const Product = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <div className="my-20">
      <div className="text-center mb-10">
        <h3 className="text-[#FF3811] font-bold">Popular Product</h3>
        <h1 className="text-4xl font-bold my-3">Browse Our Products</h1>
        <p className="w-[60%] m-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        {product.map((product) => (
          <ProductCart key={product.id} product={product}></ProductCart>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-5 py-2  text-[#FF3811] border border-[#FF3811] rounded-md">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Product;
