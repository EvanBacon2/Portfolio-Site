import { React, useState, useEffect } from 'react';

import ContentHeader from 'js/ContentHeader';
import HeadShot from 'js/HeadShot';
/*import { useWindowDimensions } from 'js/WindowDimensions';*/
import { THEMES } from 'js/Themes';

import 'css/About.css';
import 'css/Structure.css';

export default function About(props) {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, []);

    const hiddenElements = document.getElementsByClassName('hide')
    Array.prototype.map.call(hiddenElements, (element) => {
        const bottomOfObject = element.getBoundingClientRect()['bottom'];
        const bottomOfWindow = offset; /*- window.innerHeight;*/
        if (bottomOfObject < bottomOfWindow) {
            element.classList.remove('hide');
            element.classList.add('show');
        }     
    }); 

    var hidePrompt = 'show-prompt';
    if (offset !== 0) {            
        hidePrompt = 'hide-prompt';
    }
    
    return (
        <div id='about' class='content-grid-template hide' ref={props.refProp}>
            <div id='about-content'>
                <div class='about-description-container'>
                    <ContentHeader title='About Me' theme={THEMES.BRAND} fadeAlignment='right'/>
                    <p class='about-description'>                        
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et                             
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum
                    </p>
                </div>
                <HeadShot></HeadShot>
            </div>
        </div>
    );   
}