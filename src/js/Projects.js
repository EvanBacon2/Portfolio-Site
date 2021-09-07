import { useState, useEffect } from 'react'

import ContentHeader from 'js/ContentHeader'
import ShowcaseSwitcher from 'js/ShowcaseSwitcher'

import 'css/Projects.css'
import 'css/Structure.css'

export default function Projects(props) {
    const [scrollTrigger, setScrollTrigger] = useState('no-show')
    const [showcase, setShowcase] = useState('')
    const [projectsState, setProjectsState] = useState('no-show')

    useEffect(() => {
        const checkScrollTrigger = () => {
            if (document.getElementById('projects-scroll-trigger').classList.contains('show')) {
                setScrollTrigger('show-init')
                setProjectsState('show-init')
                document.getElementById('projects-scroll-trigger').classList.remove('show')
            }
        }

        window.addEventListener("scroll", checkScrollTrigger, { passive: true })
    })

    const isShowcase = () => { return projectsState === '' || 
                                      projectsState === 'show-init' || 
                                      projectsState === 'no-show' ? 'no-showcase' : 'showcase' }

    const headerState = () => { 
        switch(projectsState) {
            case 'show-init': {
                return 'show-init'
            }
            case 'no-show': {
                return 'no-show'
            }
            case '': {
                return 'no-showcase'
            }
            default: {
                return 'showcase'
            }
        }

    }

    const triangles = (orientation) => {
        return (
            <div class={'projects-triangle-container ' + orientation}>
                <div class={'projects-triangle-box outer left ' + isShowcase()}/>
                <div class={'projects-triangle-box inner gallery-swipe ' + isShowcase()}/>
                <div class={'projects-triangle-box outer right ' + isShowcase()}/>
            </div>
        );
    }
    
    return(
        <div id='projects' class={'content-grid-template ' + scrollTrigger} ref={props.refProp}>
            <div id='projects-background'>
                {triangles('top')}
                <div id='projects-content-container' class={'gallery-swipe ' + isShowcase()}>
                    <div id='projects-content-grid' class={'content-grid-template ' + isShowcase()}>
                        <ShowcaseSwitcher showcase={projectsState} showcaseCallback={setProjectsState}/>
                    </div>
                </div>
                {triangles('bottom')}
            </div>
            <div id='projects-content'>
                <div class={'center projects-header ' + headerState()}>
                    <ContentHeader title='Projects' state={'section-header ' + projectsState} 
                                   theme={projectsState === '' || 
                                   projectsState === 'show-init' || 
                                   projectsState === 'no-show'  ? 'brand' : projectsState} fadeAlignment='center'/>
                </div>
            </div>
        </div>
    );
}