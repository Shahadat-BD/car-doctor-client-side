import React from "react";

const ProductCart = ({ product }) => {
  const { productName, price, image } = product;
  return (
    <div className="border border-gray-200 rounded-md">
      <div className="bg-gray-300 m-5 p-5 rounded-md">
        <img
          className="w-[150px] h-[150px] m-auto"
          src={image}
          alt=""
        />
      </div>
      <div className="text-center">
        <div className="rating w-1/3 m-auto">
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400"/>
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
            </div>
        <p className="text-xl font-bold my-2">{productName}</p>
        <p className="text-[#FF3811] font-semibold mb-2">${price}</p>
      </div>
    </div>
  );
};

export default ProductCart;
