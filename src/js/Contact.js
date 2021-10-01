import { useState, useEffect } from 'react'

import emailjs from 'emailjs-com';

import ContentHeader from 'js/ContentHeader'
import Links from 'js/Links'
import LargeLink from './LargeLink'
import SubmitEmail from 'js/SubmitEmail'
import { THEMES } from 'js/Themes'

import 'css/Contact.css'
import 'css/Structure.css'

export default function Contact(props) {
    const [state, setState] = useState('no-show');

    useEffect(() => {
        const checkScrollTrigger = () => {
            if (document.getElementById('contact-scroll-trigger').classList.contains('show')) {
                setState('show-init');
            }
        }

        window.addEventListener("scroll", checkScrollTrigger, { passive: true });
    });

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qeucivz', 'template_6sjtpuj', e.target, 'user_m7tWQG5rUezeCWcB73oHX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return(
        <div id='contact' class='content-grid-template' ref={props.refProp}>
            <div id='contact-contents' class={state}>
                <div class='form-container'>
                    <div class='contact-header'>
                        <ContentHeader state={'section-header'} title='Contact' theme={THEMES.BRAND} fadeAlignment='right'/>
                    </div>
                    <form class='contact-form' onSubmit={sendEmail}>
                        <div class="form-group">
                            <label class='form-label' htmlFor="name">Name</label>
                            <div class='form-border'>
                                <input id="name" class="form-style line-form" type="text" name='user_name'/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class='form-label' htmlFor="email">Email</label>
                            <div class='form-border'>
                                <input id="email" class="form-style line-form" type="email" aria-describedby="emailHelp" name='user_email'/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class='form-label' htmlFor="message">Message</label>
                            <div class='area form-border'>
                                <textarea id="message" class="form-style area-form" rows="4" name='message'/>
                            </div>
                        </div>
                        <div id='contact-scroll-trigger' class='hide'/>
                        <div class='flex-center'>
                            <button class='send-message-layout' type='submit'>
                                {/*<LargeLink state={state + ' send-message'} destination='mail'/>*/}
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
        </div>
    );
}