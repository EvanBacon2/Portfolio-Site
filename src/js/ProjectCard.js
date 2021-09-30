import ProjectCardImage from 'js/ProjectCardImage';

import 'css/ProjectCard.css';

import {ReactComponent as WebIcon} from 'svg/web.svg';
import {ReactComponent as AppleIcon} from 'svg/apple.svg';
import {ReactComponent as UXIcon} from 'svg/ux.svg';

const ProjectCard = ({title, theme, type, cardPhoto, description, showcaseCallback, children}) => {
    const platformIcon = (type) => {
        switch (type) {
            case 'web': return <WebIcon class={'card-icon platform-icon-sizer'}/>
            case 'ios': return <AppleIcon class={'card-icon platform-icon-sizer apple'}/>
            case 'ux': return <UXIcon class={'card-icon platform-icon-sizer ux'}/>
        }
    }
    
    return (
        <div class='card-container'>
            <div class='header-box'>
                <h1 class={'card-header ' + theme + '-shadow'}>{title}</h1>
                {platformIcon(type)}
            </div>  
                
            <ProjectCardImage theme={theme} showcaseCallback={showcaseCallback} cardPhoto={cardPhoto}>
                {description}
            </ProjectCardImage>

            <div class='link-box'>
                {children}
            </div>
        </div>
    );
}

export default ProjectCard