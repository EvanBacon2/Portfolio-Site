import { Component } from 'react';

import ContentHeader from 'js/ContentHeader';
import { THEMES } from 'js/Themes';

import 'css/Contact.css';

export default class Contact extends Component {
    render() {
        return(
            <div class='contact'>
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
                        <textarea class="form-style area-form" rows="5"></textarea>
                    </div>
                    <button class="submit-button" type="submit">Send Message</button>
                </form>
            </div>
        );
    }
}