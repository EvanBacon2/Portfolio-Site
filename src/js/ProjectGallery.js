import { useState, useEffect } from 'react'

import CalendexProjectCard from './CalendexProjectCard'
import LanguageProjectCard from './LanguageProjectCard'

import 'css/Projects.css'
import 'css/Structure.css'

const ProjectGallery =  ({showcase, showcaseCallback}) => {
    const [displaySwitch, setDisplaySwitch] = useState('off')

    useEffect(() => {
        if (showcase === 'show-init') setTimeout(() => { setDisplaySwitch('on') }, 3100)
        if (showcase === 'no-showcase') setDisplaySwitch('on')
    })

    const scrollTrigger = () => {
        if (showcase === 'no-show') return <div id='projects-scroll-trigger' class='hide'/>
    }

    return (
        <div id='gallery-container' class={displaySwitch}>
            <div class='p-1'>
                <CalendexProjectCard showcaseCallback={showcaseCallback}/>
                {scrollTrigger()}
            </div>    
            <div class='p-2'><LanguageProjectCard showcaseCallback={showcaseCallback}/></div>
        </div>
    )
}

export default ProjectGallery