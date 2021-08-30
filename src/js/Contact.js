import { useState, useEffect } from 'react'

import ContentHeader from 'js/ContentHeader'
import Links from 'js/Links'
import LargeLink from './LargeLink'
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

    return(
        <div id='contact' class='content-grid-template' ref={props.refProp}>
            <div id='contact-contents' class={state}>
                <div class='form-container'>
                    <div class='contact-header'>
                        <ContentHeader title='Contact' state={state} theme={THEMES.BRAND} fadeAlignment='right'/>
                    </div>
                    <form class='contact-form' method="POST">
                        <div class="form-group">
                            <label class='form-label' htmlFor="name">Name</label>
                            <div class='form-border'>
                                <input class="form-style line-form" type="text"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class='form-label' htmlFor="exampleInputEmail1">Email</label>
                            <div class='form-border'>
                                <input class="form-style line-form" type="email" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class='form-label' htmlFor="message">Message</label>
                            <div class='form-border'>
                                <textarea class="form-style area-form" rows="4"></textarea>
                            </div>
                        </div>
                        <div id='contact-scroll-trigger' class='hide'/>
                        <div class='send-message-layout'>
                            <LargeLink state={state} destination='mail'/>
                        </div>
                    </form>
                </div>
                <Links state={state} theme={THEMES.BRAND}>
                    <LargeLink state={state} destination='github'/>
                    <LargeLink state={state} destination='linkedin'/>
                    <LargeLink state={state} destination='linkedin'/>
                    <LargeLink state={state} destination='linkedin'/>
                </Links>
            </div>
        </div>
    );
}