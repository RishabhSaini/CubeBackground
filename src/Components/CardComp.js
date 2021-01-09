import React, { useState } from "react";
import "./CardComp.css";
import "w3-css/w3.css";
import ModalPopup from "./ModalPopup";
import styled from "styled-components";

const CardComp = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <React.Fragment>
      <div className="header">
        <div className="w3-container">
          <StyledButton onClick={openModal}>About me</StyledButton>
          <StyledButton>Work Experience</StyledButton>
        </div>
      </div>
      <ModalPopup
        showModal={showModal}
        setShowModal={setShowModal}
      ></ModalPopup>
      <div className="cardComp">
        <div className="w3-container">
          <div className="box w3-panel w3-card">
            <h3>What inspires me?</h3>
            "Only those who attempt the absurd can achieve the impossible"
            Albert Einstein
            <h3>What is my aim?</h3>
            <ul className="cust-ul">
              <li>
                Leverage the power of technology to create paradigm shifts in
                the way the society thinks
              </li>
              <li>
                Creating solutions that make a meaningful impact on society
              </li>
            </ul>
            <h3>Who am I?</h3>
            <ul className="cust-ul">
              <li>"I think, therefore I am" René Descartes</li>
              <li>Education: Youtube, Google, Coursera</li>
              <li>
                2nd Year Computer Engineering Undergraduate at University of
                Toronto
              </li>
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

const StyledButton = styled.button`
  min-width: 100px;
  padding: 5px 15px;
  margin: 10px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;
