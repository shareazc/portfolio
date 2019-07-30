import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
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

.mockup{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%
}

.description{
    padding: 10vh 0 10vh 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.qrCode {
    padding-top:3 rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%
}

.end{
    background-color: #f1f1f1;
    padding: 10vh 0 10vh 0;
}

@media only screen and (max-width:600px) {}
`

class TicTacToe extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Styles>
                <div className="title">
                    <h1>GXTO</h1>
                    <p>The classic game of tic-tac-toe developed on React Native</p>
                </div>
                <img src="https://i.imgur.com/ZLp8pLb.jpg" className="mockup"/>
                <div className="description">
                    <Container>
                    <p>This is the first project I ever made on React Native that's very dear to me
                        despite it's simplicity I really enjoyed working on it.
                    </p>

                    <p>My tester was my 4 year old nephew who is just learning shapes and colors, so 
                        I tried to make it as simple as possible design-wise. This
                        is meant to be played with the help of an adult, or more specifically, my 
                        brother so I tried to go easy on him and mute the colors a little bit.
                    </p>

                    <p>
                        After doing <a href="https://www.sciencedirect.com/science/article/pii/088520069090013Q">some research</a> I discovered that tic-tac-toe is a highly recommended 
                        game for small children (3 - 9 years old) due to several cognitive processes they
                        develop playing the game: 
                    </p>

                    <p>
                    <ul>
                        <li>The temporal perception of the game, that is that only the first player to complete it, wins</li>
                        <li>They learn how to predict their opponent's movements, they learn to block them</li>
                        <li>Once they've successfully learned to coordinate how to block and how to get the 3 figures 
                            in a row, they can develop strategies to win. This requires thinking 2 or more moves ahead.</li>
                    </ul>
                    </p>

                    <p>To play this game you need to download the Expo app and scan this QR code</p>
                    <img src="https://i.imgur.com/ypYOqGV.png" className="qrCode"/>
                    </Container>
                </div>

                <div className="end">
                    <Container>
                    <p>You can also check out the project on <a href="https://expo.io/@sdanvers/gxto-react-native" target="_blank">Expo.</a></p>
                    <p>Or see the full repository on <a href="https://github.com/shareazc/GXTO" target="_blank">GitHub.</a></p>
                    </Container>
                </div>
                </Styles>
                <Footer />
            </React.Fragment>
        )
    }
}

export default TicTacToe;