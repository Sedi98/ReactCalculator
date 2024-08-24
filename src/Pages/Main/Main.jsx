import React from "react";
import style from "./Main.module.css";
import Container from "../../Components/MiddleComponents/Container/Container";
import Background from "../../Components/BasicComponents/Background/Background";
import Footer from "../../Components/MiddleComponents/Footer/Footer";

const Main = () => {
  return (
    <div className={style.main}>
      <Background />
  
      <Container />
      <Footer />
    </div>
  );
};

export default Main;
