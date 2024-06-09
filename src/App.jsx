import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Bank from "./components/Bank";
import products from "./store";

const App = () => {
  
  const [bank, setBank] = useState(110000000000);


  const bankHandler = (val) => {
    setBank((prev)=>prev-val);
  };

  return (
    <div>
      <div className="fixed top-0">
        <Bank bank={bank} />
      </div>

      <div className="mx-[100px] mt-20 grid grid-cols-3 gap-1 ">
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
