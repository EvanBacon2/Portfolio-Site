import { React, Component } from 'react';

import 'css/NavButton.css';

export default class NavButton extends Component {
    render() {
        return (
            <div class='NavButton'>
                <div class='NavLine'></div>
                <div class='NavLine'></div>
                <div class='NavLine'></div>
            </div>
        );
    }
}