import ProjectCard from './ProjectCard';
import SmallLink from 'js/SmallLink';

import {ReactComponent as WebSiteIcon} from 'svg/website.svg';
import {ReactComponent as GithubIcon} from 'svg/github.svg';

export default function WebProjectCard(props) {
    return (
        <ProjectCard title='Website' theme='web' type='web' description='A website for my portfolio' 
                     toggleShowcase={props.toggleShowcase}>
            <SmallLink theme='web'><WebSiteIcon/></SmallLink>
            <SmallLink theme='web'><GithubIcon/></SmallLink>
        </ProjectCard>
    );
}