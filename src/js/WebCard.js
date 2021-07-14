import { React, Component } from 'react';

import ProjectCardImage from 'js/ProjectCardImage';

import 'css/WebCard.css';

import {ReactComponent as WebIcon} from 'svg/web.svg';
import {ReactComponent as WebsiteIcon} from 'svg/website.svg';
import {ReactComponent as GithubIcon} from 'svg/github.svg';

export default class WebCard extends Component {
    render() {
        return (
            <div class='CardContainer WebContainer'>
                <div class='HeaderBox'>
                    <h1 class={'CardHeader WebShadow'}>{this.props.title}</h1>
                    <div class='WebSizer'>
                       <WebIcon class='CardIcon'/>
                    </div>
                </div>  
                
                <ProjectCardImage dimensions='Web' theme='Web'>
                    A Website for my portfolio
                </ProjectCardImage>

                <div class='LinkBox'>
                    <div class="CardIconContainer WebsiteSizer">
                        <WebsiteIcon class='CardIcon CardLink'/>
                    </div>
                    <div class="CardIconContainer GitSizer">
                        <a href='https://github.com/EvanBacon2' target='_blank' rel='noreferrer'>
                            <GithubIcon class='CardIcon CardLink'/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}