import { useState, useEffect } from 'react'

import ContentHeader from 'js/ContentHeader'
import ShowcaseSwitcher from 'js/ShowcaseSwitcher'

import 'css/Projects.css'
import 'css/Structure.css'

const Projects = ({ refProp }) => {
    const [projectsState, setProjectsState] = useState('no-show')

    useEffect(() => {
        const checkScrollTrigger = () => {
            if (document.getElementById('projects-scroll-trigger') != null) {
                if (document.getElementById('projects-scroll-trigger').classList.contains('show')) {
                    setProjectsState('show-init')
                }
            }
        }

        window.addEventListener("scroll", checkScrollTrigger, { passive: true })
    })

    const isShowcase = () => { 
        return projectsState === 'show-init' || projectsState === 'no-show' || projectsState === 'no-showcase' 
    }

    const showcaseState = () => {
        return isShowcase() ? 'no-showcase' : 'showcase'
    }

    const headerState = () => { 
        return isShowcase() ? projectsState : 'showcase' 
    }

    const headerTheme = () => {
        return isShowcase() ? 'brand' : projectsState
    }

    const triangles = (orientation) => {
        return (
            <div class={'projects-triangle-container ' + orientation}>
                <div class={'projects-triangle-box outer left ' + showcaseState()}/>
                <div class={'projects-triangle-box inner gallery-swipe ' + projectsState + ' ' + showcaseState()}/>
                <div class={'projects-triangle-box outer right ' + showcaseState()}/>
            </div>
        )
    }
    
    return (
        <div id='projects' class={'content-grid-template'} ref={refProp}>
            <div id='projects-background'>
                {triangles('top')}
                <div id='projects-content-container' class={'gallery-swipe ' + projectsState + ' ' + showcaseState()}>
                    <div id='projects-content-grid' class={'content-grid-template ' + showcaseState()}>
                        <ShowcaseSwitcher showcase={projectsState} showcaseState={showcaseState()} showcaseCallback={setProjectsState}/>
                    </div>
                </div>
                {triangles('bottom')}
            </div>
            <div id='projects-content'>
                <div class={'center projects-header ' + headerState()}>
                    <ContentHeader title='Projects' state={'section-header'} theme={headerTheme()} fadeAlignment='center'/>
                </div>
            </div>
        </div>
    )
}

export default Projects