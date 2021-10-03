import { useState } from 'react'

import SvgButton from './SvgButton.js'
import FigmaButton from 'js/FigmaButton'

import '../css/LargeLink.css'

import {ReactComponent as GithubIcon} from '../svg/github.svg'
import {ReactComponent as WebsiteIcon} from '../svg/website.svg'
import {ReactComponent as AppStoreIcon} from '../svg/appstore.svg'
import {ReactComponent as LinkedinIcon} from '../svg/linkedin.svg'
import {ReactComponent as MailIcon} from '../svg/mail.svg'

const LargeLink = ({state, destination, url}) => {
    const [active, setActive] = useState('')

    const icon = (dest) => {
        switch (dest) {
            case 'github': return <SvgButton theme='github' active={active}><GithubIcon className='large-link-box github'/></SvgButton>
            case 'website': return <SvgButton theme='website' active={active}><WebsiteIcon className='large-link-box website'/></SvgButton>
            case 'appstore': return <SvgButton theme='appstore' active={active}><AppStoreIcon className='large-link-box appstore'/></SvgButton>
            case 'linkedin': return <SvgButton theme='linkedin' active={active}><LinkedinIcon className='large-link-box linkedin'/></SvgButton>
            case 'mail': return <SvgButton theme='mail' active={active}><MailIcon className='large-link-box mail'/></SvgButton>
            case 'figma': return <FigmaButton boxClass='large-link-box figma' active={active}/>
            default: return <div/>
        }
    }

    const text = (dest) => {
        switch (dest) {
            case 'figma': return <div>
                <span className='link-text figma1'>F</span>
                <span className='link-text figma-text figma2'>i</span>
                <span className='link-text figma-text figma3'>g</span>
                <span className='link-text figma-text figma4'>m</span>
                <span className='link-text figma-text figma5'>a</span>
            </div>
            case 'appstore': return <span className={'link-text ' + dest}>App Store</span>
            case 'mail': return <span className={'link-text ' + dest}>Send Message</span>
            default: return <span className={'link-text ' + dest}>{capitalized(dest)}</span>
        }
    }

    const capitalized = (string) => {
        return string[0].toUpperCase() + string.slice(1)
    }

    const toggleActive = () => { setActive(active === '' ? 'active' : '') }

    return (
        <a className={'link ' + state} href={url} title={destination} target='_blank' rel="noreferrer"
            onMouseEnter={toggleActive} onMouseLeave={toggleActive}>
            {icon(destination)}
            {text(destination)}
        </a>
    );
}

export default LargeLink