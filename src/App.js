import * as React from 'react';
import { Component } from 'react';

import NavButton from 'js/NavButton';
import InitialsLogo from 'js/InitialsLogo';
import NavPage from 'js/NavPage';
import Overlay from 'js/Overlay';
import LandingPage from 'js/LandingPage';
import About from 'js/About';
import Projects from 'js/Projects';
import Contact from 'js/Contact';
import Footer from 'js/Footer';

import 'css/Structure.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navState: 'closed',
    }

    this.homeRef = React.createRef()
    this.aboutRef = React.createRef()
    this.projectsRef = React.createRef()
    this.contactRef = React.createRef()
  }

  openOverlay = () => {
    const master = document.getElementById('master')

    master.style.top = `-${window.scrollY}px`
    setTimeout(() => {
      master.style.position = 'fixed'
    }, 200);
    this.setState({ navState: 'open' })
  }

  closeOverlay = (section) => {
    const master = document.getElementById('master');

    const scrollY = master.style.top;
    master.style.position = '';
    master.style.top = '';

    switch(section) {
      case 'About': this.aboutRef.current.scrollIntoView(); break
      case 'Projects': this.projectsRef.current.scrollIntoView(); break
      case 'Contact': this.contactRef.current.scrollIntoView(); break
      default: window.scrollTo(0, parseInt(scrollY || '0') * -1); break
    }

    this.setState({ navState: 'closed' })
  }

  render() {
    document.body.style = 'background: #22282E'
    
    return (
      <div class="App">
        <div id='master' ref={this.homeRef}>
          <div id='fixed-elements'>
            <NavButton navState={this.state.navState} onClick={this.openOverlay}/>
            <div id='main-initials-logo' class='main-initials-logo layout'>
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
            <Footer homeRef={this.homeRef} aboutRef={this.aboutRef} projectsRef={this.projectsRef} contactRef={this.contactRef}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
