import { React, Component } from 'react';

import 'css/NavButton.css';

export default class NavButton extends Component {
    render() {
        return (
            <div class='nav-button' onClick={this.props.toggleNav}>
                <div class={'nav-line ' + this.props.navState}></div>
                <div class={'nav-line ' + this.props.navState}></div>
                <div class={'nav-line ' + this.props.navState}></div>
            </div>
        );
    }
}