import React from "react";
import "./CardComp.css";
import "w3-css/w3.css";
import Typical from "react-typical";

const CardComp = () => {
  return (
    <React.Fragment>
      <div className="header">
        <Typical
          steps={[
            "Welcome",
            1000,
            "I am Rishabh",
            2000,
            "I am a Designer",
            1000,
            "I am a Creator",
            1000,
            "I am a Thinker",
            1000,
            "I am a Developer",
            1000,
            "I am a Innovator",
            1000,
            "I am a Inventor",
            1000,
          ]}
          loop={Infinity}
          wrapper="h1"
          className=""
        />
      </div>
      <div className="cardComp">
        <div className="w3-container">
          <div className="box w3-panel w3-card">
            <h3>What inspires me?</h3>
            "Only those who attempt the absurd can achieve the impossible"
            Albert Einstein
            <h3>What is my aim?</h3>
            <ul className="cust-ul">
                <li>Leverage the power of technology to create paradigm shifts in the way the society thinks</li>
                <li>Creating solutions that make a meaningful impact  on society</li>
            </ul>
            <h3>Who am I?</h3>
            <ul className="cust-ul">
                <li>"I think, therefore I am" René Descartes</li>
                <li>Education: Youtube, Google, Coursera</li>
                <li>2nd Year Computer Engineering Undergraduate at University of Toronto</li>
            </ul>
            <h3>Why a website?</h3>
            To showcase my portfolio and ongoing projects
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardComp;
