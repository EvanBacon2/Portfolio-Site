import ProjectGallery from 'js/ProjectGallery'
import ShowcaseFade from 'js/ShowcaseFade'
import CalendexShowcase from 'js/CalendexShowcase'
import LanguageShowcase from 'js/LanguageShowcase'

import 'css/Projects.css';

const ShowcaseSwitcher = ({showcase, showcaseCallback, show, showCallback}) => {
    const switchShowcase = (showcase) => {
        if (show === '' || show === 'out') {
            showCallback('in')
            setTimeout(() => showcaseCallback(showcase), 600)
        } else if (show === 'in') {
            showCallback('out')
            setTimeout(() => showcaseCallback(showcase), 1300)
        }
    }
     
    const showCaseSelector = () => {
        switch(showcase) {
            case 'calendex': {
                return <CalendexShowcase showCallback={switchShowcase}/>
            }
            case 'language': {
                return <LanguageShowcase showCallback={switchShowcase}/>
            }
            default: {
                return <ProjectGallery showcase={showcase} showcaseCallback={switchShowcase}/>
            }
        }
    }

    return (
        <div id='showcase-switcher'>
            <ShowcaseFade show={show} showcaseCallback={showcaseCallback}>{showCaseSelector()}</ShowcaseFade>
        </div>
    )
}

export default ShowcaseSwitcher