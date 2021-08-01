import { React, Component } from 'react';

import ContentHeader from './ContentHeader.js';
import LargeLink from './LargeLink.js';

import '../css/Links.css';
import '../css/ColorClasses.css'

export default class Links extends Component {
    render() {
        return (
            <div class='links-container'>
                <ContentHeader title='Links' theme={this.props.theme} fadeAlignment='right'/>
                {this.props.children}
            </div>
        );
    }
}