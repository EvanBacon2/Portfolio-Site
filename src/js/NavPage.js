import { Component } from 'react';

import InitialsLogo from './InitialsLogo';
import NavPageIcon from 'js/NavPageIcon';

import 'css/NavPage.css';

export default class NavPage extends Component {
    navPageButton = (text) => {
        return (
            <div class='nav-menu-bttn-container nav-spacer' onClick={() => this.props.onClick(text)}>
                <div id={'nav-menu-bttn-' + text} class='nav-menu-bttn'/>
                <div class='nav-menu-bttn-text'>{text}</div>
            </div>);
    }

    navPageLink = (text, link) => {
        return (
            <div class='nav-menu-bttn-container nav-spacer'>
                <div id={'nav-menu-bttn-' + text} class='nav-menu-bttn'/>
                <a class='nav-menu-bttn-text' href={link} target='_blank'>{text}</a>
            </div>);
    } 

    render() {
        return (
            <div id='nav-page' class={this.props.navState}>
                <div id='nav-contents'>
                    <div class='nav-back-button layout' onClick={() => this.props.onClick('')}>
                        <NavPageIcon type='chevron'/>
                    </div>
                    <div class='nav-initials-logo layout'>
                        <InitialsLogo theme='brand'/>
                    </div>
                    <div id='nav-menu'>
                        <h1 id='nav-menu-header' class='nav-header'>Navigation</h1>
                        {this.navPageButton('About')}
                        {this.navPageButton('Projects')}
                        {this.navPageButton('Contact')}
                    </div>
                    <div id='nav-divider'/>
                    <div id='nav-links'>
                        <h1 id='nav-links-header' class='nav-header'>Links</h1>
                        <div id='link-container' class='nav-spacer'>
                           <NavPageIcon type='github'/>
                           <NavPageIcon type='linkedin'/>
                           <NavPageIcon type='figma'/>
                        </div>
                        <div id='nav-links-spacer' class='nav-spacer'/>
                        {this.navPageLink('Resume', 'https://github.com/EvanBacon2')}
                    </div>
                </div>
            </div>
        )
    }
}