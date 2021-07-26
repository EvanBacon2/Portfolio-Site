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
import { THEMES } from 'js/Themes';

import 'css/Structure.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navState: 'closed',
    }
  }

  toggleOverlay = () => {
    const master = document.getElementById('master');
    const closedInitials = document.getElementById('closed-initials');

    if (this.state.navState === 'closed') {
      master.style.top = `-${window.scrollY}px`;
      setTimeout(() => {
        master.style.position = 'fixed';
      }, 200);

      this.setState({ navState: 'open' });
    } else {
      const scrollY = master.style.top;
      setTimeout(() => {
        master.style.position = '';
        master.style.top = '';
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
              <div id='fixed-elements'>
                <NavButton navState={this.state.navState} toggleOverlay={this.toggleOverlay}/>
                <InitialsLogo theme='brand'/>
              </div>
              <Overlay navState={this.state.navState}/>
              <NavPage navState={this.state.navState} onClick={this.toggleOverlay}/>
              <div class='skeleton content-grid-template'>
                <LandingPage scrollTop={window.pageYOffset}/>
                <About/>
                <Projects/>
                {/*<Contact/>*/}
              </div>
            </div>
          </div>
      </Router>)
  }
}

export default App;
