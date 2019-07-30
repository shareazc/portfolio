import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container"
import Footer from "./Footer";

const Styles = styled.div`
a {
    font-style: italic;
    color: #ef5350;

    :hover {
        color: crimson;
        text-decoration: underline;
    }
}

.title{
    text-align: center;
    color: white;
    background-color: #222222;
    min-height: 90vh;
    padding: 10vh 0 10vh 0;

    & h1 {
        font-size: 10vh;
        margin-bottom: 2rem;
        }
    
    & p {
        font-style: italic;
        font-size: 15pt
        }
} 

.mockup{}

.description{
    padding: 10vh 0 10vh 0;
}

.stacks {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 10vh;
}

.stacks div {

    width: 50%;
    padding: 0 5rem 0 5rem;
    border-style: solid;
    border-color: #f1f1f1;
    border-width: 0.5rem;
}

.end{
    background-color: #f1f1f1;
    padding: 10vh 0 10vh 0;
}

@media only screen and (max-width:600px) {}
`

class MdLinks extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Styles>
                <div className="title">
                    <h1>MD.Links</h1>
                    <p>When life gives you broken links... create a npm module
                        to tell them apart from working ones.
                    </p>
                </div>
                <div className="mockup"></div>
                <div className="description">
                    <Container>
                    <p>
                        Checking if a url is broken or not may not be as easy as it sounds, specially when 
                        you have a large number of them and you're not really feeling like spending your day
                        waiting for 404 codes to appear when there's so much more to be done.
                    </p>

                    <p>
                        This was the first project I did that didn't involve a tangible interface, and to be 
                        honest, I did panic a little and then researched like a madwoman until I could understand
                        how it all worked. The functionality is pretty straight-forward: You input the name of 
                        the file that contains the urls and this package will return a list of how many work and
                        how many are broken. 
                    </p>
                    </Container>
                </div>

                <div className="stacks">
                    <div>
                        <h2>Stacks</h2>
                        <p>Javascript</p>
                        <p>NodeJS</p>
                    </div>
                </div>

                <div className="end">
                    <Container>
                        <p><a target="_blank" href="https://github.com/shareazc/GDL002-md-links">
                            Check out the GitHub repository.
                        </a></p>
                    </Container>
                </div>
                </Styles>
                <Footer />
            </React.Fragment>
        )
    }
}

export default MdLinks;