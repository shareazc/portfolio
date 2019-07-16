import React from "react";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import self from "../assets/self.jpg";
import CV from "../assets/CV-Share-Azcarraga.pdf";
import styled from "styled-components";

const emphasis = {
  color: "#ef5350"
}

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

.h1, h1 {
  display: inline;
  color: white;
  position: sticky;
  left: 50%;
}

.portrait {
    width: 100%;
    background-color: #222222;
    margin-top: 3rem;
  }

.intro {
  font-size: 1.5rem;
  -text-align: center;
  padding: 2rem;
  clear: left;
  }

.collage {
  }

.quote {
  }

.interests {
  }

  @media only screen and (max-width: 425px) {
    .self {
        float: none;
    }

    .self img {
        max-height: 25rem;
        align-self: center;
    }

    .portrait {
      margin-top: 0;
      text-align: center;
    }

    .h1, h1 {
      display: none;
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
                <img src={self} alt="portrait-picture" />
            </div>
              <h1>Hello, I'm Share!</h1>
            </div>

            <div className="intro">
            <p>
                I believe that it is our responsability as developers to shine 
                a new light on technology as a comprehensive and intuitive tool 
                to solve the new problems we face every day.
            </p>

            <p>
                I have a mix-matched background in <i style={emphasis}>music, psychology</i> and as an
                <i style={emphasis}> entrepreneur</i> of my own business. I recently graduated from
                <b style={emphasis}> Laboratoria</b>: an intensive 6-month long dev Bootcamp that empowers women and
                helps them kickstart a career in the tech industry.
            </p>

            <p>
                Aside from that I also love barbeques because they put together my
                two favorite things: food and hanging out.
            </p>

            <p>I’m based in Guadalajara, MX and you can download my resume 
              <a href= {CV} download="Shareni-Azcarraga-resume" style={emphasis}> here.</a>
              </p>
            </div>

          <div className="collage" />

          <div className="quote" />

          <div className="interests" />

          <Container />
        </Styles>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
