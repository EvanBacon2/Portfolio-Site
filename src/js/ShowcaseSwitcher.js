import React, { useState, useEffect } from 'react'

import ProjectGallery from './ProjectGallery';
import ShowcaseFade from './ShowcaseFade';
import CalendexShowcase from './CalendexShowcase';
import WebShowcase from './WebShowcase';

import 'css/Projects.css';

const ShowcaseSwitcher = ({showcase, showcaseCallback}) => {
    const [show, setShow] = useState(true)

    useEffect(() => {
        if (showcase !== '') setShow(true)
    }, [showcase])
     
    const showCaseSelector = () => {
        switch(showcase) {
            case 'calendex': {
                return <CalendexShowcase showCallback={setShow}/>
            }
            case 'web': {
                return <WebShowcase showCallback={setShow}/>
            }
            default: {
                return <div id='empty-showcase'/>
            }
        }
    }

    return (
        <div id='showcase-switcher'>
            <ProjectGallery showcase={showcase} showcaseCallback={showcaseCallback}/>
            <ShowcaseFade show={show} showcaseCallback={showcaseCallback}>{showCaseSelector()}</ShowcaseFade>
        </div>
    )
}

export default ShowcaseSwitcher