import InitialsLogo from './InitialsLogo'

import 'css/Footer.css'

const Footer = ({homeRef, aboutRef, projectsRef, contactRef}) => {
    const scrollToSection = (section) => {
        section.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div id='footer'>
            <div id='footer-box'>
                <a class='footer-link' onClick={() => scrollToSection(homeRef)}>Home</a>
                <a class='footer-link' onClick={() => scrollToSection(aboutRef)}>About</a>
                <div id='footer-initials-logo' class='layout'>
                    <InitialsLogo theme='brand'/>
                </div>
                <a class='footer-link' onClick={() => scrollToSection(projectsRef)}>Projects</a>
                <a class='footer-link' onClick={() => scrollToSection(contactRef)}>Contact</a>
            </div>
        </div>
    );
}

export default Footer