import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFlag } from "react-icons/fa";


const Styles = styled.div`
  .navbar {
    background-color: #222;
    height: 15%;
  }

  .navbar-brand,
  .h6,
  h6 {
    color: #bbb;
    margin: 0;

    &:hover {
      color: white;
    }
  }

  a {
    text-decoration: none;
  }

  svg {
    color: #32cd32;
  }

  }
`;

class Navigation extends React.Component {
  render() {
    return (
      <Styles>
        <Navbar variant="dark" expand="lg" autofocus>
          <Navbar.Brand>
            <Nav.Link>
              <Link to="/">
                <h6>Share Azcárraga</h6>
              </Link>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link>
                  <Link to="/about">
                    <h6>Get to know me</h6>
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/projects">
                    <h6>See my work</h6>
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link target="_blank" href="mailto:shareni.azcarraga@gmail.com?subject=I'd like to Hire you!">
                  <h6>Currently available for hiring <FaFlag /></h6>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}

export default Navigation;
