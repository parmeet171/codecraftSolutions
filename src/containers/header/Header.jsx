import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">CodeCraft Solutions</h1>
        <h4>Building Web, Mobile & AI Solutions That Work</h4>
        <p>
          We help <strong>startups</strong>, <strong>businesses</strong>, and <strong>students</strong> turn ideas into powerful
          digital products — from modern websites and mobile apps to AI
          solutions and academic research support.
        </p>
        {/* <div className=" gpt3__navbar-sign"> */}
        <div className="gpt3__header-content__input">
          {/* <input type="email" placeholder="Your Email Address" /> */}
          <a href="#wgpt3" style={{ width: "100%" }}><button className="button2" type="button">Our Services</button></a>
          <a href="#possibility" style={{ width: "100%" }}><button className="button1" type="button">Contact US</button></a>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
