import { Component } from 'react';

import 'css/Overlay.css';

export default class Overlay extends Component {
    render() {
        return (
            <div id='overlay-container'>
                <div class={'overlay left ' + this.props.theme + '-overlay ' + this.props.navState}/>
                <div class={'overlay right ' + this.props.theme + '-overlay ' + this.props.navState}/>
            </div>
        );
    }
}