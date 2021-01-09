import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import Typical from "react-typical";

const ModalPopup = ({ showModal, setShowModal }) => {
  
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper>
            <ModalContent>
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
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default ModalPopup;

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
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: absolute;
  z-index: 4;
  border-radius: 10px;
  margin-left: 29%;
  margin-top: 11%;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
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
