import { useEffect } from 'react';

import 'css/NavButton.css';

export default function NavButton(props) {
    useEffect(() => {
        setTimeout(() => document.getElementById('nav-button').classList.add('show-init'), 200)
    });

    return (
        <div id='nav-button' onClick={() => props.onClick()}>
            <div class={'nav-line ' + props.navState}></div>
            <div class={'nav-line ' + props.navState}></div>
            <div class={'nav-line ' + props.navState}></div>
        </div>
    );
}