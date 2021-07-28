import { Component } from 'react';

import InitialsLogo from './InitialsLogo';
import NavPageIcon from 'js/NavPageIcon';

import 'css/NavPage.css';

import {ReactComponent as Chevron} from 'svg/chevron.svg';

export default class NavPage extends Component {
    navPageButton = (text) => {
        return (
            <div class='nav-menu-bttn-container' onClick={() => this.props.onClick(text)}>
                <div id={'nav-menu-bttn-' + text} class='nav-menu-bttn'/>
                <div class='nav-menu-bttn-text'>{text}</div>
            </div>);
    }

    navPageLink = (text, link) => {
        return (
            <div class='nav-menu-bttn-container'>
                <div id={'nav-menu-bttn-' + text} class='nav-menu-bttn'/>
                <a class='nav-menu-bttn-text' href={link} target='_blank'>{text}</a>
            </div>);
    } 

    render() {
        return (
            <div id='nav-page'>
                <div id='nav-contents' class={this.props.navState}>
                    {/*<Chevron class='nav-back-button layout' onClick={() => this.props.onClick('')}/>*/}
                    <div class='nav-back-button layout' onClick={() => this.props.onClick('')}>
                        <NavPageIcon type='chevron'/>
                    </div>
                    <InitialsLogo theme='brand'/>
                    <div id='nav-menu'>
                        <h1 id='nav-menu-header' class='nav-header'>Navigation</h1>
                        {this.navPageButton('About')}
                        {this.navPageButton('Projects')}
                        {this.navPageButton('Contact')}
                    </div>
                    <div id='nav-divider'/>
                    <div id='nav-links'>
                        <h1 id='nav-links-header' class='nav-header'>Links</h1>
                        <div id='link-container'>
                           <NavPageIcon type='github'/>
                           <NavPageIcon type='linkedin'/>
                           <NavPageIcon type='figma'/>
                        </div>
                        <div id='nav-links-spacer'/>
                        {this.navPageLink('Resume', 'https://github.com/EvanBacon2')}
                    </div>
                </div>
            </div>
        )
    }
}