import React, { useState } from "react";
import "./CardComp.css";
import "w3-css/w3.css";
import ModalPopupProjects from "./ModalPopupProjects";
import ModalPopupWork from "./ModalPopupWork";
import styled from "styled-components";

const CardComp = () => {
  const [showModalProjects, setShowModalProjects] = useState(false);
  const [showModalWork, setShowModalWork] = useState(false);
  const openModalProjects = () => {
    setShowModalProjects((prev) => !prev);
  };
  const openModalWork = () => {
    setShowModalWork((prev) => !prev);
  };
  return (
    <React.Fragment>
      <div className="header w3-row">
        <div className="w3-container w3-quarter">
          <StyledButton onClick={openModalProjects}>Projects</StyledButton>
        </div>
        <div className="w3-container w3-half">
          <StyledName>Rishabh Saini</StyledName>
        </div>
        <div className="w3-container w3-quarter">
          <StyledButton onClick={openModalWork}>Work Experience</StyledButton>
        </div>
      </div>
      <ModalPopupProjects
        showModalProjects={showModalProjects}
        setShowModalProjects={setShowModalProjects}
      ></ModalPopupProjects>
      <ModalPopupWork
        showModalWork={showModalWork}
        setShowModalWork={setShowModalWork}
      ></ModalPopupWork>
      <div className="cardComp">
        <div className="w3-container w3-margin">
          <div className="box w3-panel w3-card ">
            <div className="cust-div">What inspires me?</div>
            <ul className="cust-ul">
              <li>
                "Only those who attempt the absurd can achieve the impossible"
                Albert Einstein
              </li>
            </ul>
            <div className="cust-div">What is my aim?</div>
            <ul className="cust-ul">
              <li>
                Leverage the power of technology to create paradigm shifts in
                the way the society thinks
              </li>
              <li>
                Creating solutions that make a meaningful impact on society
              </li>
            </ul>
            <div className="cust-div">Who am I?</div>
            <ul className="cust-ul">
              <li>"I think, therefore I am" René Descartes</li>
              <li>Education: Youtube, Google, Coursera</li>
              <li>
                2nd Year Computer Engineering Undergraduate at University of
                Toronto
              </li>
            </ul>
            <div className="cust-div">Why a website?</div>
            <ul className="cust-ul">
              <li>To showcase my portfolio and ongoing projects</li>
            </ul>
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
  background: #709fb0;
  color: #f4ebc1;
  font-size: 24px;
  cursor: pointer;
  opacity: 80%;
  :hover {
    opacity: 100%;
    background-color: #709fb0;
    color: #f4ebc1;
  }
`;

const StyledName = styled.div`
  font-size: 5rem;
  text-align: center;
  height: 10vh;
  line-height: 10vh;
  color: #fcedd8;
  font-family: "Niconne", cursive;
  font-weight: 700;
  text-shadow: 5px 5px 0px #eb452b, 10px 10px 0px #efa032, 15px 15px 0px #46b59b,
    20px 20px 0px #017e7f;
`;
