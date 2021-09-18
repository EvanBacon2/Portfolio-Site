import ProjectCard from './ProjectCard';
import SmallLink from 'js/SmallLink';

import {ReactComponent as FigmaIcon} from 'svg/figma.svg';

const LanguageProjectCard = ({showcaseCallback}) => {
    return (
        <ProjectCard title='Language Buddy' theme='language' type='ux' cardPhoto='Language_Card_Photo.png'
                     description='A meet up/study app for international students' showcaseCallback={showcaseCallback}>
            <SmallLink theme='language' url='https://www.figma.com/file/NoxMY1g6x97M8WzxnpFUmL/Language-Buddy'><FigmaIcon/></SmallLink>
        </ProjectCard>
    );
}

export default LanguageProjectCard