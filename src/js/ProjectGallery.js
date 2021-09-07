import { useState, useEffect } from 'react'

import CalendexProjectCard from './CalendexProjectCard'
import WebProjectCard from 'js/WebProjectCard'

import 'css/Projects.css'
import 'css/Structure.css'

const ProjectGallery =  ({showcase, showcaseCallback}) => {
    const [displaySwitch, setDisplaySwitch] = useState('off')
    const [collapse, setCollapse] = useState('')

    useEffect(() => {
        if (showcase === 'show-init') setTimeout(() => { setDisplaySwitch('on') }, 3100)
    }, [showcase])

    useEffect(() => {
        showcase === '' || showcase === 'show-init' || showcase === 'no-show' ? setCollapse('') : setTimeout(() => { setCollapse('collapse') }, 400)
    }, [showcase])

    const isShowcase = () => { return showcase === '' || 
                                      showcase === 'show-init' || 
                                      showcase === 'no-show' ? 'no-showcase' : 'showcase' }

    return (
        <div id='gallery-container' class={isShowcase() + ' ' + collapse + ' ' + displaySwitch}>
            <div class='p-1'>
                <WebProjectCard showcaseCallback={showcaseCallback}/>
                <div id='projects-scroll-trigger' class='hide'/>
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