import React from "react";
import firebase from "../firebase";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const Styles = styled.div`

.reqCard {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
}

.thumbnail {
  max-width: 15rem;
  height: auto;
  -background-color: #f1f1f1
  
}

.reqImage {
  padding: 4rem;
}

.reqInfo {
  padding-top: 8rem;
  align-content: center;
  justify-content: center;
}

@media only screen and (max-width:425px) {
  .reqCard {
    display: block;
  }

  .reqInfo {
    padding-top: 0rem;
    text-align: center;
  }

  .content {
    width: 100%;
  }

  .thumbnail {
    max-width: 100%;
  }
}

`

class OrganaCards extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        requirements: []
      }
    }
  
    componentDidMount() {
      const dBRef = firebase.database().ref();
      const organaRef = dBRef.child('organa');
      organaRef.on('value', snap => {
        let organaReq = snap.val();
        let newState = [];
        for (let requirement in organaReq) {
          newState.push ({
            id: requirement,
            title: organaReq[requirement].title,
            text: organaReq[requirement].text,
            img: organaReq[requirement].img,
          })
        }
        this.setState({
            requirements: newState
        })
      })
    }
  
    render() {
      return (
        <Container>
          <Styles>
        <div className="requirements">
          {this.state.requirements.map((requirement) => {
            return(
              <div className="reqCard">
                <div className="content reqImage">
                  <img src={requirement.img} className="thumbnail" alt="" />
                </div>
                <div className="content reqInfo">
                  <h2>{requirement.title}</h2>
                  <p>{requirement.text}</p>
                </div>
              </div>
            ) 
          })}
        </div>
        </Styles>
        </Container>
      )
    }
  
  }
  
  export default OrganaCards;