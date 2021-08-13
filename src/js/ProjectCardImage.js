import { useState } from 'react';

import 'css/ProjectCardImage.css';

export default function ProjectCardImage(props) {
    const [coverState, setCoverState] = useState('');

    const displayCover = () => {
        setCoverState('display-cover');
    }

    const hideCover = () => {
        setCoverState('');
    }
    
    return (
        <div class='card-image-container'>
            <div class={'card-image-border ' + props.theme + '-border'}/>
            <div class={'card-image'} onMouseEnter={() => displayCover()} onMouseLeave={() => hideCover()}>
                <div class={'card-image-cover ' + props.theme + '-cover ' + coverState}/>
                <div class={'desc-container ' + coverState}>
                    <div class={'cover-desc'}>{props.children}</div>
                    <button class={'learn-link ' + props.theme + '-link'} 
                            onClick={() => props.toggleShowcase(props.theme)}>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}