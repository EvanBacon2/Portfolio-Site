import { React, Component } from 'react';

import ProjectCardImage from 'js/ProjectCardImage';

import 'css/WebCard.css';

import {ReactComponent as AppleIcon} from 'svg/apple.svg';
import {ReactComponent as AppStoreIcon} from 'svg/appstore.svg';
import {ReactComponent as GithubIcon} from 'svg/github.svg';

export default class IosCard extends Component {
    render() {
        return (
            <div class='card-container ios-container'>
                <div class='header-box'>
                    <h1 class={'card-header ' + this.props.theme + '-shadow'}>{this.props.title}</h1>
                    <div class='apple-sizer'>
                       <AppleIcon class='CardIcon'/>
                   </div>
                </div>  
                
                <ProjectCardImage dimensions='ios' theme={this.props.theme} toggleShowcase={this.props.toggleShowcase}>
                    An Ios app for my project
                </ProjectCardImage>

                <div class='link-box'>
                    <div class="card-icon-container website-sizer">
                        <AppStoreIcon class='card-icon card-link'/>
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