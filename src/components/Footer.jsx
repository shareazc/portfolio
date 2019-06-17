import React from "react";
import styled from "styled-components";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Styles = styled.div`
    .footer {
        background-color: #222222;
        display: flex;
        flex-direction: column;
        height: 30vh;
        align-items: center;
        justify-content: center;
    }

    .icons {
        display: flex;
        flex-direction: row;

    }

    p {
        color: #bbb;
    }

    h3 {
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
                    <div><p>Reach me on social media</p></div>
                    <div className="icons">
                        <h3>
                        <a href="https://www.linkedin.com/in/shareni-azcarraga/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                        </h3>

                        <div className="middle" />

                        <h3>
                        <a href="https://github.com/shareazc" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        </h3>
                    </div>
                </div>
            </Styles>
        );
    }
}

export default Footer;
