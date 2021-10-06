import { useEffect } from 'react'

import { ReactComponent as Chevron } from 'svg/chevron.svg'

import 'stylesheets/ScrollPrompt.css'

const ScrollPrompt = ({ layout }) => {
    useEffect(() => {
        setTimeout(() => document.getElementById('scroll-prompt-container').classList.add('show-init'), 200)
    })
    
    return (
        <div id='scroll-prompt-container' className={layout}>
            <h1 id='scroll-prompt-text'>Scroll Down</h1>
            <div id='scroll-chevron-container'>
                <div id='scroll-chevron' className='scroll-chevron-box scroll-chevron-layout'>
                    <Chevron className='chevron-fill'/>
                </div>
                <div id='scroll-chevron-shadow' className='scroll-chevron-box'>
                    <Chevron className='chevron-shadow-fill'/>
                </div>
            </div>
        </div>
    )
}

export default ScrollPrompt