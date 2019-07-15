import React from "react";
import Container from "react-bootstrap/Container";
import OrganaCards from "./OrganaCards";
import Footer from "./Footer";
import mockup from "../assets/mockupOrgana.jpg";
import mockupMob from "../assets/mockupOrganaMob.png";
import styled from "styled-components";

const Styles = styled.div`
.title {
  text-align: center;
  color: white;
  background-color: #222222;
  min-height: 90vh;
  padding-top: 10vh;
  padding-bottom:10vh;

  & h1 {
    font-size: 10vh;
  }

  & p {
    font-style: italic;
    font-size: 15pt
  }
}

.first {
  padding: 10vh 0 10vh 0;
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

.data {
  padding: 10vh 0 10vh 0;
}

.qrCodes {
  padding: 10vh 0 10vh 0;
  background-color: #f1f1f1;
}

.fourth {
  padding: 10vh 0 10vh 0;
}

.scanner {
  padding: 10vh 0 10vh 0;
  background-color: #f1f1f1;
}

.dashboard {
  padding: 10vh 0 10vh 0;
}

.fifth {
  padding: 10vh 0 10vh 0;
}

.end {
  padding: 10vh 0 10vh 0;
  background-color: #f1f1f1;
}

@media only screen and (max-width:425px) {
  .mockup {
    background: url(${mockupMob}) no-repeat;
    background-size: contain;
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
              </p>{" "}
              <p>She deserved better.</p>
            </Container>
          </div>

          <div className="mockup" />

          <div className="first">
            <Container>
              <p>
                Our client needed a tool to enhance and optimize their daily
                tasks. Sitting by the door to greet every student, input their
                name and side notes on a spreadsheet was, simply put, a waste of
                time.
              </p>
            </Container>
          </div>

          <div className="second">
            <Container>
              This project was comissioned as part of an Open House Event in
              Laboratoria. We had two days to develop our minimum viable product
              and pitch our project to some of the biggest tech companies in
              Guadalajara.
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
                We developed this application with the premise that our client
                could just set up her laptop with the browser and use her time
                for other activities.
              </p>
              <p>
                By shifting the responsibility of taking assistance from our
                client to each student we could reduce the time consume by this
                task by 50%.
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
                First, we chose the technology. In 4 months we had learned to
                code in Vanilla Javascript but the last 3 weeks before this
                project came up we had been learning the bases of React JS so we
                faced our first important decision: Should we go Vanilla or
                ReactJS? Vanilla was the safest route and what we felt the most
                comfortable working with, we wouldn't have to spend extra time
                trying to figure out or work around a new technology that we had
                not yet fully mastered.
              </p>
              <p>
                On the other hand, we could probably use the practice with
                ReactJS and even though it would also come with its own learning
                curve and time wasn't something we could afford to lose in this
                project. We chose ReactJS because although it was a risky bet we
                believed that we could get the best results and learn the most
                from.
              </p>
            </Container>
          </div>

          <div className="data">
            <Container>
              <h3>Data data data</h3>
              <p>
                The second decision came in, in order to be able to work with
                real data we were provided with two options: We could create our
                own JSON file and just copy-paste the information of each
                student or fetch the data remotely from an external server. The
                fastest route would be to create the JSON file but in the long
                run, this could cause maintainability issues and it would be
                impossible to escalate this project if the JSON became too
                large.
              </p>
              <p>So we fetched the data remotely.</p>
              <p>
                Our client preferred to use QR Codes to log the assistance of
                each student so we also needed to generate a code for each
                person but we noticed that just generating a code for each
                element of the provided database wouldn't be ideal because not
                everyone had the same values nor were they relevant for the
                purpose of our app and this would ultimately make the database
                too lengthy, also we noticed that we would have to narrow our
                results since the database included coaches and 4 students that
                were no longer part of the group.
              </p>
            </Container>
          </div>

          <div className="qrCodes">
            <Container>
              And we also had to learn how to work with QR Codes, which we had
              never done before so that had another learning curve on its own.
              So overall, we listed what we would need to prioritize in order to
              deliver our minimum viable product in 2 days without prior
              knowledge on this kind of technologies:
              <ul>
                <li>Generate a personal QR Code for each student</li>
                <li>
                  Compare the information in that code to the information from
                  the database we were provided
                </li>
                <li>
                  Add and store each code to an array for the assistance of the
                  day
                </li>
                <li>
                  Display the assistance/absence of the group on a dashboard
                </li>
              </ul>
            </Container>
          </div>

          <div className="fourth">
            <Container>
              In our first iteration, we would need two main screens, the screen
              of the scanner and the dashboard with the summary so we used the
              library react-router-dom to add routes that would let us show this
              without fuss. We also wanted our app to be fully responsive so we
              used react-bootstrap due to its benefits in responsiveness and
              support from the community and the fact that the elements that we
              imported were already components compatible with React. In order
              to have better control of these components and give them the
              branding style of the client, we used styled-components which also
              allows us to enhance maintainability. Finally, we used the library
              moment to easily display the current date and have it self-update
              automatically
            </Container>
          </div>

          <div className="scanner">
            <Container>
              <h3>The scanner</h3>
              <p>
                We used a library react-qr-scanner that would allow us to access
                the device's webcam and get data from there, the data it would
                receive would be a code that we would have to generate. The flow
                was as followed: Once the qr scanner detected a code, we would
                need to store that code locally and then add the next code that
                was scanned and so on. Once we had an array of codes, we would
                need to send this to a database that we would then access to
                display on-screen how many people assisted. We chose Google
                Firebase Services to store our data for its documentation and
                easily accessible learning resources. But we came across our
                first bump in the road: We noticed that the scanner was always
                scanning something as long as it had access to the camera, so
                even though we were able to obtain the ID from our code, it was
                lost when the scanner updated and scanned again. In order to fix
                this, we stored the data received in the state and added each
                element received that then became an array of IDs that we could
                send to our firebase database in real-time.
              </p>
            </Container>
          </div>

          <div className="dashboard">
            <Container>
              Now for the dashboard. We took the original array and set it as a
              total for all the students. We removed the number of students that
              were no longer active and then the logic for the absences was:
              Once a code was scanned, it would be added to the database by its
              ID, we would take this total of ID's and compare it to the total
              of students minus the inactive students, the result would be the
              absent students. This was our minimum viable product for Organa in
              a day and a half. We presented this version to 20+ tech companies
              in Guadalajara in an Open House event.
            </Container>
          </div>

          <div className="fifth">
            <Container>
              After this, we decided Organa had the potential to become a real
              tool for Laboratoria, so we set out to keep working and perfecting
              this product. In the next week, we planned a sprint and marked
              issues from the original code. We needed to be able to keep the
              app's state intact despite refreshing the page or changing tabs
              from the menu. We also set up a login screen to add security due
              to the personal information handled in this application. We also
              added an info icon in the scanner because we noticed that the
              users were having difficulties in the scan process. So we added a
              simple troubleshooting dialogue. We also had to change the ID's
              received for the corresponding student's name and a complete list
              of all the students so it would be easier for our client to work
              with this data.
            </Container>
          </div>

          <div className="end">
            <Container>
              Overall, we worked one and a half weeks on this project and the
              final product is currently being used in Laboratoria. It's also
              open source so everyone can contribute after their code has been
              reviewed. Organa is our legacy to future Laboratoria generations
              and hopefully, we can inspire more students to take the lead and
              develop solutions for their every-day problems.
            </Container>
          </div>
        </Styles>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Organa;
