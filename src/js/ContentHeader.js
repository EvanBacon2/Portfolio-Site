import { React, Component } from 'react';

import 'css/ContentHeader.css';
import 'css/ColorClasses.css';

export default class ContentHeader extends Component {
    render() {
        return (
            <div id='header-container'>
                <div class='extra-padding'>
                    <span id='content-title' class={this.props.theme + '-shadow-2x2'}>{this.props.title}</span>
                </div>
                <hr id='content-underline' class={this.props.theme + '-color'}/>
            </div>
        );
    }
}