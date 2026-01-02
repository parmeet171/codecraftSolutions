import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-features">
        <Feature
          title="What We Do"
          text="We deliver powerful digital solutions across Web, Mobile, AI, and Academic Research, helping businesses and students achieve real results with clarity and confidence."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          Engineering digital solutions with purpose
        </h1>
        <a href="#possibility">Explore Our Profolio</a>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Web Development"
          text="We build modern, responsive, and scalable websites tailored to your business goals."
          text2="• Business & portfolio websites"
          text3="• Custom web applications"
          text4="• MERN/MEAN stack, springboot"
          text5="• Secure APIs & integrations"
        />
        <Feature
          title="Mobile Development"
          text="High-performance mobile apps designed for seamless user experience."
          text2="• Android & iOS applications"
          text3="• Cross-platform solutions"
          text4="• Clean UI/UX design"
          text5="• Backend & API integration"
        />
        <Feature
          title="AI & Automation"
          text="Intelligent solutions that automate, analyze, and enhance decision-making."
          text2="• AI-powered web & mobile features"
          text3="• Chatbots & automation tools"
          text4="• Data analysis & ML models"
          text5="• Custom AI integrations"
        />
        <Feature
          title="Research & Academic Support"
          text="Professional, plagiarism-free academic assistance with guaranteed quality."
          text2="• Research papers & case studies"
          text3="• Assignments & technical reports"
          text4="• Proper citations & formatting"
          text5="• Confidential & on-time delivery"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
