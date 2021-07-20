import { Component } from 'react';

import 'css/NavPage.css';

import {ReactComponent as GithubIcon} from 'svg/github.svg';
import {ReactComponent as LinkedInIcon} from 'svg/linkedin.svg';

export default class NavPage extends Component {
    render() {
        return (
            <div class='nav-page'>
                {/*<div class={'nav-overlay left ' + this.props.navState}/>
                <div class={'nav-overlay right ' + this.props.navState}/>*/}
                <div id='nav-contents' class={this.props.navState}>
                    <div id='nav-menu'>
                        <h1 id='nav-menu-header' class='nav-header'>Navigation</h1>
                        <button id='nav-bttn-about' class='nav-bttn'>About</button>
                        <button id='nav-bttn-projects' class='nav-bttn'>Projects</button>
                        <button id='nav-bttn-contact' class='nav-bttn'>Contact</button>
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