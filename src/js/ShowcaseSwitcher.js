import { useState, useEffect } from 'react'

import ProjectGallery from 'js/ProjectGallery'
import ShowcaseFade from 'js/ShowcaseFade'
import CalendexShowcase from 'js/CalendexShowcase'
import LanguageShowcase from 'js/LanguageShowcase'

import 'css/Projects.css'

const ShowcaseSwitcher = ({ showcase, showcaseState, showcaseCallback }) => {
    const [selection, setSelection] = useState(showcase)

    useEffect(() => {
        setTimeout(() => setSelection(showcase), 1300)
    }, [showcase])

    const showCaseSelector = () => {
        switch(selection) {
            case 'calendex': {
                return <CalendexShowcase showCallback={showcaseCallback}/>
            }
            case 'language': {
                return <LanguageShowcase showCallback={showcaseCallback}/>
            }
            default: {
                return <ProjectGallery showcase={showcase} showcaseCallback={showcaseCallback}/>
            }
        }
    }

    return (
        <div id='showcase-switcher'>
            <ShowcaseFade showcaseState={showcaseState}>{showCaseSelector()}</ShowcaseFade>
        </div>
    )
}

export default ShowcaseSwitcher