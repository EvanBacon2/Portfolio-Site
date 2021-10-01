import { useEffect } from 'react'

import 'css/SiteHeader.css'

const SiteHeader = ({layoutClass}) => {
    useEffect(() => {
        setTimeout(() => document.getElementById('site-header-container').classList.add('show-init'), 200)
    })
     
    return (
        <div id='site-header-container' class={layoutClass}>
            <h1 id='site-title'>Evan Bacon</h1>
            <div id='header-underline'/>
            <ul id='skill-list'>
                <li class='skill-item'>&bull; ios development </li>
                <li class='skill-item'>&bull; web development </li>
                <li class='skill-item'>&bull; ui design</li>
            </ul>                
        </div>
    )
}

export default SiteHeader