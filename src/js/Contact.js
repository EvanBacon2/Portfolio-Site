import { Component } from 'react';

import ContentHeader from 'js/ContentHeader';
import Links from 'js/Links';
import LargeLink from './LargeLink';
import { THEMES } from 'js/Themes';

import 'css/Contact.css';
import 'css/Structure.css'

export default class Contact extends Component {
    render() {
        return(
            <div id='contact' class='content-grid-template' ref={this.props.refProp}>
                <div id='contact-contents'>
                    <div>
                        <ContentHeader title='Contact' subTitle='' theme={THEMES.BRAND}/>
                        <form class='contact-form' method="POST">
                            <div class="form-group">
                                <label class='form-label' htmlFor="name">Name</label>
                                <input class="form-style line-form" type="text"/>
                            </div>
                            <div class="form-group">
                                <label class='form-label' htmlFor="exampleInputEmail1">Email address</label>
                                <input class="form-style line-form" type="email" aria-describedby="emailHelp" />
                            </div>
                            <div class="form-group">
                                <label class='form-label' htmlFor="message">Message</label>
                                <textarea class="form-style area-form" rows="4"></textarea>
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
}