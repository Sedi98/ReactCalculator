import React from "react";
import style from "./ButtonContainer.module.css";
import Button from "../../BasicComponents/Button/Button";

const ButtonContainer = () => {
  return (
    <div className={style.buttonContainer}>
      <Button type={"AC"} value={"AC"} />
      <Button type={"C"} value={"C"} />
      <Button type={"operator"} value={"%"} />
      <Button type={"operator"} value={"/"} />
      <Button type={"number"} value={"7"} />
      <Button type={"number"} value={"8"} />
      <Button type={"number"} value={"9"} />
      <Button type={"operator"} value={"*"} />
      <Button type={"number"} value={"4"} />
      <Button type={"number"} value={"5"} />
      <Button type={"number"} value={"6"} />
      <Button type={"operator"} value={"-"} />
      <Button type={"number"} value={"1"} />
      <Button type={"number"} value={"2"} />
      <Button type={"number"} value={"3"} />
      <Button type={"operator"} value={"+"} />

      <Button type={"number"} value={"."} />
      <Button type={"number"} value={"0"} />
      <Button type={"number"} value={"."} />
      <Button type={"equal"} value={"="} />
    </div>
  );
};

export default ButtonContainer;
