import { React, Component } from 'react';

import 'css/SiteHeader.css';

export default class SiteHeader extends Component {
    render() {
        return (
        <div class='center-div site-header'>
            <div id='header-container'>
                <h1 id='site-title'>Evan Bacon</h1>
                <hr id='header-underline'/>
                <ul id='skill-list'>
                    <li class='skill-item'>&bull; ios development </li>
                    <li class='skill-item'>&bull; web development </li>
                    <li class='skill-item'>&bull; ui design</li>
                </ul>                
            </div>
        </div>)
    }
}