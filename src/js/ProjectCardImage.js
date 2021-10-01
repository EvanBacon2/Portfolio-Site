import { useState } from 'react'

import 'css/ProjectCardImage.css'

const ProjectCardImage = ({theme, showcaseCallback, children, cardPhoto}) => {
    const [coverState, setCoverState] = useState('')
    
    return (
        <div class='card-image-container'>
            <div class={'card-image-border ' + theme + '-border'}/>
            <div class={'card-image'} onMouseEnter={() => setCoverState('display-cover')} onMouseLeave={() => setCoverState('')}>
                <img class='card-photo' src={cardPhoto} alt='Calendex app screenshot'/>
                <div class={'card-image-cover ' + theme + '-cover ' + coverState}/>
                <div class={'desc-container ' + coverState}>
                    <div class={'cover-desc'}>{children}</div>
                    <button class={'learn-link ' + theme + '-link'} 
                            onClick={() => showcaseCallback(theme)}>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardImage