import React from 'react';
import Jumbotron from './Jumbotron';
import Footer from './Footer';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
