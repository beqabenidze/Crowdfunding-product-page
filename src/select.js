import React from "react";
import "./select.css";
import { useState } from "react";
import Box from "./boxProps.js";

function Select({ setToThanks }) {
  const [activeNum, setActiveNum] = useState(null);

  function handleChange(x) {
    setActiveNum(x);
  }
  function handleContinueClick() {
    setToThanks(true);
  }

  return (
    <div className="backbone">
      <div className="card">
        <header>
          <h1>Back this project</h1>
        </header>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?{" "}
        </p>
        <div className="content">
          <Box
            h2="Pledge with no reward"
            paragraph="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
            itemNumber={0}
            handleChange={handleChange}
            activeNum={activeNum}
            handleContinueClick={handleContinueClick}
          />
          <Box
            h2="Bamboo Stand"
            h3="Pledge $25 or more"
            paragraph="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
            number="101"
            span="left"
            itemNumber={1}
            handleChange={handleChange}
            activeNum={activeNum}
            handleContinueClick={handleContinueClick}
          />
          <Box
            h2="Black Edition Stand"
            h3="Pledge $75 or more"
            paragraph="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            number="65"
            span="left"
            itemNumber={2}
            handleChange={handleChange}
            activeNum={activeNum}
            handleContinueClick={handleContinueClick}
          />
          <Box
            h2="Mahogany Special Edition"
            h3="Pledge $200 or more"
            paragraph="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. 
          Shipping is included."
            number="0"
            span="left"
            id="disabled"
            activeNum={activeNum}
          />
        </div>
      </div>
    </div>
  );
}

export default Select;
