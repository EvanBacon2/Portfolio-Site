import { React, Component } from 'react';

import 'css/SiteHeader.css';

export default class SiteHeader extends Component {
    render() {
        return (
        <div id='site-header-container' class={this.props.layoutClass}>
            <h1 id='site-title'>Evan Bacon</h1>
            <hr id='header-underline'/>
            <ul id='skill-list'>
                <li class='skill-item'>&bull; ios development </li>
                <li class='skill-item'>&bull; web development </li>
                <li class='skill-item'>&bull; ui design</li>
            </ul>                
        </div>)
    }
}