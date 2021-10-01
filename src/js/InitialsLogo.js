import { useEffect } from 'react'

import {ReactComponent as InitialsIcon} from 'svg/initials.svg'

import 'css/InitialsLogo.css'

const InitialsLogo = ({theme}) => {
    useEffect(() => {
        setTimeout(() => document.getElementById('main-initials-logo').classList.add('show-init'), 200)
    })
    
    return ( 
        <div id='initials-logo' class={'initials-sizer'}>
            <InitialsIcon class={'initials-shadow ' + theme}/>
        </div>
    )
}

export default InitialsLogo