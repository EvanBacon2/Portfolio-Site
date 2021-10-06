import 'stylesheets/NavPageIcon.css'

import { ReactComponent as GithubCutout } from 'svg/github-cutout.svg'
import { ReactComponent as LinkedinCutout } from 'svg/linkedin-cutout.svg'
import { ReactComponent as FigmaCutout } from 'svg/figma-cutout.svg'
import { ReactComponent as WebsiteCutout } from 'svg/website-cutout.svg'
import { ReactComponent as AppStoreCutout } from 'svg/app-store-cutout.svg'
import { ReactComponent as ChevronCutout } from 'svg/chevron-cutout.svg'

const NavPageIcon = ({ layoutClass, type, href, onClick }) => {
    const cutout = (type) => {
        switch (type) {
            case 'github': return <GithubCutout className='nav-page-icon github'/>
            case 'linkedin': return <LinkedinCutout className='nav-page-icon linkedin'/>
            case 'figma': return <FigmaCutout className='nav-page-icon figma'/>
            case 'website': return <WebsiteCutout className='nav-page-icon website'/>
            case 'app-store': return <AppStoreCutout className='nav-page-icon app-store'/>
            case 'chevron': return <ChevronCutout className='nav-page-icon cheevron'/>
            default: return <div/>
        }
    }
    
    return (
        <a className={'nav-page-icon-background ' + layoutClass} title={type} href={href} target='_blank' rel="noreferrer" onClick={onClick}>
            {cutout(type)}
        </a>
    )
}

export default NavPageIcon

