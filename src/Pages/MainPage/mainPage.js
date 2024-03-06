import React from "react";
import "./mainPage.css";

const MainPage = () => {
  return (
    <div className="page-cover" id="main-page">
      <div className="main-cover">
        <img className="bizbize-logo" src={"Images/bizbize.png"} alt="logo" />

        <div className="container">
          <h1 className="main-title">
            Biz Bize İle <br /> Kariyerini Zirveye <br /> Taşımaya Hazır Mısın?
          </h1>
          <button>Kayıt Ol!</button>
        </div>
      </div>
      <img className="skylab-logo" src={"Images/skylab1.png"} alt="logo" />
    </div>
  );
};

export default MainPage;
