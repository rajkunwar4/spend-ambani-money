import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Bank from "./components/Bank";
import products from "./store";
import Mukesh from "./components/Mukesh";

const App = () => {
  const [bank, setBank] = useState(110000000000);

  const bankHandler = (val) => {
    setBank((prev) => prev - val);
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="flex justify-center">
        <Mukesh />
      </div>

      <div className="fixed w-[100vw] z-10 top-0 bg-white ">
        <Bank bank={bank} />
      </div>

      <div className=" mt-10 flex flex-wrap justify-center gap-1 ">
        {products.map((item) => (
          <ProductCard
            img_url={item.img_url}
            title={item.title}
            price={item.price}
            bankHandler={bankHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
