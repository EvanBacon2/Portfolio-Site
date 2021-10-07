import { useState, useEffect } from 'react'

import CalendexProjectCard from './CalendexProjectCard'
import LanguageProjectCard from './LanguageProjectCard'

import 'stylesheets/Projects.css'
import 'stylesheets/Structure.css'

const ProjectGallery =  ({ showcase, showcaseCallback }) => {
    const [displaySwitch, setDisplaySwitch] = useState('off')

    useEffect(() => {
        if (showcase === 'show-init') setTimeout(() => { setDisplaySwitch('on') }, 3100)
        if (showcase === 'no-showcase') setDisplaySwitch('on')
    }, [showcase])

    const scrollTrigger = () => {
        if (showcase === 'no-show') return <div id='projects-scroll-trigger' className='hide'/>
    }

    return (
        <div id='gallery-container' className={displaySwitch}>
            <div className='p-1'>
                <CalendexProjectCard showcaseCallback={showcaseCallback}/>
                {scrollTrigger()}
            </div>    
            <div className='p-2'><LanguageProjectCard showcaseCallback={showcaseCallback}/></div>
        </div>
    )
}

export default ProjectGallery