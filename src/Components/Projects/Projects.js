import React from "react";
import { Element } from "react-scroll";
import styled, { ThemeProvider } from "styled-components";
import FeaturedProject from "./FeaturedProject.js";

const Projects = () => {
  return (
    <Element id="DestaboutMe" name="DestProjects">
      <FeaturedProjectsComp>
        <ThemeProvider theme={theme}>
          <TitleArea>
            <Title>
              <TitleHighlight>Projects</TitleHighlight>
            </Title>
            <TitleLineWrapper>
              <TitleLine />
            </TitleLineWrapper>
          </TitleArea>
          <ProjectArea>
            <FeaturedProject
              title={"BlockChain Fundraising Platform"}
              desc={`Designed a Decentralized Ethereum application and
              applied concepts of test driven development to create a
              secure auctioning platform`}
              techs={["Ethereum", "Smart Contracts", "Truffle", "Solidity"]}
              codeLink={""}
              siteLink={""}
              images={[]}
            />
            <FeaturedProject
              reverse={true}
              title={"LEEV: Electric Vehicle Power Stations Renting"}
              desc={`A 4 month project to design the application architecture
              for renting electric vehicles charging station in
              Downtown, Toronto. Our business client was a UofT alumni
              in North York.`}
              techs={[
                "Mobile App Architecture",
                "Team Charter",
                "Team Status",
                "Gantt Charts",
              ]}
              codeLink={""}
              siteLink={""}
              images={[]}
            />
            <FeaturedProject
              title={"Personal Website"}
              desc={`Designed the website you are currently viewing using
              React and used WebGL rendering for the beautiful
              animation at the background`}
              techs={["React", "Threejs"]}
              codeLink={""}
              siteLink={""}
              images={[]}
            />
            <FeaturedProject
              reverse={true}
              title={"Reversi/Othello"}
              desc={`Utilized minimax algorithm with alpha beta pruning and
              weighted matrix to create a Reversi bot with response
              time under 1 second`}
              techs={["C", "Functional Programming"]}
              codeLink={""}
              siteLink={""}
              images={[]}
            />
            <FeaturedProject
              title={"Maskaught"}
              desc={`A mask detection designed to be placed outside shops. It
              utilizes deep learning using tensorflow to train and
              predict data and Django to create the backend for the
              web application.`}
              techs={["Django", "Tensorflow", "Python"]}
              codeLink={""}
              siteLink={""}
              images={[]}
            />
            <FeaturedProject
              title={"Eye Can See"}
              desc={`A 20/20 vision testing system that utilizes an speech
              recognition system and an arduino board integration. See
              project EYE CAN SEE`}
              techs={["HTML", "CSS", "Javascript"]}
              codeLink={""}
              siteLink={""}
              images={[]}
            />
            <FeaturedProject
              title={"ResumaBuilder"}
              desc={`Resumabuilder allows you to compare your current resume
              to your ideal resume, it also gives you a progress
              tracker to achieve the perfect resume that you want.`}
              techs={["HTML", "CSS", "Javascript"]}
              codeLink={""}
              siteLink={""}
              images={[]}
            />
          </ProjectArea>
        </ThemeProvider>
      </FeaturedProjectsComp>
    </Element>
  );
};

export default Projects;

const FeaturedProjectsComp = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: black;
  padding: 10em;
`;

const TitleArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  padding-right: 20px;
  @media only screen and (min-width: 992px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 600px) {
    padding: 0;
    margin: auto;
  }
  @media only screen and (max-width: 450px) {
    font-size: 22px;
    line-height: 1.5em;
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
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const TitleLine = styled.div`
  flex: 1;
  height: 1px;
  padding: 0;
  background-color: ${(props) => props.theme.color};
`;

const ProjectArea = styled.div`
  width: 100%;
  align-items: center;
  display: grid;
`;

const theme = {
  color: "#ff350d",
};
