import React, { useState, useEffect } from 'react'

import ContentHeader from 'js/ContentHeader';
import ShowcaseGallery from 'js/ShowcaseGallery'
import Links from 'js/Links';
import LargeLink from './LargeLink';
import SvgButton from 'js/SvgButton';

import 'css/ProjectShowcase.css'

import {ReactComponent as Chevron} from 'svg/chevron.svg';

const CalendexShowcase = ({showCallback}) => {
    const [showcase, setShowcase] = useState('no-showcase')

    useEffect(() => {
        setTimeout(() => setShowcase('showcase'), 10);
    });

    return (  
        <div id='calendex-showcase' class={'showcase-container ' + showcase}>
            <SvgButton layoutClass='showcase-back-button-layout' theme='language'>
                <Chevron class='showcase-back-button' onClick={() => showCallback('')}/>
            </SvgButton>
            <div class='content-layout'>
                <ContentHeader title='Language Buddy' theme={'language'}/>
                <p class='showcase-content-description'>                        
                    Language Buddy is a mockup of an app meant to help international students studying in the US 
                    find others to study or practice English with.  The mockup was created as part of a group project 
                    for a college course. In creating the mockup I conducted user research by organizing interviews with 
                    two instructors who taught English classes meant for non native speakers, in order to better understand 
                    the challenges they face. I also helped design and create the ui for the mockup.
                </p>
            </div>
            <div class='showcase-layout'>
                <ShowcaseGallery layout='ios' theme='language' captions={['Sign in/up', 'Search for other users', 'Search for other users', 
                                                                          'Search for other users', 'Schedule Meetups', 'Schedule Meetups']}>
                    <img class='showcase-photo' src='Language_Main_App_Page.png' alt='Sign in/up screen'/>
                    <img class='showcase-photo' src='Language_Connect_Intro_Page.png' alt='Choose between searching for meetups, finding them on a map'/>
                    <img class='showcase-photo' src='Language_Initial_Search.png' alt='Menu for searching for nearby users'/>
                    <img class='showcase-photo' src='Language_Explore.png' alt='Map for explore the surrounding area'/>
                    <img class='showcase-photo' src='Language_Schedule_New_Meeting.png' alt='Menu for scheduling a new meeting'/>
                    <img class='showcase-photo' src='Language_Calendar_Popup.png' alt='Menu for scheduling a new meeting'/>
                </ShowcaseGallery>
            </div>
            <div class='showcase-links-layout'>
                <Links theme={'language'}>
                    <LargeLink destination='figma' url='https://www.figma.com/file/NoxMY1g6x97M8WzxnpFUmL/Language-Buddy'/>
                </Links>
            </div>
        </div>
    );
}

export default CalendexShowcase