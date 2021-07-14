import { React, Component } from 'react';

import 'css/SiteHeader.css';

export default class SiteHeader extends Component {
    render() {
        return (
        <div class='CenterDiv'>
            <div class='HeaderContainer'>
                <h1 class='SiteTitle'>Evan Bacon</h1>
                <hr/>
                <div class='ListContainer'>
                    <ul>
                        <li>&bull;   ios development   </li>
                        <li>&bull;   web development   </li>
                        <li>&bull;   ui design</li>
                    </ul>
                </div>
            </div>
        </div>)
    }
}