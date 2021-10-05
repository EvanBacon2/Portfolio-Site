import React, { useState, useEffect } from 'react'

import ContentHeader from 'js/ContentHeader'
import ShowcaseGallery from 'js/ShowcaseGallery'
import Links from 'js/Links'
import LargeLink from 'js/LargeLink'
import SvgButton from 'js/SvgButton'

import 'css/ProjectShowcase.css'

import {ReactComponent as Chevron} from 'svg/chevron.svg'

const LanguageShowcase = ({showCallback}) => {
    const [showcase, setShowcase] = useState('no-showcase')

    useEffect(() => {
        setTimeout(() => setShowcase('showcase'), 10)
    })

    return (  
        <div id='language-showcase' className={'showcase-container ' + showcase}>
            <SvgButton layout='showcase-back-button-layout' theme='language'>
                <Chevron className='showcase-back-button' onClick={() => showCallback('no-showcase')}/>
            </SvgButton>
            <div className='content-layout'>
                <ContentHeader title='Language Buddy' theme={'language'}/>
                <p className='showcase-content-description'>                        
                    Language Buddy is a mockup of an app meant to help international students studying in the US 
                    find others to study or practice English with.  The mockup was created as part of a group project 
                    for a college course. In creating the mockup I conducted user research by organizing interviews with 
                    two instructors who taught English classes meant for non native speakers, in order to better understand 
                    the challenges they face. I also helped design and create the ui for the mockup.
                </p>
            </div>
            <div className='showcase-layout'>
                <ShowcaseGallery layout='ios' theme='language' captions={['Sign in/up', 'Search for other users', 'Search for other users', 
                                                                          'Search for other users', 'Schedule Meetups', 'Schedule Meetups']}>
                    <img className='showcase-photo' src='Language_Main_App_Page.png' alt='Sign in/up screen'/>
                    <img className='showcase-photo' src='Language_Connect_Intro_Page.png' alt='Choose between searching for meetups, finding them on a map'/>
                    <img className='showcase-photo' src='Language_Initial_Search.png' alt='Menu for searching for nearby users'/>
                    <img className='showcase-photo' src='Language_Explore.png' alt='Map for explore the surrounding area'/>
                    <img className='showcase-photo' src='Language_Schedule_New_Meeting.png' alt='Menu for scheduling a new meeting'/>
                    <img className='showcase-photo' src='Language_Calendar_Popup.png' alt='Menu for scheduling a new meeting'/>
                </ShowcaseGallery>
            </div>
            <div className='showcase-links-layout'>
                <Links theme={'language'}>
                    <LargeLink destination='figma' url='https://www.figma.com/file/NoxMY1g6x97M8WzxnpFUmL/Language-Buddy'/>
                </Links>
            </div>
        </div>
    )
}

export default LanguageShowcase