import ProjectCard from './ProjectCard'
import SmallLink from 'js/SmallLink'

import { ReactComponent as GithubIcon } from 'svg/github.svg'

const CalendexProjectCard = ({showcaseCallback}) => {
    return (
        <ProjectCard title='Calendex' theme='calendex' type='ios' cardPhoto='Calendex_Card_Photo.avif'
                     description='Blood sugar metrics app for diabetics' showcaseCallback={showcaseCallback}>
            <SmallLink theme='calendex' url='https://github.com/EvanBacon2/portfolio-site'><GithubIcon/></SmallLink>
        </ProjectCard>
    );
}

export default CalendexProjectCard