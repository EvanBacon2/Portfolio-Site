import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavButton from 'js/NavButton';
import InitialsLogo from 'js/InitialsLogo';
import NavPage from 'js/NavPage';
import Overlay from 'js/Overlay';
import LandingPage from 'js/LandingPage';
import About from 'js/About';
import Projects from 'js/Projects';
import Contact from 'js/Contact';
import Footer from 'js/Footer';
import { THEMES } from 'js/Themes';

import 'css/Structure.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navState: 'closed',
    }

    this.aboutRef = React.createRef();
    this.projectsRef = React.createRef();
    this.contactRef = React.createRef();
  }

  openOverlay = () => {
    const master = document.getElementById('master');

    master.style.top = `-${window.scrollY}px`;
    setTimeout(() => {
      master.style.position = 'fixed';
    }, 200);
    this.setState({ navState: 'open' });
  }

  closeOverlay = (section) => {
    const master = document.getElementById('master');

    const scrollY = master.style.top;
    master.style.position = '';
    master.style.top = '';

    if (section === '') {
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    } else if (section === 'About') {
      this.aboutRef.current.scrollIntoView();
    } else if (section === 'Projects') {
      this.projectsRef.current.scrollIntoView();
    } else if (section === 'Contact') {
      this.contactRef.current.scrollIntoView();
    }

    this.setState({ navState: 'closed' });
  }

  render() {
    document.body.style = 'background: #22282E'
    
    return (
      <Router>
          <div class="App">
            <div id='master'>
              <div id='fixed-elements'>
                <NavButton navState={this.state.navState} onClick={this.openOverlay}/>
                <div class='main-initials-logo layout'>
                  <InitialsLogo theme='brand'/>
                </div>
              </div>
              <Overlay navState={this.state.navState}/>
              <NavPage navState={this.state.navState} onClick={this.closeOverlay}/>
              <div class='skeleton content-grid-template'>
                <LandingPage scrollTop={window.pageYOffset}/>
                <About refProp={this.aboutRef}/>
                <Projects refProp={this.projectsRef}/>
                <Contact refProp={this.contactRef}/>
                <Footer/>
              </div>
            </div>
          </div>
      </Router>)
  }
}

export default App;
