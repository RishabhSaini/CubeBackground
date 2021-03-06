import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import "./ModalPopup.css";

const ModalPopupProjects = ({ showModalProjects, setShowModalProjects }) => {
  return (
    <>
      {showModalProjects ? (
        <Background>
          <ModalWrapper>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModalProjects((prev) => !prev)}
            />
            <ModalContent>
              <div className="grid-container">
                <div className="grid-item ">
                  <StyledButton>
                    <div className=" ">
                      <h4>Blockchain Fundraising Platform</h4>
                      <p>
                        Designed a Decentralized Ethereum application and
                        applied concepts of test driven development to create a
                        secure auctioning platform
                      </p>
                    </div>
                  </StyledButton>
                </div>
                <div className="grid-item ">
                  <StyledButton>
                    <div className=" ">
                      <h4>LEEV: Electric Vehicle Power Stations Renting</h4>
                      <p>
                        A 4 month project to design the application architecture
                        for renting electric vehicles charging station in
                        Downtown, Toronto. Our business client was a UofT alumni
                        in North York.
                      </p>
                    </div>
                  </StyledButton>
                </div>
                <div className="grid-item  ">
                  <StyledButton>
                    <div className="">
                      <h4>Personal Website</h4>
                      <p>
                        Designed the website you are currently viewing using
                        React and used WebGL rendering for the beautiful
                        animation at the background
                      </p>
                    </div>
                  </StyledButton>
                </div>
                <div className="grid-item  ">
                  <StyledButton>
                    <div className=" ">
                      <h4>Reversi/Othello</h4>
                      <p>
                        Utilized minimax algorithm with alpha beta pruning and
                        weighted matrix to create a Reversi bot with response
                        time under 1 second
                      </p>
                    </div>
                  </StyledButton>
                </div>
                <div className="grid-item ">
                  <StyledButton>
                    <div className="">
                      <h4>Maskaught</h4>
                      <p>
                        A mask detection designed to be placed outside shops. It
                        utilizes deep learning using tensorflow to train and
                        predict data and Django to create the backend for the
                        web application.
                      </p>
                    </div>
                  </StyledButton>
                </div>
                <div className="grid-item ">
                  <StyledButton>
                    <div className=" ">
                      <h4>Eye Can See</h4>
                      <p>
                        A 20/20 vision testing system that utilizes an speech
                        recognition system and an arduino board integration. See
                        project EYE CAN SEE
                      </p>
                    </div>
                  </StyledButton>
                </div>
                <div className="grid-item ">
                  <StyledButton>
                    <div className=" ">
                      <h4>ResumaBuilder</h4>
                      <p>
                        Resumabuilder allows you to compare your current resume
                        to your ideal resume, it also gives you a progress
                        tracker to achieve the perfect resume that you want.
                      </p>
                    </div>
                  </StyledButton>
                </div>
              </div>
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default ModalPopupProjects;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const ModalWrapper = styled.div`
  width: 150vh;
  height: 70vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #d7c58d;
  color: #000;
  position: absolute;
  z-index: 4;
  border-radius: 10px;
  margin: 5% 12.5%;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0.5em;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  h4 {
    font-size: 1.5em;
    color: #ff2281;
  }
  p {
    margin-bottom: 1rem;
    font-size: 1em;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  border-radius: 100px;
  background-color: #add8e6;
`;

const StyledButton = styled.button`
  border-radius: 4px;
  height: 100%;
  border: none;
  background: #141414;
  color: #fff;
  cursor: pointer;
`;
