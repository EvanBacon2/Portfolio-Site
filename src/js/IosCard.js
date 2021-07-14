import { React, Component } from 'react';

import ProjectCardImage from 'js/ProjectCardImage';

import 'css/WebCard.css';

import {ReactComponent as AppleIcon} from 'svg/apple.svg';
import {ReactComponent as AppStoreIcon} from 'svg/appstore.svg';
import {ReactComponent as GithubIcon} from 'svg/github.svg';

export default class IosCard extends Component {
    render() {
        return (
            <div class='CardContainer IosContainer'>
                <div class='HeaderBox'>
                    <h1 class={'CardHeader CalendexShadow'}>{this.props.title}</h1>
                    <div class='AppleSizer'>
                       <AppleIcon class='CardIcon'/>
                   </div>
                </div>  
                
                <ProjectCardImage dimensions='Ios' theme='Calendex'>
                    An Ios app for my project
                </ProjectCardImage>

                <div class='LinkBox'>
                    <div class="CardIconContainer WebsiteSizer">
                        <AppStoreIcon class='CardIcon CardLink'/>
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