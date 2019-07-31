import React from "react";
import Container from "react-bootstrap/Container";
import OrganaCards from "./OrganaCards";
import Footer from "./Footer";
import mockup from "../assets/mockupOrgana.jpg";
import mockupMob from "../assets/mockupOrganaMob.png";
import proto from "../assets/OrganaDev.jpg";
import protoMob from "../assets/OrganaDevMob.jpg";
import scanscreen from "../assets/organaScanDemo.gif";
import dashbscreen from "../assets/organaDashbDemo.gif";
import styled from "styled-components";

const emphasis = {
  color: "#ef5350"
};

const Styles = styled.div`
a {
  font-style: italic;
  color: #ef5350;

  :hover {
    color: crimson;
    text-decoration: underline;
  }
}

.title {
  text-align: center;
  color: white;
  background-color: #222222;
  min-height: 90vh;
  padding-top: 10vh;
  padding-bottom:10vh;

  & h1 {
    font-size: 10vh;
    margin-bottom: 2rem;
  }

  & p {
    font-style: italic;
    font-size: 15pt
  }
}

.mockup {
  background: url(${mockup}) no-repeat;
  background-size: contain;
  height: 130vh;
}

.role {
  padding: 10vh 0 10vh 0;
}

.assistance {
  padding: 10vh 0 10vh 0;
  background-color: #f1f1f1;
}

.requirements {
  padding: 10vh 0 10vh 0;
}

.third {
  padding: 10vh 0 10vh 0;
  background-color: #f1f1f1;
}

.qrCodes {
  padding: 10vh 0 10vh 0;
  background-color: #f1f1f1;
}

.fourth {
  padding: 10vh 0 10vh 0;
}

.uxUi {
  display: flex;
  text-align: center;
  margin-top: 5rem;
}

.uxUi div {
  width: 50%;
  padding: 0 5rem 0 5rem;
  border-style: solid;
  border-color: #f1f1f1;
  border-width: 0.5rem;
}

.scanner {
  background: url(${proto}) no-repeat;
  background-size: contain;
  height: 20rem;
}

.screens {
  padding: 10vh 0 10vh 0;
  text-align: center;
}


.prototype {
  text-align: center;
  color: white;
  background-color: #222222;
  padding: 10vh 0 10vh 0;
  display: block;
  justify-content: center;
}

.dashboard {
  text-align: center;
  color: white;
  background-color: #222222;
  padding: 10vh 0 10vh 0;
  display: block;
  justify-content: center;
}


.fifth {
  padding: 10vh 0 10vh 0;
}

.features {
  padding: 10vh 0 10vh 0;
  background-color: #f1f1f1;
}

.stacks {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10vh 0 10vh 0;
}

.stacks div {
  width: 50%;
  padding: 0 5rem 0 5rem;
  border-style: solid;
  border-color: #f1f1f1;
  border-width: 0.5rem;
}

.end {
  padding: 10vh 0 10vh 0;
  background-color: #f1f1f1;
}

@media only screen and (max-width: 768px) {
  .prototype img {
    max-height: 10rem;
  }

  .dashboard img {
    max-height: 10rem;
  }
}

@media only screen and (max-width:600px) {

  .mockup {
    background: url(${mockupMob}) no-repeat;
    background-size: contain;
}

.uxUi {
  flex-wrap: wrap;
}

.uxUi div {
  width: 100%;
}

.scanner {
  background: url(${protoMob}) no-repeat;
  background-size: contain;
  height: 100vh;
}

.prototype img {
  max-height: 10rem;
}

.dashboard img {
  max-height: 10rem;
}

.stacks div {
  padding: 0;
}

`;

class Organa extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Styles>
          <div className="title">
            <Container>
              <h1>Organa: Talent Manager</h1>
              <p>
                In Laboratoria, our Personal Development Coordinator takes on
                the monumental task of overseeing that each student has the
                emotional and professional tools needed to thrive and become a
                front-end developer from scratch, the students often have
                complex life situations that need close follow-up and
                personalized solutions, on top of that she also has to take care
                of taking assistance each day - Her only tool? A spreadsheet.
              </p>
              <p>She deserved better.</p>
            </Container>
          </div>

          <div className="mockup" />

          <div className="second">
            <Container>
              <p>
                This project was comissioned as part of an Open House Event in
                Laboratoria. We had two days to develop our minimum viable
                product and pitch our project to some of the biggest tech
                companies in Guadalajara. For this two-day challenge, we set out
                to create an app that could take assistance easily and
                autonomously in order to reduce the time spent on this daily
                task (roughly 30 minutes).
              </p>
            </Container>
          </div>

          <div className="role">
            <Container>
              <h3>My role</h3>
              <p>
                I was part of the pitch team and responsible for the experience
                strategy. I designed the interface of the app and the
                high-fidelity prototype as well as developed the style of the
                app from the front-end and the development of the QR Code
                generator for this application.
              </p>
            </Container>
          </div>

          <div className="assistance">
            <Container>
              <h3>Not just an assistance log</h3>
              <p>
                After an interview with our client, we noticed that the main
                issue was that taking assistance was too time-consuming and the
                obtained information was hard to read due to the massive amount of it.
              </p>
              <p>
                We were able to identify their needs and propose valuable
                features for this project:
              </p>
            </Container>
          </div>

          <div className="requirements">
            <OrganaCards />
          </div>

          <div className="third">
            <Container>
              <h3>Let's make this happen.</h3>
              <p>
                This was the first time in 4 months of programming that we had
                the opportunity to try newer technologies such as React and even
                if that mean spending extra time with a learning curve we as a
                team decided that the learning experience was worth the risk.
              </p>

              <p>
                In favor of maintainability we also decided to connect our
                project remotely to the students' database instead of having a
                static file within the code. This ultimately allowed us to
                enhance the staff's control over the students' list should there
                be any last-minute change in it.
              </p>

              <p>
                And since one of our priorities was to optimize time, we chose
                quick-response codes as our main tool, they could be scanned in
                any orientation and withstand damage without losing readability.
              </p>
            </Container>
          </div>

          <div className="data">
            <Container />
          </div>

          <div className="fourth">
            <Container>
              <p>
                I wanted the best experience for our client but I wasn't sure
                how to deliver since my expertise in design was limited so I
                observed what we wanted to improve:
              </p>

              <p>
                We had a cluttered screen with an ridiculous amount of rows and
                colums full of important and some not-so-important information,
                all of this piled on a rather ugly and impersonal spreadsheet
                labeled almost as confidential due to the private notes from
                each student it contained.
              </p>

              <p>Knowing what had to change, I set simple goals:</p>

              <div className="uxUi">
                <div>
                  <p>
                    <h2>UX</h2>
                  </p>
                  <p>
                    Our first step was to separate the scanner screen that every
                    student would have access to from the dashboard that
                    contained information exclusive for our client. It would be
                    much easier to just set up a tablet or laptop with the
                    scanner and let every student log their assistance as they
                    arrived.
                  </p>
                  <p>
                    And just to be extra sure that no curious eyes would try to
                    read private information, we added a login screen in order
                    to be able to access the dashboard.
                  </p>
                </div>

                <div>
                  <p>
                    <h2>UI</h2>
                  </p>
                  <p>
                    My main goal was to reduce the clutter that caused
                    unnecessary eye stress to our client and display the
                    information in a simple and orderly fashion.
                  </p>
                  <p>
                    I also wanted the first impression of the app to be as
                    user-friendly as possible, considering that most of the
                    newer students often feel intimidated by technology.
                  </p>
                  <p>
                    And finally I wanted the general style to be familiar with
                    our client's brand guidelines whilst maintaining a
                    straight-forward and clean screen.
                  </p>
                </div>
              </div>
            </Container>
          </div>

          <div className="scanner" />

          <div className="screens">
            <Container>
              <p>
                <h3>Due to privacy reasons, I will only show the prototype version
                  of the next screens.
                </h3>
              </p>
            </Container>
          </div> 

          <div className="prototype">
            <p><i>The scanner screen that all students would have access to.</i></p>
            <img src={scanscreen} alt="Screen showing the scanner"/>
          </div>

          <div className="dashboard">
            <p><i>Once logged in, this is the dashboard our client would see.</i></p>
            <img src={dashbscreen} alt="Dashboard screen for the client"/>
          </div>

          <div className="fifth">
            <Container>
              <p>
                After this, we decided Organa had the potential to become a real
                tool for Laboratoria and with help of our coaches, we started 
                marking issues from the original code to work on them. 
              </p>

              <p>This project is currently being used in Laboratoria and it is
                intended to be a sort of a heirloom with every generetion adding
                to it and improving it's functionality. Even after we graduate, 
                the hi-fi prototype will guide the next batch of developers.
              </p>

              <p>
                Organa has accomplished it's goal in reducing the time spent by 
                our Personal Development Coordinatior every day taking assistance
                and making her mornings a bit less monotonous. We also hope that
                through this project we inspire more students to realize that 
                they don't need to be senior developers to create tools that 
                help people.
              </p> 
            </Container>
          </div>

          <div className="features">
            <Container>
              <h3>Technical features</h3>

              <p>• Code validation:</p>
              <p style={emphasis}>
                Does not accept foreign/invalid/external codes.
                Only takes assistance once per code scanned.
              </p>
              <p>• Updates the dashboard automatically as the codes are scanned</p>
              <p>• Updates the date automatically</p>
              <p>• Filters list of absentees</p>
              <p>• Shows full student list</p>
            </Container>
          </div>

          <div className="stacks">
                    <div>
                        <h2>Stacks</h2>

                        <p>• Adobe Xd</p>
                        <p>• Adobe Illustrator</p>
                        <p>• HTML5</p>
                        <p>• CSS3 + Styled Components</p>
                        <p>• Javascript</p>
                        <p>• Google Firebase</p>
                        <p>• React JS + React Bootstrap</p>
                    </div>
                </div>

          <div className="end">
            <Container>
              <p>
                
                  Check out this project on <a href="https://github.com/shareazc/open-house-organa/blob/master/organa/README.md"
                  target="_blank"  rel="noopener noreferrer"> Github.
                </a>
              </p>
              <p>
                You can see the hi-fi prototype<a href="https://docs.google.com/presentation/d/1yj1rQCJIHzIW_Iaoxl154F97FI9OZlDVKBovKRIn2xo/edit?usp=sharing" target="_blank"  rel="noopener noreferrer"> here.</a>
              </p>
            </Container>
          </div>
        </Styles>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Organa;
