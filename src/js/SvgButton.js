import * as React from 'react';
import { Component } from 'react';

import 'css/SvgButton.css'

export default class SvgButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickAnimation: ''
        }
    }

    injectStyle = (newClass) => {
        return React.Children.map(this.props.children, child => 
            React.cloneElement(child, { class: child.props.class + ' ' + newClass}));
    }

    onClick = () => {
        this.setState(() => { return { clickAnimation: ''} })
        this.setState(() => { return { clickAnimation: 'click-animation'} })
        setTimeout(() => this.setState(() => { return { clickAnimation: ''} }), 400);
    }

    render() {
        return (
            <div class={'svg-button-box ' + this.props.layoutClass} onClick={this.onClick}>
                {this.injectStyle('svg-button-shadow ' + this.props.theme)}
                <div class={'svg-button-mover ' + this.state.clickAnimation}>
                    {this.injectStyle('svg-button ' + this.props.baseColor)}
                </div>
            </div>
        );
    }
}