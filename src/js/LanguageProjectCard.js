import ProjectCard from './ProjectCard';
import SmallLink from 'js/SmallLink';

import {ReactComponent as FigmaIcon} from 'svg/figma.svg';

const CalendexProjectCard = ({showcaseCallback}) => {
    return (
        <ProjectCard title='Language Buddy' theme='language' type='ios' description='A meet up/study app for international students' 
                     showcaseCallback={showcaseCallback}>
            <SmallLink theme='language'><FigmaIcon/></SmallLink>
        </ProjectCard>
    );
}

export default CalendexProjectCard