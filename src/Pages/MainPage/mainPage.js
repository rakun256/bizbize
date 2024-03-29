import React from "react";
import "./mainPage.css";
import Button from "../../Components/Button/button";

const MainPage = () => {
  return (
    <div className="page-cover" id="main-page">
      <div className="main-cover">
        <img className="bizbize-logo" src={"Images/bizbize.webp"} alt="logo" />

        <div className="main-left-container">
          <h1 className="main-title">
            Biz Bize İle <br /> Kariyerini Zirveye <br /> Taşımaya Hazır Mısın?
          </h1>
          <Button/>
        </div>
      </div>
      <img className="skylab-logo" src={"Images/skylab1.webp"} alt="logo" />
    </div>
  );
};

export default MainPage;
