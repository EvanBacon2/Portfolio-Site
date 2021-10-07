import { useEffect } from 'react'

import 'stylesheets/SiteHeader.css'

const SiteHeader = ({layout}) => {
    useEffect(() => {
        setTimeout(() => document.getElementById('site-header-container').classList.add('show-init'), 200)
    })
     
    return (
        <div id='site-header-container' className={layout}>
            <h1 id='site-title'>Evan Bacon</h1>
            <div id='header-underline'/>
            <ul id='skill-list'>
                <li className='skill-item'>&bull; ios development </li>
                <li className='skill-item'>&bull; web development </li>
                <li className='skill-item'>&bull; ui design</li>
            </ul>                
        </div>
    )
}

export default SiteHeader