import { useState, useEffect } from 'react'

import ContentHeader from 'js/ContentHeader'
import HeadShot from 'js/HeadShot'
import { THEMES } from 'js/Themes'

import 'css/About.css'
import 'css/Structure.css'

const About = ({refProp}) => {
    const [state, setState] = useState('no-show')

    useEffect(() => {
        const checkScrollTrigger = () => {
            if (document.getElementById('about-scroll-trigger').classList.contains('show')) {
                setState('show-init')
            }
        }

        window.addEventListener("scroll", checkScrollTrigger, { passive: true })
    })

    return (
        <div id='about' class='content-grid-template' ref={refProp}>
            <div id='about-content' class={state}>
                <div class='about-header'>
                    <ContentHeader state={'section-header'} title='About Me' theme={THEMES.BRAND} fadeAlignment='right'/>
                </div>
                <div id='about-scroll-trigger' class='hide'/>
                <p class='about-description'>                        
                    Hi, my name’s Evan.  I’m a recent graduate from the University of Washington pursuing a career as a front 
                    end developer. I am particularly passionate about the design aspect of front end development, and have 
                    experience designing ios apps and websites.  When not coding I enjoy making pixel art and writing 
                    music in my free time.
                </p>
                <div class='about-headshot'>
                    <HeadShot/>
                </div>
            </div>
            
        </div>
    );   
}

export default About