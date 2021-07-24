import { React, Component } from 'react';

import { THEMES } from './Themes';

import 'css/NavButton.css';

export default class NavButton extends Component {
    render() {
        return (
            <div class='nav-button' onClick={() => this.props.toggleOverlay(THEMES.BRAND)}>
                <div class={'nav-line ' + this.props.navState}></div>
                <div class={'nav-line ' + this.props.navState}></div>
                <div class={'nav-line ' + this.props.navState}></div>
            </div>
        );
    }
}