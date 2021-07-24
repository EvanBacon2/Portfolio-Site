import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavButton from 'js/NavButton';
import BackButton from 'js/BackButton';
import NavPage from 'js/NavPage';
import Overlay from 'js/Overlay';
import CalendexShowcase from 'js/CalendexShowcase'
import LandingPage from 'js/LandingPage';
import About from 'js/About';
import Projects from 'js/Projects';
import Contact from 'js/Contact';
import { THEMES } from 'js/Themes';

import 'css/FixedElements.css';
import 'css/Structure.css';

import {ReactComponent as InitialsIcon} from 'svg/initials.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navState: 'closed',
      overlayTheme: THEMES.BRAND,
    }
  }

  toggleOverlay = (theme) => {
    this.setState({ overlayTheme: theme });

    const master = document.getElementById('master');
    const closedInitials = document.getElementById('closed-initials');

    if (this.state.navState === 'closed') {
      master.style.top = `-${window.scrollY}px`;
      setTimeout(() => {
        master.style.position = 'fixed';
        /*master.style.paddingRight = '6px';
        closedInitials.style.paddingRight = '6px';*/
      }, 200);

      this.setState({ navState: 'open' });
    } else {
      const scrollY = master.style.top;
      closedInitials.style.paddingRight = '6px';
      setTimeout(() => {
        master.style.position = '';
        master.style.top = '';
        /*master.style.paddingRight = '0px';
        closedInitials.style.paddingRight = '0px';*/
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }, 1400);

      this.setState({ navState: 'closed' });
    }
  }

  render() {
    document.body.style = 'background: #22282E'
    
    return (
      <Router>
          <div class="App">
            <div id='master'>
              <Overlay navState={this.state.navState} theme={this.state.overlayTheme}/>
              <NavButton navState={this.state.navState} toggleOverlay={this.toggleOverlay}/>
              <BackButton navState={this.state.navState} toggleOverlay={this.toggleOverlay} theme={this.state.overlayTheme}/>
              <NavPage navState={this.state.navState} theme={this.state.overlayTheme}/>
              <CalendexShowcase navState={this.state.navState} theme={this.state.overlayTheme}/>
              <div id='closed-initials'class={'initials-sizer initials-pos '  + this.state.navState}>
                <InitialsIcon class={'initials-shadow ' + this.state.overlayTheme}/>
              </div>
              <div id='open-initials'class={'initials-sizer initials-pos ' + this.state.navState}>
                <InitialsIcon class={'initials-shadow ' + this.state.overlayTheme}/>
              </div>
              <div class='skeleton content-grid-template'>
                <LandingPage scrollTop={window.pageYOffset}/>
                <About/>
                <Projects toggleOverlay={this.toggleOverlay}/>
                <Contact/>
              </div>
            </div>
          </div>
      </Router>)
  }
}

export default App;
