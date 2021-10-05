import React, { useState, useEffect } from 'react'

import ContentHeader from 'js/ContentHeader'
import ShowcaseGallery from 'js/ShowcaseGallery'
import Links from 'js/Links'
import LargeLink from 'js/LargeLink'
import SvgButton from 'js/SvgButton'

import 'css/ProjectShowcase.css'

import {ReactComponent as Chevron} from 'svg/chevron.svg'

const CalendexShowcase = ({ showCallback }) => {
    const [showcase, setShowcase] = useState('no-showcase')

    useEffect(() => {
        setTimeout(() => setShowcase('showcase'), 10)
    })

    return (  
        <div id='calendex-showcase' className={'showcase-container ' + showcase}>
            <SvgButton layout='showcase-back-button-layout' theme='calendex'>
                <Chevron className='showcase-back-button' onClick={() => showCallback('no-showcase')}/>
            </SvgButton>
            <div className='content-layout'>
                <ContentHeader title='Calendex' theme={'calendex'}/>
                <p className='showcase-content-description'>                        
                    Calendex is an ios app which allows for blood sugar readings and metrics
                    to be displayed in a calendar format, allowing for users to gain better
                    insight into longer trends/patterns.  Built with Swift and Core Data,
                    with Dexcom's Api used to pull user data.
                </p>
            </div>
            <div className='showcase-layout'>
                <ShowcaseGallery layout='ios' theme='calendex' captions={['View Blood Sugar', 'View Aggregate Data', 'Set Goals']}>
                    <img className='showcase-photo' src='Calendex_Day_Chart.png' alt='A chart showing blood sugar readings over one day'/>
                    <img className='showcase-photo' src='Calendex_Month_Data.png' alt='A calender showing avg blood sugar over one month'/>
                    <img className='showcase-photo' src='Calendex_Settings_Goals.png' alt='Sliders for adjusting blood sugar goals'/>
                </ShowcaseGallery>
            </div>
            <div className='showcase-links-layout'>
                <Links theme={'calendex'}>
                    <LargeLink destination='github' url='https://github.com/EvanBacon2/Calendex'/>
                </Links>
            </div>
        </div>
    )
}

export default CalendexShowcase