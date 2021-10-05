import { useState } from 'react'

import SvgButton from 'js/SvgButton.js';

import 'css/LargeLink.css';

import {ReactComponent as MailIcon} from '../svg/mail.svg';

const SubmitEmail = ({ state }) => {
    const [active, setActive] = useState('');

    const toggleActive = () => { setActive(active === '' ? 'active' : '') }

    return (
        <div className={'link ' + state} onMouseEnter={toggleActive} onMouseLeave={toggleActive}>
            <SvgButton theme='mail' active={active}><MailIcon className='large-link-box mail'/></SvgButton>
            <span className={'link-text mail'}>Send Message</span>
        </div>
    )
}

export default SubmitEmail