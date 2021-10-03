import { useState, useEffect } from 'react'

import emailjs from 'emailjs-com'

import ContentHeader from 'js/ContentHeader'
import Links from 'js/Links'
import LargeLink from './LargeLink'
import SubmitEmail from 'js/SubmitEmail'
import { THEMES } from 'js/Themes'

import 'css/Contact.css'
import 'css/Structure.css'

const Contact = ({refProp}) => {
    const [state, setState] = useState('no-show')

    useEffect(() => {
        const checkScrollTrigger = () => {
            if (document.getElementById('contact-scroll-trigger').classList.contains('show')) {
                setState('show-init')
            }
        }

        window.addEventListener("scroll", checkScrollTrigger, { passive: true })
    })

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm('service_qeucivz', 'template_6sjtpuj', e.target, 'user_m7tWQG5rUezeCWcB73oHX')
          .then((result) => {
              console.log(result.text)
          }, (error) => {
              console.log(error.text)
          })
      }

    return(
        <section id='contact' className='content-grid-template' ref={refProp}>
            <div id='contact-contents' className={state}>
                <div className='form-container'>
                    <div className='contact-header'>
                        <ContentHeader state={'section-header'} title='Contact' theme={THEMES.BRAND} fadeAlignment='right'/>
                    </div>
                    <form className='contact-form' onSubmit={sendEmail}>
                        <div className="form-group">
                            <label className='form-label' htmlFor="name">Name</label>
                            <div className='form-border'>
                                <input id="name" className="form-style line-form" type="text" name='user_name'/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className='form-label' htmlFor="email">Email</label>
                            <div className='form-border'>
                                <input id="email" className="form-style line-form" type="email" aria-describedby="emailHelp" name='user_email'/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className='form-label' htmlFor="message">Message</label>
                            <div className='area form-border'>
                                <textarea id="message" className="form-style area-form" rows="4" name='message'/>
                            </div>
                        </div>
                        <div id='contact-scroll-trigger' className='hide'/>
                        <div className='flex-center'>
                            <button className='send-message-layout' type='submit'>
                                <SubmitEmail state={state + ' send-message'}/>
                            </button>
                        </div>
                    </form>
                </div>
                <Links state={state + ' section-header'} theme={THEMES.BRAND}>
                    <LargeLink state={state} url='https://github.com/EvanBacon2' destination='github'/>
                    <LargeLink state={state} url='https://www.linkedin.com/in/evan-bacon-5b5127172/' destination='linkedin'/>
                </Links>
            </div>
        </section>
    )
}

export default Contact