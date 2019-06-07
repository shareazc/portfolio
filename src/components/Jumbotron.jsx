import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import ireland from '../assets/ireland.jpg';
import styled from "styled-components";

const Styles = styled.div`
    .jumbo {
        background: url(${ireland}) no-repeat fixed bottom;
        background-size: cover;
        height: 80vh;
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
      color: white;
      text-shadow: 1px 1px #181818;
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
            <p>
                I'm a Front-end developer who loves UX/UI design
            </p>
            </Container>
      </Jumbo>
      </Styles>
    );
  }
}

export default Jumbotron;
