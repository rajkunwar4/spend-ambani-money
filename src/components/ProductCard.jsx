import React from "react";
import { useState } from "react";

const ProductCard = ({ img_url, title, price, bankHandler }) => {
  const [quantity, setQuantity] = useState(0);

  //    total money - price * quantity

  const buyHandler = () => {
    setQuantity((prev) => prev + 1);
    bankHandler(price);
  };
  const sellHandler = () => {
    if (quantity <= 0) return;
    setQuantity((prev) => prev - 1);
    bankHandler(-price);
  };

  return (
    <div className="w-[330px] flex bg-white flex-col justify-center items-center border gap-3 rounded py-3 ">
      <div>
        <img src={img_url} alt="" className="w-[200px] h-[200px]" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-xl font-bold ">{title}</div>
        <div className="text-xl text-green-600 font-normal">${price}</div>
      </div>

      <div className="flex font-semibold gap-2 ">
        <button
          onClick={sellHandler}
          className="border w-20 bg-gray-200 rounded"
        >
          Sell
        </button>
        <input
          type="text"
          className="w-20 border border-gray-300 rounded text-center outline-none"
          placeholder="0"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
            console.log("quantity: ", quantity);
          }}
          readOnly
        
        />
        <button
          className="border w-20 py-1 bg-green-600 rounded text-white"
          onClick={buyHandler}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
