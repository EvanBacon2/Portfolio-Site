import { useState, useEffect } from 'react'

import ContentHeader from 'js/ContentHeader'
import ShowcaseSwitcher from 'js/ShowcaseSwitcher'

import 'stylesheets/Projects.css'
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
            <div className={'projects-triangle-container ' + orientation}>
                <div className={'projects-triangle-box outer left ' + showcaseState()}/>
                <div className={'projects-triangle-box inner gallery-swipe ' + projectsState + ' ' + showcaseState()}/>
                <div className={'projects-triangle-box outer right ' + showcaseState()}/>
            </div>
        )
    }
    
    return (
        <section id='projects' className={'content-grid-template'} ref={refProp}>
            <div id='projects-background'>
                {triangles('top')}
                <div id='projects-content-container' className={'gallery-swipe ' + projectsState + ' ' + showcaseState()}>
                    <div id='projects-content-grid' className={'content-grid-template ' + showcaseState()}>
                        <ShowcaseSwitcher showcase={projectsState} showcaseState={showcaseState()} showcaseCallback={setProjectsState}/>
                    </div>
                </div>
                {triangles('bottom')}
            </div>
            <div id='projects-content'>
                <div className={'center projects-header ' + headerState()}>
                    <ContentHeader title='Projects' state={'section-header'} theme={headerTheme()} fadeAlignment='center'/>
                </div>
            </div>
        </section>
    )
}

export default Projects