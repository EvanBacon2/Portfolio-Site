import { useState, useEffect } from 'react'

import ProjectGallery from 'js/ProjectGallery'
import ShowcaseFade from 'js/ShowcaseFade'
import CalendexShowcase from 'js/CalendexShowcase'
import LanguageShowcase from 'js/LanguageShowcase'

import 'stylesheets/Projects.css'

const ShowcaseSwitcher = ({ showcase, showcaseState, showcaseCallback }) => {
    const [selection, setSelection] = useState(showcase)

    useEffect(() => {
        setTimeout(() => setSelection(showcase), showcaseState === 'showcase' ? 1200 : 600)
    }, [showcase, showcaseState])

    const showCaseSelector = () => {
        switch(selection) {
            case 'calendex': return <CalendexShowcase showCallback={showcaseCallback}/>
            case 'language': return <LanguageShowcase showCallback={showcaseCallback}/>
            default: return <ProjectGallery showcase={showcase} showcaseCallback={showcaseCallback}/>
        }
    }

    return (
        <div id='showcase-switcher' className={showcase}>
            <ShowcaseFade showcaseState={showcase}>{showCaseSelector()}</ShowcaseFade>
        </div>
    )
}

export default ShowcaseSwitcher