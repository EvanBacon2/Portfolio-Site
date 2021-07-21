import { React, Component } from 'react';

import 'css/NavButton.css';
import { THEMES } from './Themes';

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