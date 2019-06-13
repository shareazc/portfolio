import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import LLogo from "../assets/LFavicon.png";


const Styles = styled.div`
  .projectCard {
    display: flex;
    flex-direction: row;
    background-color: #f7f7f7;
  }

  .thumbnail {
    max-width: 100%;
    height: auto;
  }

  .projectImage {
    padding: 20px;
  }

  .projectInfo {
    padding: 20px;
    align-content: center;
    justify-content: center;
  }

  @media only screen and (max-width:425px) {
    .projectCard {
      display: block;
    }

    .content {
      width: 100%;
    }
  }
`;

class Projects extends React.Component {
  render() {
    return (
      <Container>
        <h2>Some of my work here</h2> <br />
        <Styles>

          <div className="projectCard">
            <div className="content projectImage">
              <img src={LLogo} className="thumbnail" />
            </div>
            <div className="content projectInfo">
              <h2>Organa</h2>
              <p>Cool description</p>
              <Button variant="link">Read More</Button>
            </div>
          </div><br/>

          <div className="projectCard">
            <div className="content projectImage">
              <img src={LLogo} className="thumbnail" />
            </div>
            <div className="content projectInfo">
              <h2>Burger Queen</h2>
              <p>Cool description</p>
              <Button variant="link">Read More</Button>
            </div>
          </div><br/>

          <div className="projectCard">
            <div className="content projectImage">
              <img src={LLogo} className="thumbnail" />
            </div>
            <div className="content projectInfo">
              <h2>Pokédex Go!</h2>
              <p>Cool description</p>
              <Button variant="link">Read More</Button>
            </div>
          </div><br/>

        </Styles>
      </Container>
    );
  }
}

export default Projects;
