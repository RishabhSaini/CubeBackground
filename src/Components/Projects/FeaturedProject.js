import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa"

const FeaturedProject = (props) => {
  const [imageIndex, setImageIndex] = React.useState(0);
  return (
    <FeaturedProjectComp>
      <ThemeProvider theme={theme}>
        <TextSide>
          <Title>{props.title}</Title>
          <Desc>{props.desc}</Desc>
          <Techs>
            {props.techs &&
              props.techs.map((techItem, i) => {
                return <TechItem key={i}>{techItem}</TechItem>;
              })}
          </Techs>
          <Icons>
            <a href={props.codeLink} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"><FaGithub/></i>
            </a>
            <a href={props.siteLink} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"><FaExternalLinkAlt /></i>
            </a>
          </Icons>
        </TextSide>
      </ThemeProvider>
    </FeaturedProjectComp>
  );
};

export default FeaturedProject;

const FeaturedProjectComp = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* height: 500px; */
  color: #222;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  margin-bottom: 250px;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* min-height: 600px; */
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 150px;
    /* min-height: 500px; */
  }
  @media only screen and (max-width: 450px) {
    height: 100%;
    margin-bottom: 170px;
    /* min-height: 350px; */
  }
  @media only screen and (max-width: 350px) {
    height: 100%;
    margin-bottom: 150px;
    /* min-height: 350px; */
  }
`;

const ProjectSide = styled.div`
  position: relative;
  /* flex: 1; */
  width: 100%;
  height: 420px;
  /* min-height: 250px; */
  background-color: #eee;
  margin-left: ${(props) => (props.reverse ? "40px" : "0")};
  margin-right: ${(props) => (props.reverse ? "0" : "40px")};
  overflow: hidden;
  @media only screen and (max-width: 992px) {
    width: 100%;
    margin: 0;
    margin-bottom: 20px;
    height: 350px;
  }
  @media only screen and (max-width: 600px) {
    height: 250px;
  }
  @media only screen and (max-width: 450px) {
    height: 180px;
  }
  @media only screen and (max-width: 350px) {
    height: 150px;
  }
`;

const ProjectImages = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
`;

const ProjectImage = styled.img.attrs((props) => ({
  src: props.src,
  width: "100%",
  height: "100%",
}))`
  width: 100%;
  height: 100%;
`;

const ImageButtons = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  @media only screen and (max-width: 600px) {
    bottom: 10px;
  }
  @media only screen and (max-width: 450px) {
    bottom: 8px;
  }
`;

const ImageButton = styled.button`
  width: 12px;
  height: 12px;
  outline: unset;
  border: ${(props) => `1px solid ${props.theme.color}`};
  background-color: ${(props) =>
    props.selected ? props.theme.color : "white"};
  border-radius: 50%;
  padding: 3px;
  margin: 0 10px;
  box-sizing: border-box;
  cursor: pointer;
  @media only screen and (max-width: 450px) {
    width: 19px;
    height: 19px;
    margin: 0 3px;
  }
`;

const AlphaBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  /* z-index: 50; */
  transition: 0.3s;
  cursor: pointer;
  ${ProjectSide}:hover & {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const TextSide = styled.div`
  position: relative;
  flex: 0;
  min-width: 280px;
  height: 100%;
  color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media only screen and (max-width: 1200px) {
    min-width: 190px;
  }
  @media only screen and (max-width: 992px) {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 15px;
  @media only screen and (max-width: 1200px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 992px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 16px;
  }
`;

const Desc = styled.p`
  font-size: 16px;
  line-height: 1.8rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 18px;
  @media only screen and (max-width: 1200px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 992px) {
    font-size: 18px;
    line-height: 1.7rem;
    margin-bottom: 15px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 14px;
    line-height: unset;
    margin-bottom: 8px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 12px;
  }
`;

const Techs = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  margin: 0;
  @media only screen and (max-width: 1200px) {
    margin-bottom: 13px;
  }
  @media only screen and (max-width: 992px) {
    width: 100%;
    height: unset;
    margin: 0;
    margin-bottom: 15px;
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
    height: unset;
    margin: 0;
    margin-bottom: 10px;
  }
`;

const TechItem = styled.li`
  font-weight: 600;
  font-size: 14px;
  margin: 5px 15px;
  color: ${(props) => props.theme.color};
  @media only screen and (max-width: 1200px) {
    font-size: 14px;
    margin: 5px 10px;
  }
  @media only screen and (max-width: 992px) {
    font-size: 16px;
    margin: 5 15px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 12px;
    line-height: unset;
    margin: 3 5px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 10px;
  }
`;

const Icons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: white;
  }
  i {
    font-size: 20px;
    padding: 5px;
    margin: 20px;
    transition: color 0.2s;
    :hover {
      color: ${(props) => props.theme.color};
    }
    @media only screen and (max-width: 1200px) {
      font-size: 18px;
      padding: 5px 15px;
      margin: 0 10px;
    }
    @media only screen and (max-width: 992px) {
      font-size: 18px;
      padding: 5px 15px;
      margin: 0 10px;
    }
    @media only screen and (max-width: 600px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 450px) {
      font-size: 14px;
    }
    @media only screen and (max-width: 350px) {
      font-size: 12px;
    }
  }
`;

const theme = {
  color: "#ff350d",
};
