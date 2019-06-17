import React from "react";
import firebase from "../firebase";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
//import LLogo from "../assets/LFavicon.png";


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

  constructor() {
    super();
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
          img: portProject[project].img
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
        <h1>Some of my work here</h1><br />
        {this.state.projects.map((project) => {
          return(
            <div className="projectCard">
            <div className="content projectImage">
              <img src={project.img} className="thumbnail" alt="" />
            </div>
            <div className="content projectInfo">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <Button variant="link">Read More</Button>
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


//Static Project divs
/*
  render() {
    return (
      <Container>
        <h2>Some of my work here</h2> <br />
        <Styles>

          {this.state.projects.map}
          <div className="projectCard">
            <div className="content projectImage">
              <img src={LLogo} className="thumbnail" alt="Organa" />
            </div>
            <div className="content projectInfo">
              <h2>Organa</h2>
              <p>Cool description</p>
              <Button variant="link">Read More</Button>
            </div>
          </div><br/>

          <div className="projectCard">
            <div className="content projectImage">
              <img src={LLogo} className="thumbnail" alt="Burger Queen" />
            </div>
            <div className="content projectInfo">
              <h2>Burger Queen</h2>
              <p>Cool description</p>
              <Button variant="link">Read More</Button>
            </div>
          </div><br/>

          <div className="projectCard">
            <div className="content projectImage">
              <img src={LLogo} className="thumbnail" alt="Pokedex Go" />
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
*/



//Individual project card
/*
<div className="projectCard">
            <div className="content projectImage">
              <img src={project.img} className="thumbnail" alt="" />
            </div>
            <div className="content projectInfo">
              <h2>{project.name}</h2>
              <p>{project.descAription}</p>
              <Button variant="link">Read More</Button>
            </div>
          </div>
*/

//Unsuccessful attempt with React
/* 
class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      speed:10,
    }
  }

  componentDidMount () {
    const dBRef = firebase.database().ref();
    const projectsRef = dBRef.child('projects');
    projectsRef.on('value', snap => {
      let portfolio = snap.val();
      let newState = [];
      for (let project in portfolio) {
        newState.push({
          id: project,
          name: portfolio[project].name,
          description: portfolio[project].description,
          img: portfolio[project].img
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
        <h2>Some of my work here</h2> <br />
        <Styles>

          {this.state.projects.map((project) => {
            return (

            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>{project.img}</p>
            </div>
          

            );
          })}
          

        </Styles>
      </Container>
    );
  }
}

export default Projects;
*/