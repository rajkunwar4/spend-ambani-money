import React from "react";

const Bank = ({bank}) => {
  return (
    <div className="w-full bg-green-500 p-2 text-2xl font-black text-white text-center">
      $ {bank}
    </div>
  );
};

export default Bank;
