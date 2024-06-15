import React from "react";

function Buttons({ value, click }) {
  return (
    <>
      <button
        className="w-[70px] h-[50px] bg-slate-50 rounded-lg m-4 text-xl font-semibold border-2 border-solid border-gray-500"
        onClick={()=>click(value)}
      >
        {value}
      </button>
    </>
  );
}

export default Buttons;
