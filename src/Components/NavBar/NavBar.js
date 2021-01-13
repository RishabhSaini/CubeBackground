import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand>Rishabh Saini</Navbar.Brand>
      <Nav.Link>
        <Link to="DestaboutMe" spy={true} smooth={true} duration={500}>
          About Me
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="DestProjects" spy={true} smooth={true} duration={500}>
          Projects
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="DestExperience" spy={true} smooth={true} duration={500}>
          Exprience
        </Link>
      </Nav.Link>
    </Navbar>
  );
};

export default NavBar;
