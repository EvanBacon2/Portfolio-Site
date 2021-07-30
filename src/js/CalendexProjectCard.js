import ProjectCard from './ProjectCard';
import SmallLink from 'js/SmallLink';

import {ReactComponent as AppStoreIcon} from 'svg/appstore.svg';
import {ReactComponent as GithubIcon} from 'svg/github.svg';

export default function CalendexProjectCard(props) {
    return (
        <ProjectCard title='Calendex' theme='calendex' type='ios' description='Blood sugar metrics app for diabetics' 
                     toggleShowcase={props.toggleShowcase}>
            <SmallLink theme='calendex'><AppStoreIcon/></SmallLink>
            <SmallLink theme='calendex'><GithubIcon/></SmallLink>
        </ProjectCard>
    );
}