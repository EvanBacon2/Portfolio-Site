import { useEffect } from 'react';

import {ReactComponent as Chevron} from 'svg/chevron.svg';

import 'css/ScrollPrompt.css';

export default function ScrollPrompt(props) {
    useEffect(() => {
        setTimeout(() => document.getElementById('scroll-prompt-container').classList.add('show-init'), 200)
    });
    
    return (
        <div id='scroll-prompt-container' class={props.layoutClass}>
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