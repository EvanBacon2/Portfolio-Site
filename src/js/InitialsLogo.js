import { Component } from 'react';

import {ReactComponent as InitialsIcon} from 'svg/initials.svg';

import 'css/InitialsLogo.css';

export default class InitialsLogo extends Component {
    render() {
        return ( 
            <div id='initials-logo'class={'initials-sizer initials-pos'}>
                <InitialsIcon class={'initials-shadow ' + this.props.theme}/>
            </div>
        );
    }
}