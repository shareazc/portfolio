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
        display: flex;
        height: 90vh;
        width: 100%;
        background-color: #f1f1f1;
        text-align:
    }

    .h1, h1 {
        text-align: center;
        justify-content: center;
    }
`

class About extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Styles>
                
                <div className="portrait">
                    <h1>Super cool and<br/> awesome description <br/> about me</h1>
                    <img className="self" src={self} alt="portrait"/>
                </div>
                
                <Container>
                </Container>
                </Styles>
                <Footer />
            </React.Fragment>
        )
    }
}

export default About;