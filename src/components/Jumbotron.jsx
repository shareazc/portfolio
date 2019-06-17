import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";

//import ireland from '../assets/ireland.jpg';
import dnd from "../assets/DnD-Cropped.jpg";

const Styles = styled.div`
    .jumbo {
        background: url(${dnd}) no-repeat fixed bottom;
        background-size: cover;
        height: 75vh;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #f1f1f1;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

    .h1, h1 {
        font-size: 3rem;
    }

    .h1, h1, .p, p {
      color: #181818;
      //text-shadow: 1px 1px white;
    }

`;

class Jumbotron extends React.Component {
  render() {
    return (
    <Styles>
      <Jumbo fluid className="jumbo">
          <div className="overlay"></div>
            <Container>
            <h1>Hi! I'm Share</h1>
            <h1>I'm a Front-end developer</h1>
            <p>
                I'm also a musician and dog behaviorist
            </p>
            </Container>
      </Jumbo>
      </Styles>
    );
  }
}

export default Jumbotron;
