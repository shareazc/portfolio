import React from 'react';
import Jumbotron from './Jumbotron';
import Projects from './Projects';
import Footer from './Footer';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron />
        <Projects />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
