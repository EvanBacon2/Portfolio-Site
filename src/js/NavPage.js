import InitialsLogo from './InitialsLogo'
import NavPageIcon from 'js/NavPageIcon'

import 'css/NavPage.css'
import 'css/NavPageIcon.css'

import {ReactComponent as ChevronCutout} from 'svg/chevron-cutout.svg'

const NavPage = ({navState, navTo}) => {
    const navPageButton = (text) => {
        return (
            <div className='nav-menu-bttn-container nav-spacer' onClick={() => navTo(text)}>
                <div id={'nav-menu-bttn-' + text} className='nav-menu-bttn'/>
                <span className='nav-menu-bttn-text'>{text}</span>
            </div>
        )
    }

    const navPageLink = (text, link) => {
        return (
            <div className='nav-menu-bttn-container nav-spacer'>
                <div id={'nav-menu-bttn-' + text} className='nav-menu-bttn'/>
                <a className='nav-menu-bttn-text' href={link} target='_blank' rel="noreferrer">{text}</a>
            </div>
        )
    } 
    
    return (
        <div id='nav-page' className={navState}>
            <div id='nav-contents'>
                <div className={'nav-page-icon-background nav-back-button layout'} onClick={() => navTo('')}>
                    <ChevronCutout className='nav-page-icon cheevron'/>
                </div>
                <div className='nav-initials-logo layout'>
                    <InitialsLogo theme='brand'/>
                </div>
                <div id='nav-menu'>
                    <h1 id='nav-menu-header' className='nav-header'>Navigation</h1>
                    {navPageButton('About')}
                    {navPageButton('Projects')}
                    {navPageButton('Contact')}
                </div>
                <div id='nav-divider'/>
                <div id='nav-links'>
                    <h1 id='nav-links-header' className='nav-header'>Links</h1>
                    <div id='link-container' className='nav-spacer'>
                        <NavPageIcon type='github' href='https://github.com/EvanBacon2'/>
                        <NavPageIcon type='linkedin' href='https://www.linkedin.com/in/evan-bacon-5b5127172/'/>
                        <div id='nav-links-spacer' className='nav-spacer'/>
                    </div>
                    <div id='nav-links-spacer' className='nav-spacer'/>
                    {navPageLink('Resume', 'https://github.com/EvanBacon2')}
                </div>
            </div>
        </div>
    )
}

export default NavPage