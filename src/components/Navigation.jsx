import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
    height: 15%;
  }

  .navbar-brand,
  .h6,
  h6 {
    color: #bbb;

    &:hover {
      color: white;
    }
  }

  a {
    text-decoration: none;
  }
`;

class Navigation extends React.Component {
  render() {
    return (
      <Styles>
        <Navbar variant="dark" expand="lg">
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
                <Nav.Link>
                  <Link to="/contact">
                    <h6>Let's talk</h6>
                  </Link>
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
