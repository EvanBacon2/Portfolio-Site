import { Component } from 'react';

import ContentHeader from 'js/ContentHeader';
import { THEMES } from 'js/Themes';

import 'css/Contact.css';

export default class Contact extends Component {
    render() {
        return(
            <div class='Contact'>
                <ContentHeader title='Contact' subTitle='' theme={THEMES.BRAND}/>
                <form class='ContactForm' method="POST">
                    <div class="FormGroup">
                        <label class='FormLabel' htmlFor="name">Name</label>
                        <input type="text" class="FormStyle LineForm" />
                    </div>
                    <div class="FormGroup">
                        <label class='FormLabel' htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" class="FormStyle LineForm" aria-describedby="emailHelp" />
                    </div>
                    <div class="FormGroup">
                        <label class='FormLabel' htmlFor="message">Message</label>
                        <textarea class="FormStyle AreaForm" rows="5"></textarea>
                    </div>
                    <button type="submit" class="SubmitButton">Send Message</button>
                </form>
            </div>
        );
    }
}