import InitialsLogo from 'js/InitialsLogo'

import 'css/Footer.css'

const Footer = ({homeRef, aboutRef, projectsRef, contactRef}) => {
    const scrollToSection = (section) => {
        section.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer id='footer'>
            <a className='footer-link' href={homeRef} onClick={() => scrollToSection(homeRef)}>Home</a>
            <a className='footer-link' href={aboutRef} onClick={() => scrollToSection(aboutRef)}>About</a>
            <div id='footer-initials-logo' className='layout'>
                <InitialsLogo theme='brand'/>
            </div>
            <a className='footer-link' href={projectsRef} onClick={() => scrollToSection(projectsRef)}>Projects</a>
            <a className='footer-link' href={contactRef} onClick={() => scrollToSection(contactRef)}>Contact</a>
        </footer>
    )
}

export default Footer