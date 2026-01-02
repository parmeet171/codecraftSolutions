import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Our Mission",
    text: "To provide smart, accessible, and results-driven solutions that help clients grow, innovate, and succeed in a digital-first world.",
  },
  {
    title: "What Makes Us Different",
    text: "Clarity First - Clear requirements before execution.",
    text2: "Quality Driven - Clear requirements before execution.",
    text3: "On-Time Delivery - Deadlines respected. Always.",
    text4: "Client-Centered Approach - Transparent communication & support."
  },
  {
    title: "How We Work",
    text: "Understand the Requirement -> Research & Planning -> Execution & Development -> Review & Revisions -> Final Delivery & Support",
  },
  {
    title: "Our Commitment",
    text: "At CodeCraft Solutions, we don’t just complete tasks — we build solutions you can rely on.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">About CodeCraft Solutions</h1>
        <p>
          <strong>CodeCraft Solutions</strong> is a digital solutions company
          focused on delivering high-quality web, mobile, AI, and academic
          research services.
          <br />
          We work with startups, businesses, and students to transform ideas
          into reliable, practical, and scalable outcomes — with a strong focus
          on clarity, quality, and on-time delivery.
        </p>
        <p></p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            text2={item?.text2}
            text3={item?.text3}
            text4={item?.text4}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
