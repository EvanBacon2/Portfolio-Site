import { React, Component } from 'react';

import 'css/HeadShot.css';

export default class HeadShot extends Component {
    render() {
        return (
            <div>
                <div id='headshot-container'>
                    <div class='grad-photo-background'/>
                    <img class='grad-photo' src='grad_photo.png' alt='My face'/>
                </div>
            </div>
        )
    }
}