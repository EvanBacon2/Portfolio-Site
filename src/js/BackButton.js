import { Component } from 'react';

import 'css/BackButton.css';

import {ReactComponent as BackArrow} from 'svg/back-arrow.svg';

export default class BackButton extends Component {
    render() {
        return (
            <div id='back-button-sizer' class={this.props.navState} 
                 onClick={() => this.props.toggleOverlay(this.props.theme)}>
                <BackArrow id='back-button' class={this.props.theme}/>
            </div>
        )
    }
}