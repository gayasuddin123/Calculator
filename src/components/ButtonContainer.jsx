import React from "react";
import Buttons from "./Buttons";
function ButtonContainer({ value1, click }) {
  return (
    <>
      <div className="text-center">
        {value1.map((item) => {
          return <Buttons key={item} value={item} click={click}></Buttons>;
        })}
      </div>
    </>
  );
}

export default ButtonContainer;
