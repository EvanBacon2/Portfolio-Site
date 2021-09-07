import ProjectCard from './ProjectCard';
import SmallLink from 'js/SmallLink';

import {ReactComponent as WebSiteIcon} from 'svg/website.svg';
import {ReactComponent as GithubIcon} from 'svg/github.svg';

const WebProjectCard = ({showcaseCallback}) => {
    return (
        <ProjectCard title='Website' theme='web' type='web' description='A website for my portfolio' 
                     showcaseCallback={showcaseCallback}>
            <SmallLink theme='web'><WebSiteIcon/></SmallLink>
            <SmallLink theme='web'><GithubIcon/></SmallLink>
        </ProjectCard>
    );
}

export default WebProjectCard