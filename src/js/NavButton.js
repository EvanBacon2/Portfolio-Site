import { useEffect } from 'react'

import 'css/NavButton.css'

const NavButton = ({ navState, onClick }) => {
    useEffect(() => {
        setTimeout(() => document.getElementById('nav-button').classList.add('show-init'), 200)
    })

    return (
        <div id='nav-button' onClick={() => onClick()}>
            <div class={'nav-line ' + navState}></div>
            <div class={'nav-line ' + navState}></div>
            <div class={'nav-line ' + navState}></div>
        </div>
    )
}

export default NavButton