import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavButton from 'js/NavButton';
import SiteHeader from 'js/SiteHeader';
import About from 'js/About';
import Projects from 'js/Projects';
import Contact from 'js/Contact';

import 'css/FixedElements.css';
import 'css/Structure.css';

import {ReactComponent as InitialsIcon} from 'svg/initials.svg';

class App extends Component {
  render() {
    document.body.style = 'background: #22282E'
    
    return (
      <Router>
          <div className="App">
            <NavButton></NavButton>
            <div class='InitialsSizer InitialsPos'>
              <InitialsIcon></InitialsIcon>
            </div>
            <div class='Skeleton'>
                <SiteHeader class='SiteHeader'></SiteHeader>
                <div class='ContentSections'>
                    <About></About>
                    <Projects></Projects>
                    <Contact></Contact>
                </div>
            </div>
          </div>
      </Router>)
  }
}

export default App;
