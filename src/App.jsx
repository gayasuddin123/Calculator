import { useState } from "react";
import "./App.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";
function App() {
  let btnVal = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  let [calVal, setcalVal] = useState([]);
  let getValue = (value) => {
    if (value === "C") {
      setcalVal("");
    } else if (value === "=") {
      setcalVal(eval(calVal))
    } else {
      let newCalVal = calVal + value;
      setcalVal(newCalVal);
    }
  };
  return (
    <>
      <div className=" w-screen h-screen flex justify-center items-center ">
        <div className="w-[400px] bg-slate-300 rounded-xl border-2 align border-solid border-gray-500">
          <Display calVal={calVal}></Display>
          <ButtonContainer value1={btnVal} click={getValue}></ButtonContainer>
        </div>
      </div>
    </>
  );
}

export default App;
