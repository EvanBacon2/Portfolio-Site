import { React, Component } from 'react';

import ProjectCardImage from 'js/ProjectCardImage';

import 'css/WebCard.css';

import {ReactComponent as WebIcon} from 'svg/web.svg';
import {ReactComponent as WebsiteIcon} from 'svg/website.svg';
import {ReactComponent as GithubIcon} from 'svg/github.svg';

export default class WebCard extends Component {
    render() {
        return (
            <div class='card-container web-container'>
                <div class='header-box'>
                    <h1 class={'card-header web-shadow'}>{this.props.title}</h1>
                    <div class='web-sizer'>
                       <WebIcon class='card-icon'/>
                    </div>
                </div>  
                
                <ProjectCardImage dimensions='web' theme='web'>
                    A Website for my portfolio
                </ProjectCardImage>

                <div class='link-box'>
                    <div class="card-icon-container website-sizer">
                        <WebsiteIcon class='card-icon card-link'/>
                    </div>
                    <div class="card-icon-container git-sizer">
                        <a href='https://github.com/EvanBacon2' target='_blank' rel='noreferrer'>
                            <GithubIcon class='card-icon card-link'/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}