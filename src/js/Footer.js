import InitialsLogo from 'js/InitialsLogo'

import 'stylesheets/Footer.css'

const Footer = ({homeRef, aboutRef, projectsRef, contactRef}) => {
    const scrollToSection = (section) => {
        section.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer id='footer'>
            <button className='footer-link' onClick={() => scrollToSection(homeRef)}>Home</button>
            <button className='footer-link' onClick={() => scrollToSection(aboutRef)}>About</button>
            <div id='footer-initials-logo' className='layout'>
                <InitialsLogo theme='brand'/>
            </div>
            <button className='footer-link' onClick={() => scrollToSection(projectsRef)}>Projects</button>
            <button className='footer-link' onClick={() => scrollToSection(contactRef)}>Contact</button>
        </footer>
    )
}

export default Footer