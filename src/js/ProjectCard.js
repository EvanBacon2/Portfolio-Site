import ProjectCardImage from 'js/ProjectCardImage'

import 'stylesheets/ProjectCard.css'

import { ReactComponent as WebIcon } from 'svg/web.svg'
import { ReactComponent as AppleIcon } from 'svg/apple.svg'
import { ReactComponent as UXIcon } from 'svg/ux.svg'

const ProjectCard = ({title, theme, type, cardPhoto, description, showcaseCallback, children}) => {
    const platformIcon = (type) => {
        switch (type) {
            case 'web': return <WebIcon className={'card-icon platform-icon-sizer'}/>
            case 'ios': return <AppleIcon className={'card-icon platform-icon-sizer apple'}/>
            case 'ux': return <UXIcon className={'card-icon platform-icon-sizer ux'}/>
            default: <div/>
        }
    }
    
    return (
        <div className='card-container'>
            <div className='header-box'>
                <h1 className={'card-header ' + theme}>{title}</h1>
                {platformIcon(type)}
            </div>  
            <ProjectCardImage theme={theme} showcaseCallback={showcaseCallback} cardPhoto={cardPhoto}>
                {description}
            </ProjectCardImage>
            <div className='link-box'>
                {children}
            </div>
        </div>
    )
}

export default ProjectCard