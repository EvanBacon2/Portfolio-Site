import { useState, useEffect } from 'react';

import ContentHeader from 'js/ContentHeader';
import HeadShot from 'js/HeadShot';
import { THEMES } from 'js/Themes';

import 'css/About.css';
import 'css/Structure.css';

export default function About(props) {
    const [state, setState] = useState('no-show');

    useEffect(() => {
        const checkScrollTrigger = () => {
            if (document.getElementById('about-scroll-trigger').classList.contains('show')) {
                setState('show-init');
            }
        }

        window.addEventListener("scroll", checkScrollTrigger, { passive: true });
    });

    return (
        <div id='about' class='content-grid-template' ref={props.refProp}>
            <div id='about-content' class={state}>
                <div class='about-header'>
                    <ContentHeader state={'section-header'} title='About Me' theme={THEMES.BRAND} fadeAlignment='right'/>
                </div>
                <div id='about-scroll-trigger' class='hide'/>
                <p class='about-description'>                        
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et                             
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum
                </p>
                <div class='about-headshot'>
                    <HeadShot/>
                </div>
            </div>
            
        </div>
    );   
}