import React from "react";
import { Element } from "react-scroll";
import styled, { ThemeProvider } from "styled-components";
import Typical from "react-typical";

const AboutMe = () => {
  return (
    <Element id="DestaboutMe" name="DestaboutMe">
      <AboutComp id="about">
        <Container>
          <ThemeProvider theme={theme}>
            <Content>
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
              <Descriptions>
                <Description></Description>
                <Description>
                  "I think, therefore I am" René Descartes <br />
                  Second Year Computer Engineering Undergraduate at University
                  of Toronto
                </Description>
                <Description>What is my aim?</Description>
                <Cul>
                  <li>
                    Leverage the power of technology to create paradigm shifts
                    in the way the society thinks
                  </li>
                  <li>
                    Creating solutions that make a meaningful impact on society
                  </li>
                </Cul>
              </Descriptions>
            </Content>
          </ThemeProvider>
        </Container>
      </AboutComp>
    </Element>
  );
};

export default AboutMe;

const Cul = styled.ul`
  list-style-type: none;
  font-size: 20px;
  line-height: 1.5em;
  font-weight: 400;
  margin: 0;
  margin-bottom: 18px;
  @media only screen and (max-width: 992px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 12px;
  }
`;

const AboutComp = styled.div`
  position: relative;
  width: 100%;
  /* height: 550px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Quicksand", "san-serif";
  padding: 150px 0;
  /* background-color: white; */
`;

const Container = styled.div`
  margin: 0px 10%;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
  text-align: left;
  color: #222;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TitleArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 500;
  padding-right: 20px;
  @media only screen and (max-width: 992px) {
    font-size: 26px;
  }
  @media only screen and (max-width: 450px) {
    padding-right: 15px;
    font-size: 22px;
    line-height: unset;
  }
  @media only screen and (max-width: 350px) {
    font-size: 20px;
  }
`;

const TitleHighlight = styled.span`
  color: ${(props) => props.theme.color};
`;

const TitleLineWrapper = styled.div`
  overflow-x: hidden;
  flex: 1;
  height: 20px;
  padding: 0;
`;

const TitleLine = styled.div`
  flex: 1;
  height: 1px;
  padding: 0;
  background-color: ${(props) => props.theme.color};
`;

const Descriptions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.5em;
  font-weight: 400;
  margin: 0;
  margin-bottom: 18px;
  @media only screen and (max-width: 992px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 12px;
  }
`;

const DescriptionBold = styled.span`
  font-weight: 600;
`;

const theme = {
  color: "#ff350d",
};
