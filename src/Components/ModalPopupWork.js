import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import Typical from "react-typical";
import "./ModalPopup.css";

const ModalPopupWork = ({ showModalWork, setShowModalWork }) => {
  return (
    <>
      {showModalWork ? (
        <Background>
          <ModalWrapper>
            <ModalContent>
              <Typical
                steps={[
                  "Welcome",
                  1000,
                  "I am Rishabh",
                  3000,
                  "I am a Designer",
                  2000,
                  "I am a Creator",
                  2000,
                  "I am a Thinker",
                  2000,
                  "I am a Developer",
                  2000,
                  "I am a Innovator",
                  2000,
                  "I am a Inventor",
                  2000,
                ]}
                loop={Infinity}
                wrapper="h1"
                className=""
              />

              <div className="grid-container">
                <div className="grid-item w3-margin">
                  <StyledButton>
                    <div className="w3-container w3-center">
                      <h4>Braintoy</h4>
                      <p>
                        I worked along with Chief Technical Officer and a group
                        of developers to build a customer relationship
                        management web application for a S&P 500 company with
                        artificially intelligent recommendation system.
                      </p>
                    </div>
                  </StyledButton>
                </div>
                <div className="grid-item w3-margin">
                  <StyledButton>
                    <div className="w3-container w3-center">
                      <h4>NeurotechUofT</h4>
                      <p>
                        Currently serving as the Front End Co-Lead at
                        NeurotechUofT (University of Toronto's team at
                        NeurotechX Competiton), that are the runner-ups of the
                        2019 competition. As the frontend lead I oversee the
                        development of the web application for the MindType
                        Project (Mind-Controlled Keyboard).
                      </p>
                    </div>
                  </StyledButton>
                </div>
                <div className="grid-item  w3-margin">
                  <StyledButton>
                    <div className="w3-container w3-center">
                      <h4>ECE Club</h4>
                      <p>
                        I manage mentors, who will be providing guidance and
                        support to first year students. This is a crucial role
                        as incoming students will be experiencing their
                        university classes in a completely online setting and
                        will need help from upper year students on how to manage
                        their first year courses.
                      </p>
                    </div>
                  </StyledButton>
                </div>
                <div className="grid-item  w3-margin">
                  <StyledButton>
                    <div className="w3-container w3-center">
                      <h4>The Guardian</h4>
                      <p>
                        Created online content by writing book reviews. Got an
                        insight into the skill of writing for publishing.
                        Enhanced creativity and expanded my domain of knowledge.
                      </p>
                    </div>
                  </StyledButton>
                </div>
              </div>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModalWork((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default ModalPopupWork;

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
  width: 80%;
  height: 80%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #cdd5c0;
  color: #000;
  position: absolute;
  z-index: 4;
  border-radius: 10px;
  margin: 5% 10%;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 12px;
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
    font-size: 25px;
    color: #ff2281;
  }
  p {
    margin-bottom: 1rem;
    font-size: 19px;
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
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const StyledButton = styled.button`
  border-radius: 4px;
  height: 100%;
  border: none;
  background: #141414;
  color: #fff;
  cursor: pointer;
`;
