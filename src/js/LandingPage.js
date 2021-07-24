import { Component } from 'react';

import SiteHeader from 'js/SiteHeader';
import ScrollPrompt from 'js/ScrollPrompt';

import 'css/LandingPage.css';

export default class LandingPage extends Component {
    render() {
        return (
            <div id='landing-page'>
                <SiteHeader layoutClass='header-layout'/>
                <ScrollPrompt layoutClass='scroll-prompt-layout'/>
            </div>
        );
    }
}