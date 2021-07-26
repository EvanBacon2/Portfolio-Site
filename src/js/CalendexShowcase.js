import { React, Component } from 'react';

import BackButton from './BackButton';
import ContentHeader from 'js/ContentHeader';
import IosShowcase from 'js/IosShowcase'
import Links from 'js/Links';
import { THEMES } from 'js/Themes';

import 'css/CalendexShowcase.css'

export default class CalendexShowcase extends Component {
    render() {
        return (
            <div id='calendex-showcase' class={'showcase-container ' + this.props.showcase}>
                <BackButton layoutClass='showcase-back-button-layout' showcase={this.props.showcase} theme='calendex' 
                            onClick={this.props.toggleShowcase}/>
                <div class='content-layout'>
                    <ContentHeader title='Calendex' subTitle='ios app' theme={THEMES.CALENDEX}/>
                    <p class='content-description'>                        
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum
                    </p>
                </div>
                <div class='showcase-layout'>
                    <IosShowcase/>
                </div>
                <div class='links-layout'>
                    <Links theme={THEMES.CALENDEX}/>
                </div>
            </div>
        );
    }
}