import InitialsLogo from './InitialsLogo';

import 'css/Footer.css';

export default function Footer(props) {
    return (
        <div id='footer'>
            <div id='footer-box'>
                <a class='footer-link' onClick={() => scrollToSection(props.homeRef)}>Home</a>
                <a class='footer-link' onClick={() => scrollToSection(props.aboutRef)}>About</a>
                <div id='footer-initials-logo' class='layout'>
                    <InitialsLogo theme='brand'/>
                </div>
                <a class='footer-link' onClick={() => scrollToSection(props.projectsRef)}>Projects</a>
                <a class='footer-link' onClick={() => scrollToSection(props.contactRef)}>Contact</a>
            </div>
        </div>
    );
}

function scrollToSection(section) {
    section.current.scrollIntoView({ behavior: 'smooth' });
}