import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Footer from "./Footer";

const emphasis = {
    color: "#ef5350"
}

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

.description {
    padding-top: 10vh;

    p {
        margin: 10vh 0 10vh 0;
    }
}

.challenge {
    padding: 10vh 0 10vh 0;
    background-color: #f1f1f1;
}

.chicken {
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

@media only screen and (max-width:600px) {
    .stacks {
        flex-wrap: wrap;
    }
    
    .stacks div {
        width: 100%;
    }
}
`

class MobileGame extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Styles>
                <div className="title">
                    <h1>Apocallypse</h1>
                    <p>It's the end of the world, good luck avoiding getting killed
                        by falling meteorites.
                    </p>
                    <p>Also, you're a chicken.</p>
                </div>
                <img src="https://i.imgur.com/ywYYQLm.jpg" alt="Mobile mockup of the game" className="mockup"/>
                <div className="description">
                    <Container>
                        <p>This project was born out of two of my dearest interest: videogames and animals.</p>
                        <p>I had previously made a mobile game (See Tic-Tac-Toe Native) however
                            I wasn't too thrilled with it, so I began researching how game development worked. 
                            The amount of game engines that existed was intimidating so I decided to take step 
                            one on known territory: <b style={emphasis}>Unity.</b>  I had neved used it before 
                            but I had played games developed on Unity and liked them, so I thought that was a 
                            good place to start as any and set to work. 
                        </p>
                    </Container>
                </div>

                <div className="challenge">
                    <Container>
                        <h3>Learning a new language in a week</h3>
                        <p>
                            The biggest challenge I encountered with this project was that I didn't know Unity used <b style={emphasis}>C# </b>
                            as developing language and I only knew Javascript so it took me a bit to understand the new
                            syntax. I also learned that when you're developing a game and you program the movement to take 
                            input from the player it's a different thing to program input take from a keyboard than a touchscreen.
                        </p>
                        </Container>
                </div>

                <div className="chicken">
                    <Container>
                        <p>
                            The whole chicken-theme began as a joke. I was talking to my wife about all those predictions
                            of the end of the world and she said "We're all gonna die, well, probably not chickens but that's
                            because they're the devil incarnate." (She's really scared of birds) And I thought, you know what?
                            Chickens are actually very smart! A lot of training behaviourists pay big money to train chickens,
                            their quickness help people develop their coordination and sensitivity, so yeah, chickens could
                            totally survive the apocalypse but because of how cool they are. 
                        </p>
                        <p>
                            Also in spanish the word for small chicken is "pollito", so when it came down to choose a name
                            for the game I just thought "pollito" + apocalypse = Apocallypse.
                        </p>
                    </Container>
                </div>

                <div className="stacks">
                    <div>
                        <h2>Stacks</h2>
                        <p>• Unity Game Engine</p>
                        <p>• C#</p>
                        <p>• Adobe Illustrator</p>
                    </div>
                </div>
                
                <div className="end">
                    <Container>
                        <p>You can download the game for Android <a href="https://bit.ly/2JKtsbm" download="Apocallypse">here.</a></p>
                        <p><i>Be aware that your phone must be enabled to install apps from external sources.</i></p>
                    </Container>
                </div>
                </Styles>
                <Footer />
            </React.Fragment>
        )   
    }
}

export default MobileGame;