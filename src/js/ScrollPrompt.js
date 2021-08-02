import { Component } from 'react';

import {ReactComponent as Chevron} from 'svg/chevron.svg';

import 'css/ScrollPrompt.css';

export default class ScrollPrompt extends Component {
    render() {
        return (
            <div id='scroll-prompt-container' class={this.props.layoutClass}>
                <h1 id='scroll-prompt-text'>Scroll Down</h1>
                <div id='scroll-chevron-container'>
                    <div id='scroll-chevron' class ='scroll-chevron-box scroll-chevron-layout'>
                        <Chevron class='chevron-fill'/>
                    </div>
                    <div id='scroll-chevron-shadow' class ='scroll-chevron-box'>
                        <Chevron class='chevron-shadow-fill'/>
                    </div>
                </div>
            </div>
        );
    }
}