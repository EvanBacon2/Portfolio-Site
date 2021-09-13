import React, { useState, useEffect } from 'react'

import ProjectGallery from './ProjectGallery'
import ShowcaseFade from './ShowcaseFade'
import CalendexShowcase from './CalendexShowcase'
import LanguageShowcase from './LanguageShowcase'
import WebShowcase from './WebShowcase'

import 'css/Projects.css';

const ShowcaseSwitcher = ({showcase, showcaseCallback, show, showCallback}) => {
    const switchShowcase = (showcase) => {
        if (show === '' || show === 'out') {
            showCallback('in')
            setTimeout(() => showcaseCallback(showcase), 600)
        } else if (show === 'in') {
            showCallback('out')
            setTimeout(() => showcaseCallback(showcase), 1300)
        }
    }
     
    const showCaseSelector = () => {
        switch(showcase) {
            case 'calendex': {
                return <CalendexShowcase showCallback={switchShowcase}/>
            }
            case 'language': {
                return <LanguageShowcase showCallback={switchShowcase}/>
            }
            case 'web': {
                return <WebShowcase showCallback={switchShowcase}/>
            }
            default: {
                return <ProjectGallery showcase={showcase} showcaseCallback={switchShowcase}/>
            }
        }
    }

    return (
        <div id='showcase-switcher'>
            <ShowcaseFade show={show} showcaseCallback={showcaseCallback}>{showCaseSelector()}</ShowcaseFade>
        </div>
    )
}

export default ShowcaseSwitcher