import InitialsLogo from './InitialsLogo';

import 'css/Footer.css';

export default function Footer(props) {
    return (
        <div id='footer'>
            <div id='footer-box'>
                <a class='footer-link'>Home</a>
                <a class='footer-link'>About</a>
                <div id='footer-initials-logo' class='layout'>
                    <InitialsLogo theme='brand'/>
                </div>
                <a class='footer-link'>Projects</a>
                <a class='footer-link'>Contact</a>
            </div>
        </div>
    );
}