import InitialsLogo from './InitialsLogo'
import NavPageIcon from 'js/NavPageIcon'

import 'css/NavPage.css'
import 'css/NavPageIcon.css'

import {ReactComponent as ChevronCutout} from 'svg/chevron-cutout.svg'

const NavPage = ({navState, onClick}) => {
    const navPageButton = (text) => {
        return (
            <div class='nav-menu-bttn-container nav-spacer' onClick={() => onClick(text)}>
                <div id={'nav-menu-bttn-' + text} class='nav-menu-bttn'/>
                <div class='nav-menu-bttn-text'>{text}</div>
            </div>)
    }

    const navPageLink = (text, link) => {
        return (
            <div class='nav-menu-bttn-container nav-spacer'>
                <div id={'nav-menu-bttn-' + text} class='nav-menu-bttn'/>
                <a class='nav-menu-bttn-text' href={link} target='_blank' rel="noreferrer">{text}</a>
            </div>)
    } 
    
    return (
        <div id='nav-page' class={navState}>
            <div id='nav-contents'>
                <div class={'nav-page-icon-background nav-back-button layout'} onClick={() => onClick('')}>
                    <ChevronCutout class='nav-page-icon cheevron'/>
                </div>
                <div class='nav-initials-logo layout'>
                    <InitialsLogo theme='brand'/>
                </div>
                <div id='nav-menu'>
                    <h1 id='nav-menu-header' class='nav-header'>Navigation</h1>
                    {navPageButton('About')}
                    {navPageButton('Projects')}
                    {navPageButton('Contact')}
                </div>
                <div id='nav-divider'/>
                <div id='nav-links'>
                    <h1 id='nav-links-header' class='nav-header'>Links</h1>
                    <div id='link-container' class='nav-spacer'>
                        <NavPageIcon type='github' href='https://github.com/EvanBacon2'/>
                        <NavPageIcon type='linkedin' href='https://www.linkedin.com/in/evan-bacon-5b5127172/'/>
                        <div id='nav-links-spacer' class='nav-spacer'/>
                    </div>
                    <div id='nav-links-spacer' class='nav-spacer'/>
                    {navPageLink('Resume', 'https://github.com/EvanBacon2')}
                </div>
            </div>
        </div>
    )
}

export default NavPage