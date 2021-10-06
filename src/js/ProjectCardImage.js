import { useState } from 'react'

import 'stylesheets/ProjectCardImage.css'

const ProjectCardImage = ({theme, showcaseCallback, children, cardPhoto}) => {
    const [coverState, setCoverState] = useState('')
    
    return (
        <div className='card-image-container'>
            <div className={'card-image-border ' + theme}/>
            <div className={'card-image'} onMouseEnter={() => setCoverState('display-cover')} onMouseLeave={() => setCoverState('')}>
                <img className='card-photo' src={cardPhoto} alt='Calendex app screenshot'/>
                <div className={'card-image-cover ' + theme + ' ' + coverState}/>
                <div className={'desc-container ' + coverState}>
                    <div className={'cover-desc'}>{children}</div>
                    <button className={'learn-link ' + theme} 
                            onClick={() => showcaseCallback(theme)}>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardImage