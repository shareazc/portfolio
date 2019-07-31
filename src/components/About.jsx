import React from "react";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import self from "../assets/self.jpg";
import collage from "../assets/collagePortfolio.jpg";
import CV from "../assets/CV-Share-Azcarraga.pdf";
import styled from "styled-components";

const emphasis = {
  color: "#ef5350"
};

const Styles = styled.div`
  .self {
    display: inline;
    object-fit: scale-down;
  }

  .selfQuote {
    display: inline;
    justify-content: center;
    text-align: middle;
  }

  .portrait {
    width: 100%;
    background-color: #222222;
    margin-top: 0;
    text-align: center;
  }

  .intro {
    font-size: 1.5rem;
    padding: 2rem;
    clear: left;
  }

  .collage {
    object-fit: contain;
    width: 100%;
  }

  .quote {
    padding: 2rem;
    background-color: #f1f1f1;

    p {
      font-size: 1.5rem;
      font-style: italic;
      color: #ef5350;
    }

    h5 {
      margin-right: 0;
      text-align: right;
    }
  }

  @media only screen and (max-width: 600px) {
    .self {
      float: none;
    }

    .self img {
      max-height: 25rem;
      align-self: center;
    }

    .intro {
      font-size: 1rem;
      text-align: center;
      padding: 2rem;
    }
  }
`;

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Styles>
          <div className="portrait">
            <div className="self">
              <img src={self} alt="" />
            </div>
          </div>

          <div className="intro">
            <Container>
            <p>
              Hi, I'm Share. I'm a front-end developer with a passion for good UI design
              and UX research. I believe that it is our responsability as
              developers to shine a new light on technology as a human-comprehensive
              and intuitive tool to solve the new challenges we face everyday.
            </p>

            <p>
              I have a mix-matched background in{" "}
              <i style={emphasis}>music, psychology</i> and as an
              <i style={emphasis}> entrepreneur</i> of my own business. I
              recently graduated from
              <b style={emphasis}> Laboratoria</b>: an intensive 6-month long
              dev Bootcamp that empowers women and helps them kickstart a career
              in the tech industry.
            </p>

            <p>
              Aside from that I also love barbeques because they put together my
              two favorite things: food and hanging out.
            </p>

            <p>
              I’m based in Guadalajara, MX and you can download my resume
              <a href={CV} download="Shareni-Azcarraga-resume" style={emphasis}>
                {" "}
                here.
              </a>
            </p>
            </Container>
          </div>

          <div className="quote">
            <Container>
            <p>“For me, I am driven by two main philosophies: know more today about 
              the world than I knew yesterday and lessen the suffering of others. 
              You'd be surprised how far that gets you.” </p>
            <h5>― Neil deGrasse Tyson</h5>
            </Container>
          </div>

            <img src={collage} className="collage" alt="collage"/>




          <div className="interests">
          </div>

          
        </Styles>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
