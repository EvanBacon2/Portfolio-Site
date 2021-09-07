import ProjectCard from './ProjectCard';
import SmallLink from 'js/SmallLink';

import {ReactComponent as AppStoreIcon} from 'svg/appstore.svg';
import {ReactComponent as GithubIcon} from 'svg/github.svg';

const CalendexProjectCard = ({showcaseCallback}) => {
    return (
        <ProjectCard title='Calendex' theme='calendex' type='ios' description='Blood sugar metrics app for diabetics' 
                     showcaseCallback={showcaseCallback}>
            <SmallLink theme='calendex'><AppStoreIcon/></SmallLink>
            <SmallLink theme='calendex'><GithubIcon/></SmallLink>
        </ProjectCard>
    );
}

export default CalendexProjectCard