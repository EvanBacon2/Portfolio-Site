import { Component } from 'react';

import InitialsLogo from './InitialsLogo';

import 'css/NavPage.css';

import {ReactComponent as GithubIcon} from 'svg/github.svg';
import {ReactComponent as LinkedInIcon} from 'svg/linkedin.svg';
import {ReactComponent as Chevron} from 'svg/chevron.svg';

export default class NavPage extends Component {

    activateBttn = (bttnId) => {
        document.getElementById('nav-menu-bttn-' + bttnId).classList.add('active');
    }

    deactivateBttn = (bttnId) => {
        document.getElementById('nav-menu-bttn-' + bttnId).classList.remove('active');
    }

    render() {
        return (
            <div id='nav-page'>
                <div id='nav-contents' class={this.props.navState}>
                    <Chevron class='nav-back-button layout' onClick={() => this.props.onClick()}/>

                    <InitialsLogo theme='brand'/>
                    <div id='nav-menu'>
                        <h1 id='nav-menu-header' class='nav-header'>Navigation</h1>
                        <div class='nav-menu-bttn-container' onMouseEnter={() => this.activateBttn('about')} 
                             onMouseLeave={() => this.deactivateBttn('about')}>
                            <div id='nav-menu-bttn-about' class='nav-menu-bttn'/>
                            <div class='nav-menu-bttn-text'>About</div>
                        </div>
                        <div class='nav-menu-bttn-container' onMouseEnter={() => this.activateBttn('projects')} 
                             onMouseLeave={() => this.deactivateBttn('projects')}>
                            <div id='nav-menu-bttn-projects' class='nav-menu-bttn'/>
                            <div class='nav-menu-bttn-text'>Projects</div>
                        </div>
                        <div class='nav-menu-bttn-container' onMouseEnter={() => this.activateBttn('contact')} 
                             onMouseLeave={() => this.deactivateBttn('contact')}>
                            <div id='nav-menu-bttn-contact' class='nav-menu-bttn'/>
                            <div class='nav-menu-bttn-text'>Contact</div>
                        </div>
                    </div>
                    <div id='nav-divider'/>
                    <div id='nav-links'>
                        <h1 id='nav-links-header' class='nav-header'>Links</h1>
                        <div id='link-container'>
                            <div id='github-box'>
                                <GithubIcon/>
                            </div>
                            <div id='linkedin-box'>
                                <LinkedInIcon/>
                            </div>
                            <div id='nav-links-spacer'/>
                        </div>
                        <div id='nav-links-spacer'/>
                        <a id='nav-link-resume' class='nav-bttn'>Resume</a>
                    </div>
                </div>
            </div>
        )
    }
}