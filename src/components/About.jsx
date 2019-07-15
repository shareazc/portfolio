import React from "react";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import self from "../assets/self.jpg";
import styled from "styled-components";

const Styles = styled.div`
.self {
    background-color: black;
    object-fit: scale-down;
    float: right;
  }

.portrait {
    width: 100%;
    background-color: #f1f1f1;
    padding: 3rem;
  }

.intro {
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
        background-color: #f1f1f1;
        height: 25rem;
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
            </div>

            <div className="intro">
            <p>
                I believe that the more we as developers help people to connect
                through technology and provide human, comprehensive solutions, the
                more we can inspire more people to take direct action towards
                creating and supporting communities.
            </p>

            <p>
                I have a mix-matched background in music, psychology and as an
                entrepreneur of my own business. I recently graduated from
                Laboratoria: an intensive dev Bootcamp that empowers women and
                helps them kickstart a career in the tech industry.
            </p>

            <p>
                Aside from that I also love barbeques because they put together my
                two favorite things: food and hanging out.
            </p>

            <p>I’m based in Guadalajara, MX</p>
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
