import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

const Styles = styled.div`
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

.end{
    background-color: #f1f1f1;
    padding: 10vh 0 10vh 0;
}

@media only screen and (max-width:425px) {}
`

class MobileGame extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Styles>
                <div className="title">
                    <h1>Apocallipsis</h1>
                    <p>It's the end of the world, good luck avoiding getting killed
                        by falling meteorites.
                    </p>
                    <p>Also, you're a chicken.</p>
                </div>
                <div className="mockup"></div>
                <div className="description"></div>
                <div className="end"></div>
                </Styles>
                <Footer />
            </React.Fragment>
        )
    }
}

export default MobileGame;