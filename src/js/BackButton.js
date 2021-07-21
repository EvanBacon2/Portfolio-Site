import { Component } from 'react';

import 'css/BackButton.css';

import {ReactComponent as BackArrow} from 'svg/back-arrow.svg';

export default class BackButton extends Component {
    render() {
        return (
            <div id='back-button-sizer'>
                <BackArrow id='back-button'/>
            </div>
        )
    }
}