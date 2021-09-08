import { useState, useEffect } from 'react'

import CalendexProjectCard from './CalendexProjectCard'
import WebProjectCard from 'js/WebProjectCard'

import 'css/Projects.css'
import 'css/Structure.css'

const ProjectGallery =  ({showcase, showcaseCallback}) => {
    const [displaySwitch, setDisplaySwitch] = useState('off')

    useEffect(() => {
        if (showcase === 'show-init') setTimeout(() => { setDisplaySwitch('on') }, 3100)
        if (isShowcase() === 'no-showcase') setDisplaySwitch('on')
    })

    const isShowcase = () => { 
        switch(showcase) {
            case 'show-init': {
                return 'show-init'
            }
            case 'no-show': {
                return 'no-show'
            }
            case 'no-showcase': {
                return 'no-showcase'
            }
            case '': {
                return 'no-showcase'
            }
            default: {
                return 'showcase'
            }
        }
    }

    const includeScrollTrigger = () => {
        if (showcase === 'no-show') return <div id='projects-scroll-trigger' class='hide'/>
    }

    return (
        <div id='gallery-container' class={isShowcase() + ' ' + displaySwitch}>
            <div class='p-1'>
                <WebProjectCard showcaseCallback={showcaseCallback}/>
                {includeScrollTrigger()}
            </div>    
            <div class='p-2'><CalendexProjectCard showcaseCallback={showcaseCallback}/></div>
            <div class='p-3'><WebProjectCard showcaseCallback={showcaseCallback}/></div>
            <div class='p-4'><CalendexProjectCard showcaseCallback={showcaseCallback}/></div>
            <div class='p-5'><WebProjectCard showcaseCallback={showcaseCallback}/></div>
            <div class='p-6'><CalendexProjectCard showcaseCallback={showcaseCallback}/></div>
        </div>
    );
}

export default ProjectGallery