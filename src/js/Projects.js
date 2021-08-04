import { useState, useEffect } from 'react';

import ContentHeader from 'js/ContentHeader';
import CalendexProjectCard from './CalendexProjectCard';
import WebProjectCard from 'js/WebProjectCard';
import CalendexShowcase from 'js/CalendexShowcase';

import 'css/Projects.css';
import 'css/Structure.css';

import {ReactComponent as BackgroundTriangle} from 'svg/background-triangle.svg';

export default function Projects(props) {
    const [showcase, setShowcase] = useState('');
    const [theme, setTheme] = useState('brand'); 

    useEffect(() => {
        const checkScrollTrigger = () => {
            if (document.getElementById('projects-scroll-trigger').classList.contains('show')) {
                document.getElementById('projects').classList.add('show')
                document.getElementById('projects').classList.add('hide')
            }
        }

        window.addEventListener("scroll", checkScrollTrigger, { passive: true });
    });

    const toggleShowcase = (theme) => {
        setShowcase(showcase === '' ? 'showcase ' + theme : '');
        setTheme(showcase === '' ? theme : 'brand');
    }

    const triangles = (orientation, showcase) => {
        return (
            <div class={'projects-triangle-container ' + orientation}>
                <div class='projects-triangle-box top left'>
                    <BackgroundTriangle class='projects-background-fill'/>
                </div>
                <div class='projects-triangle-box top right'>
                    <BackgroundTriangle class='projects-background-fill'/>
                </div>
                <div class='projects-triangle-box bottom left'>
                    <BackgroundTriangle class={'projects-background-fill dynamic-background ' + showcase}/>
                </div>
                <div class='projects-triangle-box bottom right'>
                    <BackgroundTriangle class={'projects-background-fill dynamic-background ' + showcase}/>
                </div>
            </div>
        );
    }
    
    return(
        <div id='projects' class='content-grid-template' ref={props.refProp}>
            <div id='projects-background'>
                {triangles('top', showcase)}
                <div id='gallery-container' class={'content-grid-template ' + showcase}>
                    <div id='gallery-box' class={showcase}>
                        <div id='projects-scroll-trigger' class='p-1 hide'><WebProjectCard toggleShowcase={toggleShowcase}/></div>    
                        <div class='p-2'><CalendexProjectCard toggleShowcase={toggleShowcase}/></div>
                        <div class='p-3'><WebProjectCard toggleShowcase={toggleShowcase}/></div>
                        <div class='p-4'><CalendexProjectCard toggleShowcase={toggleShowcase}/></div>
                        <div class='p-5'><WebProjectCard toggleShowcase={toggleShowcase}/></div>
                        <div class='p-6'><CalendexProjectCard toggleShowcase={toggleShowcase}/></div>
                    </div>
                    <CalendexShowcase showcase={showcase} toggleShowcase={toggleShowcase}/>
                </div>
                {triangles('bottom', showcase)}
            </div>
            <div id='projects-content' /*class='hide'*/>
                <div class='center'>
                    <ContentHeader title='Projects' subTitle='' theme={theme} 
                                   fadeAlignment='center'/>
                </div>
            </div>
        </div>
    );
}