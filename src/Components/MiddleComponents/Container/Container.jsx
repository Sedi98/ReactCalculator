import React from "react";
import style from "./Container.module.css";
import Display from "../../BasicComponents/Display/Display";
import ButtonContainer from "../ButtonContainer/ButtonContainer";

const Container = () => {
  return (
    <div className={style.container}>
      <Display />
      <ButtonContainer />
    </div>
  );
};

export default Container;
