import { Component } from 'react';

import ProjectCardImage from 'js/ProjectCardImage';
import SmallLink from 'js/SmallLink';

import 'css/ProjectCard.css';

import {ReactComponent as WebIcon} from 'svg/web.svg';
import {ReactComponent as AppleIcon} from 'svg/apple.svg';
import {ReactComponent as WebSiteIcon} from 'svg/website.svg';
import {ReactComponent as GithubIcon} from 'svg/github.svg';

export default class ProjectCard extends Component {
    platformIcon = (type) => {
        switch (type) {
            case 'web': return <WebIcon class={'card-icon platform-icon-sizer'}/>
            case 'ios': return <AppleIcon class={'card-icon platform-icon-sizer'}/>
        }
    }

    render() {
        return (
            <div class='card-container project-container'>
                <div class='header-box'>
                    <h1 class={'card-header ' + this.props.theme + '-shadow'}>{this.props.title}</h1>
                    {this.platformIcon(this.props.type)}
                </div>  
                
                <ProjectCardImage theme={this.props.theme} toggleShowcase={this.props.toggleShowcase}>
                    A Website for my portfolio
                </ProjectCardImage>

                <div class='link-box'>
                    <SmallLink theme={this.props.theme}><WebSiteIcon/></SmallLink>
                    <SmallLink theme={this.props.theme}><GithubIcon/></SmallLink>
                    {this.props.children}
                </div>
            </div>
        );
    }
}