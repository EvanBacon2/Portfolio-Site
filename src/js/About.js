import ContentHeader from 'js/ContentHeader';
import HeadShot from 'js/HeadShot';
import { THEMES } from 'js/Themes';

import 'css/About.css';
import 'css/Structure.css';

export default function About(props) {
    return (
        <div id='about' class='content-grid-template' ref={props.refProp}>
            <div id='about-content' class='hide'>
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