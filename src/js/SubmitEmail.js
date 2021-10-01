import { useState } from 'react'

import SvgButton from './SvgButton.js';

import '../css/LargeLink.css';

import {ReactComponent as MailIcon} from '../svg/mail.svg';

const SubmitEmail = ({ state }) => {
    const [active, setActive] = useState('');

    const toggleActive = () => { setActive(active === '' ? 'active' : '') }

    return (
        <div class={'link ' + state} onMouseEnter={toggleActive} onMouseLeave={toggleActive}>
            <SvgButton theme='mail' active={active}><MailIcon class='large-link-box mail'/></SvgButton>
            <span class={'link-text mail'}>Send Message</span>
        </div>
    )
}

export default SubmitEmail