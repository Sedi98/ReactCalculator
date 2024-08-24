import "./App.css";
import Main from "./Pages/Main/Main";
import { useContext } from "react";
import DisplayContext from "./Context/DisplayContext";
import { useState, useEffect } from "react";

function App() {
  const [displayValue, setdisplayValue] = useState("");
  const [operator, setOperator] = useState("");
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [finalResult, setFinalResult] = useState(0);

  useEffect(() => {
    setDisplay();
  }, [displayValue, operator, firstNum, secondNum, finalResult]);

  const setDisplay = () => {
    if (firstNum && secondNum && operator && finalResult) {
      setdisplayValue(`${finalResult}`);
      return;
    }
    setdisplayValue(`${firstNum}${operator}${secondNum}`);
  };

  const resetEqual = (result) => {
    setFirstNum(result);
    setSecondNum("");
    setOperator("");
    setFinalResult("");
  };

  const handleLogic = (value, type) => {
    if (type === "number" && !operator) {
      setFirstNum(firstNum + value);
      setDisplay();
    }

    if (type === "operator") {
      setOperator(value);
      setDisplay();
    }

    if (type === "AC") {
      AllClear();
    }

    if (type === "C") {
      Clear();
    }

    if (!firstNum && operator) {
      setOperator("");
      setFirstNum(operator);
    }

    if (operator && firstNum) {
      if (type === "number") {
        setSecondNum(secondNum + value);
        setDisplay();
      }
    }

    if (type === "equal") {
      if (operator === "+") {
        let result = +firstNum + +secondNum;
        setFinalResult(result);
        resetEqual(result);
      } else if (operator === "-") {
        let result = +firstNum - +secondNum;
        setFinalResult(result);
        resetEqual(result);
      } else if (operator === "*") {
        let result = +firstNum * +secondNum;
        setFinalResult(result);
        resetEqual(result);
      } else if (operator === "/") {
        let result = +firstNum / +secondNum;
        setFinalResult(Math.round((result + Number.EPSILON) * 100) / 100);
        resetEqual(Math.round((result + Number.EPSILON) * 100) / 100);
      } else if (operator === "%") {
        let result = +firstNum % +secondNum;
        setFinalResult(result);
        resetEqual(result);
      }

      setDisplay();
    }
  };

  const AllClear = () => {
    setFirstNum("");
    setSecondNum("");
    setOperator("");
    setFinalResult(0);
    setDisplay();
  };

  const Clear = () => {
    if (firstNum && !secondNum && !operator && !finalResult) {
      setFirstNum(String(firstNum).slice(0, firstNum.length - 1));
      setDisplay();
    }

    if (firstNum && operator && !secondNum) {
      setOperator("");
      setDisplay();
    }

    if (secondNum && operator) {
      setSecondNum(String(secondNum).slice(0, secondNum.length - 1));
      setDisplay();
    }

    if (finalResult) {
      setFinalResult(String(finalResult).slice(0, finalResult.length - 1));
      setDisplay();
    }
  };

  const handleBtnClick = (value, type) => {
    handleLogic(value, type);
  };

  return (
    <div className="App">
      <DisplayContext.Provider
        value={{
          display: displayValue,
          handleClick: handleBtnClick,
        }}
      >
        <Main />
      </DisplayContext.Provider>
    </div>
  );
}

export default App;
