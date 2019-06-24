import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NoMatch from "./components/NoMatch";
import Navigation from './components/Navigation';
import Organa from "./components/Organa";
import Queen from "./components/Queen";
import Pokedex from "./components/Pokedex";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/organa" component={Organa} />
          <Route path="/queen" component={Queen} />
          <Route path="/pokedex" component={Pokedex} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
