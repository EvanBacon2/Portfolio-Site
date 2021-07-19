import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavButton from 'js/NavButton';
import NavPage from 'js/NavPage';
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
    if (this.state.navState === 'closed') {
      this.setState({ navState: 'open' });
    } else {
      this.setState({ navState: 'closed' });
    }
  }

  render() {
    document.body.style = 'background: #22282E'
    
    return (
      <Router>
          <div class="App">
            <body id='master' class={this.state.navState}>
              <NavButton navState={this.state.navState} toggleNav={this.toggleNav}/>
              <NavPage navState={this.state.navState}/>
              <div id='closed-initials'class='initials-sizer initials-pos'>
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
