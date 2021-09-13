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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum
                </p>
            </div>
            <div class='showcase-layout'>
                <ShowcaseGallery layout='ios' theme='language' captions={['View Blood Sugar', 'View Aggregate Data', 'Set Goals']}>
                    <img class='showcase-photo' src='Calendex_Day_Chart.png' alt='A chart showing blood sugar readings over one day'/>
                    <img class='showcase-photo' src='Calendex_Month_Data.png' alt='A calender showing avg blood sugar over one month'/>
                    <img class='showcase-photo' src='Calendex_Settings_Goals.png' alt='Sliders for adjusting blood sugar goals'/>
                </ShowcaseGallery>
            </div>
            <div class='showcase-links-layout'>
                <Links theme={'language'}>
                    <LargeLink destination='figma' url='https://github.com/EvanBacon2/portfolio-site'/>
                </Links>
            </div>
        </div>
    );
}

export default CalendexShowcase