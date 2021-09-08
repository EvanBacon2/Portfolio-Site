import { useState, useEffect } from 'react'

import ContentHeader from 'js/ContentHeader'
import ShowcaseSwitcher from 'js/ShowcaseSwitcher'

import 'css/Projects.css'
import 'css/Structure.css'

export default function Projects(props) {
    const [projectsState, setProjectsState] = useState('no-show')
    const [show, setShow] = useState('')

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
                <div class={'projects-triangle-box inner gallery-swipe ' + isShowcase() + ' ' + projectsState + ' ' + show}/>
                <div class={'projects-triangle-box outer right ' + isShowcase()}/>
            </div>
        );
    }
    
    return(
        <div id='projects' class={'content-grid-template'} ref={props.refProp}>
            <div id='projects-background'>
                {triangles('top')}
                <div id='projects-content-container' class={'gallery-swipe ' + isShowcase() + ' ' + projectsState + ' ' + show}>
                    <div id='projects-content-grid' class={'content-grid-template ' + isShowcase() + ' ' + show}>
                        <ShowcaseSwitcher showcase={projectsState} showcaseCallback={setProjectsState} show={show} showCallback={setShow}/>
                    </div>
                </div>
                {triangles('bottom')}
            </div>
            <div id='projects-content'>
                <div class={'center projects-header ' + headerState() + ' ' + show}>
                    <ContentHeader title='Projects' state={'section-header ' + projectsState} 
                                   theme={projectsState === '' || 
                                   projectsState === 'show-init' || 
                                   projectsState === 'no-show'  ? 'brand' : projectsState} fadeAlignment='center'/>
                    <div class={projectsState}></div>
                </div>
            </div>
        </div>
    );
}