import { createContext } from "react";

const DisplayContext = createContext({
  display: '0',
  handleClick: () => {},
  handleDisplay: () => {},
  clearDisplay: () => {},
  deleteLast: () => {},
  calculate: () => {},
  handleOperator: () => {},
  handleDecimal: () => {},
  handleNumber: () => {},
});
export default DisplayContext;
