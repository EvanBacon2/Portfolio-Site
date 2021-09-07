import React, { useEffect } from 'react'

import ContentHeader from 'js/ContentHeader';
import ShowcaseGallery from 'js/ShowcaseGallery'
import Links from 'js/Links';
import LargeLink from './LargeLink';
import SvgButton from 'js/SvgButton';

import 'css/ProjectShowcase.css'

import {ReactComponent as Chevron} from 'svg/chevron.svg';

const WebShowcase = ({showCallback}) => {
    useEffect(() => {
        document.getElementById('web-showcase').classList.remove('no-showcase');
        document.getElementById('web-showcase').classList.add('showcase');
    });

    return ( 
        <div id='web-showcase' class={'showcase-container'}>
            <SvgButton layoutClass='showcase-back-button-layout' theme='web'>
                <Chevron class='showcase-back-button' onClick={() => showCallback(false)}/>
            </SvgButton>
            <div class='content-layout'>
                <ContentHeader title='Website' theme={'web'}/>
                 <p class='showcase-content-description'>                        
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum
                </p>
            </div>
            <div class='showcase-layout'>
                <ShowcaseGallery layout='web' theme='web' captions={['View Blood Sugar', 'page 2', 'page 3', 'page 4']}>
                    <img class='showcase-photo' src='grad_photo.png' alt='My face'/>
                    <img class='showcase-photo' src='grad_photo.png' alt='My face'/>
                    <img class='showcase-photo' src='grad_photo.png' alt='My face'/>
                    <img class='showcase-photo' src='grad_photo.png' alt='My face'/>
                </ShowcaseGallery>
            </div>
            <div class='showcase-links-layout'>
                <Links theme={'web'}>
                    <LargeLink destination='github' url='https://github.com/EvanBacon2'/>
                    <LargeLink destination='appstore'/>
                </Links>
            </div>
        </div>
    );
}

export default WebShowcase