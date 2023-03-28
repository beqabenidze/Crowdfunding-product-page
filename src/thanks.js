import React from "react";
import "./thanks.css";

function Thanks() {
  return (
    <div className="back">
      <div className="card">
        <img src={require("./media/icon-check.svg").default}></img>
        <h1>Thanks for your support!</h1>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button onClick={() => window.location.reload()}>Got it!</button>
      </div>
    </div>
  );
}

export default Thanks;
