import { React, Component } from 'react';

import ContentHeader from 'js/ContentHeader';
import { THEMES } from 'js/Themes';

import '../css/Content.css';

export default class AboutPage extends Component {
    render() {
        return (
            <div>
                <div class='ContentContainer'>
                    <ContentHeader title='About Me' subTitle='' theme={THEMES.BRAND}/>
                    <p class='ContentDescription'>                        
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum
                    </p>
                </div>
            </div>
        );
    }
}