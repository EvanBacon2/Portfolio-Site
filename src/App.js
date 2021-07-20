import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavButton from 'js/NavButton';
import NavPage from 'js/NavPage';
import Overlay from 'js/Overlay';
import CalendexShowcase from 'js/CalendexShowcase'
import SiteHeader from 'js/SiteHeader';
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

  toggleNav = () => {
    const master = document.getElementById('master');
    const closedInitials = document.getElementById('closed-initials');

    if (this.state.navState === 'closed') {
      master.style.top = `-${window.scrollY}px`;
      setTimeout(() => {
        master.style.position = 'fixed';
        master.style.paddingRight = '8px';
        closedInitials.style.paddingRight = '8px';
      }, 200);

      this.setState({ navState: 'open' });
    } else {
      const scrollY = master.style.top;
      closedInitials.style.paddingRight = '8px';
      setTimeout(() => {
        master.style.position = '';
        master.style.top = '';
        master.style.paddingRight = '0px';
        closedInitials.style.paddingRight = '0px';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }, 800);

      this.setState({ navState: 'closed' });
    }
  }

  setOverlayTheme(theme) {
    this.setState({ overlayTheme: theme })
  }

  render() {
    document.body.style = 'background: #22282E'
    
    return (
      <Router>
          <div class="App">
            <body id='master'>
              <NavButton navState={this.state.navState} toggleNav={this.toggleNav}/>
              <NavPage navState={this.state.navState}/>
              <Overlay navState={this.state.navState} theme={this.state.theme}/>
              {/*<CalendexShowcase navState={this.state.navState}/>*/}
              <div id='closed-initials'class={'initials-sizer initials-pos '  + this.state.navState}>
                <InitialsIcon/>
              </div>
              <div id='open-initials'class={'initials-sizer initials-pos ' + this.state.navState}>
                <InitialsIcon/>
              </div>
              <div class='skeleton'>
                <SiteHeader class='site-header'/>
                <div class='content-sections'>
                    <About/>
                    <Projects/>
                    <Contact/>
                </div>
              </div>
            </body>
          </div>
      </Router>)
  }
}

export default App;
