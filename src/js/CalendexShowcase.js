import { React, Component } from 'react';

import ContentHeader from 'js/ContentHeader';
import IosShowcase from 'js/IosShowcase'
import Links from 'js/Links';
import { THEMES } from 'js/Themes';

import 'css/ContentHeader.css';
import 'css/CalendexShowcase.css'

export default class CalendexShowcase extends Component {
    render() {
        return (
            <div id='calendex-showcase' class={'showcase-container ' + this.props.navState}>
                <div class='content-container'>
                    <ContentHeader title='Calendex' subTitle='ios app' theme={THEMES.CALENDEX}/>
                    <p class='content-description'>                        
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum
                    </p>
                </div>
                <IosShowcase/>
                <Links theme={THEMES.CALENDEX}/>
            </div>
        );
    }
}