import { React, Component } from 'react';

import ContentHeader from 'js/ContentHeader';
import HeadShot from 'js/HeadShot';
import { THEMES } from 'js/Themes';

import 'css/About.css';
import 'css/Structure.css';

export default class About extends Component {
    render() {
        return (
            <div id='about' class='content-grid-template'>
                <div id='about-content'>
                    <div class='description-container'>
                        <ContentHeader title='About Me' theme={THEMES.BRAND}/>
                        <p class='description'>                        
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
}