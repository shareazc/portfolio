import React from 'react';
import styled from "styled-components";

const Styles = styled.div`
    .footer {
        background-color: #222;
        display: flex;
        height: 30vh;
        
    }
`;

class Footer extends React.Component {
    render () {
        return (
            <Styles>
            <div className="footer"> 
            
            </div>
            </Styles>
        )
    }
}

export default Footer;