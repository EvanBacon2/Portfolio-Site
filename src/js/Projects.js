import { useState, useEffect } from 'react'

import ContentHeader from 'js/ContentHeader'
import CalendexProjectCard from './CalendexProjectCard'
import WebProjectCard from 'js/WebProjectCard'
import CalendexShowcase from 'js/CalendexShowcase'

import 'css/Projects.css'
import 'css/Structure.css'

import { ReactComponent as BackgroundTriangle } from 'svg/background-triangle.svg'

export default function Projects(props) {
    const [displaySwitch, setDisplaySwitch] = useState('off');
    const [theme, setTheme] = useState('brand')
    const [gallery, setGallery] = useState('no-show')
    const [showcase, setShowcase] = useState('no-showcase')

    useEffect(() => {
        const checkScrollTrigger = () => {
            if (document.getElementById('projects-scroll-trigger').classList.contains('show')) {
                setGallery('show-init')
                document.getElementById('projects-scroll-trigger').classList.remove('show')
                setTimeout(() => { setDisplaySwitch('on') }, 3100)
            }
        }

        window.addEventListener("scroll", checkScrollTrigger, { passive: true })
    });

    const toggleShowcase = (theme) => {
        setGallery(gallery === 'no-show' ? 'show' : 'no-show')
        setShowcase(showcase === 'no-showcase' ? 'showcase' : 'no-showcase')
        setTheme(theme)
    }

    const triangles = (orientation) => {
        return (
            <div class={'projects-triangle-container ' + orientation}>
                <div class='projects-triangle-box top left'>
                    <BackgroundTriangle class='projects-background-fill'/>
                </div>
                <div class='projects-triangle-box top right'>
                    <BackgroundTriangle class='projects-background-fill'/>
                </div>
                <div class='projects-triangle-box bottom left'>
                    <BackgroundTriangle class={'projects-background-fill dynamic-background ' + showcase + ' ' + theme}/>
                </div>
                <div class='projects-triangle-box bottom right'>
                    <BackgroundTriangle class={'projects-background-fill dynamic-background ' + showcase + ' ' + theme}/>
                </div>
            </div>
        );
    }
    
    return(
        <div id='projects' class='content-grid-template' ref={props.refProp}>
            <div id='projects-background'>
                {triangles('top')}
                <div id='gallery-container' class={'content-grid-template ' + showcase + ' ' + theme}>
                    <div id='gallery-box' class={gallery + ' ' + showcase + ' ' + theme + ' ' + displaySwitch}>
                        <div class='p-1'>
                            <WebProjectCard toggleShowcase={toggleShowcase}/>
                            <div id='projects-scroll-trigger' class='hide'/>
                        </div>    
                        <div class='p-2'><CalendexProjectCard toggleShowcase={toggleShowcase}/></div>
                        <div class='p-3'><WebProjectCard toggleShowcase={toggleShowcase}/></div>
                        <div class='p-4'><CalendexProjectCard toggleShowcase={toggleShowcase}/></div>
                        <div class='p-5'><WebProjectCard toggleShowcase={toggleShowcase}/></div>
                        <div class='p-6'><CalendexProjectCard toggleShowcase={toggleShowcase}/></div>
                    </div>
                    <CalendexShowcase state={showcase} theme={theme} toggleShowcase={toggleShowcase}/>
                </div>
                {triangles('bottom')}
            </div>
            <div id='projects-content'>
                <div class={'center projects-header'}>
                    <ContentHeader title='Projects' state={gallery + ' ' + showcase} theme={theme} fadeAlignment='center'/>
                </div>
            </div>
        </div>
    );
}