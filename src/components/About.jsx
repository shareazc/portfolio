import React from "react";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import self from "../assets/self.jpg";
import styled from "styled-components";

const Styles = styled.div`
    

    .self {
        object-fit: scale-down;
        
    }

    .portrait {
        display: flex;
        height: 90vh;
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
                    <h1>Super cool and awesome description about me</h1>
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