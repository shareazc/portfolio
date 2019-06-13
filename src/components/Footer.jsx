import React from "react";
import styled from "styled-components";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import github from "../assets/github.png";
import linkedIn from "../assets/linkedin.png";

/*
const Styles = styled.div`
    .footer {
        background-color: #222;
        display: flex;
        height: 30vh;
        align-items: center;
        justify-content: center;
    }

    .p {
        color: #aaa;
    }

    .contactIcon {
        max-width:20%;
        max-height:20%;
        display: block;
        margin: auto;
    }
`;

class Footer extends React.Component {
    render () {
        return (
            <Styles>
            <div className="footer"> 

            <div><a href="https://github.com/shareazc" target="_blank"><img src={github} className="contactIcon" alt="github"/></a></div>
            <div><a href="https://www.linkedin.com/in/shareni-azcarraga/" target="_blank"><img src={linkedIn} className="contactIcon" alt="linked in"/></a></div>

            </div>
            </Styles>
        )
    }
}
*/

const Styles = styled.div`
    .footer {
        background-color: #222222;
        display: flex;
        height: 30vh;
        align-items: center;
        justify-content: center;
    }

    .icons {
        display: flex;
        flex-direction: row;

    }

    h5 {
        color:#bbb;
    }

    p {
    color: #bbb;

    &:hover {
        color: white;
        }
    }

    .middle {
        width: 10vw;
    }
`;

class Footer extends React.Component {
    render() {
        return (
            <Styles>
                <div className="footer">

                    <div className="icons">
                        <p>
                        <a href="https://www.linkedin.com/in/shareni-azcarraga/" target="_blank">
                            <FaLinkedinIn />
                        </a>
                        </p>

                        <div className="middle" />

                        <p>
                        <a href="https://github.com/shareazc" target="_blank">
                            <FaGithub />
                        </a>
                        </p>
                    </div>
                </div>
            </Styles>
        );
    }
}

export default Footer;
