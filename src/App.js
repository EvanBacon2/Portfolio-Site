import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MenuContext, Selections } from 'js/MenuContext';

import SiteHeader from 'js/SiteHeader';
import AboutPage from 'js/AboutPage';
import WebCard from 'js/WebCard'
import IosCard from 'js/IosCard'

class App extends Component {
  constructor(props) {
    super(props);

    this.setSelection = (newSelection) => {
      this.setState(state => ({
        selection: newSelection
      }));
    }

    this.state = {
      selection: Selections.ABOUT,
      setSelection: this.setSelection
    }
  }


  render() {
    document.body.style = 'background: #22282E'
    
    return (
      <Router>
        <MenuContext.Provider value={this.state}>
          <div className="App">
            <SiteHeader/>
            <WebCard title='Website'/>
            <IosCard title='Ios App'/>
          </div>
        </MenuContext.Provider>
      </Router>)
  }
}

export default App;
