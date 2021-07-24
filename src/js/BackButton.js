import { Component } from 'react';

import 'css/BackButton.css';

import {ReactComponent as BackArrow} from 'svg/chevron.svg';

export default class BackButton extends Component {
    render() {
        return (
            <div id='back-button-box' class={this.props.navState} 
                 onClick={() => this.props.toggleOverlay(this.props.theme)}>
                <div>
                    <BackArrow id='back-button' class={this.props.theme}/>
                </div>
            </div>
        )
    }
}