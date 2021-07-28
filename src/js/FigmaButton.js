import * as React from 'react';
import { Component } from 'react';

import 'css/SvgButton.css'

import {ReactComponent as FigmaIcon} from '../svg/figma.svg';
import {ReactComponent as FigmaColorIcon} from '../svg/figma-color.svg';

export default class FigmaButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickAnimation: ''
        }
    }

    onClick = () => {
        this.setState(() => { return { clickAnimation: ''} })
        this.setState(() => { return { clickAnimation: 'click-animation'} })
        setTimeout(() => this.setState(() => { return { clickAnimation: ''} }), 400);
    }

    render() {
        return (
            <div class={'svg-button-box ' + this.props.layoutClass} onClick={this.onClick}>
                <FigmaColorIcon class={'svg-button-shadow ' + this.props.boxClass}/>
                <div class={'svg-button-mover ' + this.state.clickAnimation}>
                    <FigmaIcon class={'svg-button ' + this.props.boxClass}/>
                </div>
            </div>
        );
    }
}