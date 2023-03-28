import React from "react";
import "./project.css";
import Stand from "./stand.js";
import hero from "./media/image-hero-mobile.jpg";
import heroDesktop from "./media/image-hero-desktop.jpg";
import hamburger from "./media/icon-hamburger.svg";
import close from "./media/icon-close-menu.svg";
import { useState } from "react";

function Project({ setToSelect }) {
  const [icon, seticon] = useState(hamburger);
  const [toggle, settoggle] = useState("hidden");
  const [bookmark, setbookmark] = useState("Bookmark");
  const [bookmarkStatus, setbookmarkStatus] = useState("bookmark-wrapper");

  const handleBookmarkClick = () => {
    bookmark == "Bookmark"
      ? setbookmark("Bookmarked")
      : setbookmark("Bookmark");
    bookmarkStatus == "bookmark-wrapper"
      ? setbookmarkStatus("active-bookmark")
      : setbookmarkStatus("bookmark-wrapper");
  };

  const handleClick = () => {
    icon === hamburger ? seticon(close) : seticon(hamburger);
    icon === hamburger ? settoggle("active") : settoggle("hidden");
  };

  function handleSelectClick() {
    setToSelect(true);
  }

  return (
    <>
      <picture>
        <source media="(min-width: 777px)" srcSet={heroDesktop}></source>
        <img className="hero" src={hero}></img>
      </picture>
      <div className="project">
        <header>
          <img
            className="logo"
            onClick={() => window.location.reload()}
            src={require("./media/logo.svg").default}
          ></img>
          <div className="menu-flex">
            <a href="#stat">About</a>
            <a href="#disabled">Discover</a>
            <a onClick={() => handleSelectClick()}>Get Started</a>
          </div>
          <img
            className="toggle"
            onClick={() => handleClick()}
            src={icon}
          ></img>
        </header>
        <div className={toggle} id="menu">
          <ul>
            <a href="#stat">About</a>
            <hr></hr>
            <a href="#disabled">Discover</a>
            <hr></hr>
            <a onClick={() => handleSelectClick()}>Get started</a>
          </ul>
        </div>
        <div className="content">
          <div className="box">
            <img
              className="mastercraft-logo"
              src={require("./media/logo-mastercraft.svg").default}
            ></img>
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>
              A beautifully handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
            <div className="mastercraft-flex">
              <button onClick={() => handleSelectClick()}>
                Back this project
              </button>
              <div
                className={bookmarkStatus}
                onClick={() => handleBookmarkClick()}
              >
                <img
                  className="bookmark"
                  src={require("./media/icon-bookmark.svg").default}
                ></img>
                <p>{bookmark}</p>
              </div>
            </div>
          </div>
          <div className="box" id="stat">
            <div className="stat-flex">
              <div>
                <h2>$89,914</h2>
                <p>of $100,000 backed</p>
              </div>
              <hr></hr>
              <div>
                <h2>5,007</h2>
                <p>total backers</p>
              </div>
              <hr></hr>
              <div>
                <h2>56</h2>
                <p>days left</p>
              </div>
            </div>
            <div className="line-cont">
              <div className="line"></div>
            </div>
          </div>
          <div id="about" className="box">
            <h3>About this project</h3>
            <p>
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
            </p>
            <p>
              {" "}
              Featuring artisan craftsmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads, pens, and
              USB sticks to be stored under the stand.
            </p>
            <Stand
              title="Bamboo Stand"
              pledge=" Pledge $25 or more"
              paragraph="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
              number="101"
              left="left"
              button="Select Reward"
              handleSelectClick={handleSelectClick}
            />
            <Stand
              title="Black Edition Stand"
              pledge=" Pledge $75 or more"
              paragraph="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              number="64"
              left="left"
              button="Select Reward"
              handleSelectClick={handleSelectClick}
            />
            <Stand
              id="disabled"
              title="Mahogany Special Edition"
              pledge=" Pledge $200 or more"
              paragraph="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              number="0"
              left="left"
              button="Select Reward"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
