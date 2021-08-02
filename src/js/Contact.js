import { Component } from 'react';
import { React, useState, useEffect } from 'react';

import ContentHeader from 'js/ContentHeader';
import Links from 'js/Links';
import LargeLink from './LargeLink';
import { THEMES } from 'js/Themes';

import 'css/Contact.css';
import 'css/Structure.css'

export default function Contact(props) {
    return(
        <div id='contact' class='content-grid-template' ref={props.refProp}>
            <div id='contact-contents' class='hide'>
                <div>
                    <ContentHeader title='Contact' theme={THEMES.BRAND} fadeAlignment='right'/>
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
                        <div class='send-message-layout'>
                            <LargeLink destination='mail'/>
                        </div>
                    </form>
                </div>
                <Links theme={THEMES.BRAND}>
                    <LargeLink destination='github'/>
                    <LargeLink destination='linkedin'/>
                </Links>
            </div>
        </div>
    );
}