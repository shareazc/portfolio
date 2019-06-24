import React from "react";
import firebase from "../firebase";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Button from "react-bootstrap/Button";



const Styles = styled.div`
  .projectCard {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row;
    background-color: #f1f1f1;
  }                   #f7f7f7

  .thumbnail {
    max-width: 100%;
    height: auto;
  }

  .projectImage {
    padding: 2rem;
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

    .thumbnail {
      max-width: 100%;
    }
  }
`;

class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    const dBRef = firebase.database().ref();
    const projectsRef = dBRef.child('projects');
    projectsRef.on('value', snap => {
      let portProject = snap.val();
      let newState = [];
      for (let project in portProject) {
        newState.push ({
          id: project,
          name: portProject[project].name,
          description: portProject[project].description,
          img: portProject[project].img,
          url: portProject[project].url
        })
      }
      this.setState({
        projects: newState
      })
    })
  }

  render() {
    return (
      <Container>
        <Styles>
      <div className="Projects">
        <h1>See my work here</h1><br />
        {this.state.projects.map((project) => {
          return(
            <div className="projectCard">
              <div className="content projectImage">
                <img src={project.img} className="thumbnail" alt="" />
              </div>
              <div className="content projectInfo">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <Button variant="link"><Link to={project.url}>Read More</Link></Button>
              </div>
            </div>
          ) 
        })}
      </div>
      </Styles>
      </Container>
    )
  }

}

export default Projects;