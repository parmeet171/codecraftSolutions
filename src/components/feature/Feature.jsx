import React from "react";
import "./feature.css";

const Feature = ({ title, text, text2, text3, text4, text5 }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
      <p>{text2 ? text2 : ""}</p>
      <p>{text3 ? text3 : ""}</p>
      <p>{text4 ? text4 : ""}</p>
      <p>{text5 ? text5 : ""}</p>
    </div>
  </div>
);

export default Feature;
