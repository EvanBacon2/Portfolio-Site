import { React, Component } from 'react';

import ContentHeader from './ContentHeader.js';
import { THEMES } from './Themes.js';

import '../css/Links.css';
import '../css/ColorClasses.css'

import {ReactComponent as FigmaIcon} from '../svg/figma.svg';
import {ReactComponent as FigmaColorIcon} from '../svg/figma-color.svg';
import {ReactComponent as GithubIcon} from '../svg/github.svg';
import {ReactComponent as WebsiteIcon} from '../svg/website.svg';

export default class Links extends Component {
    render() {
        return (
            <div class='links-container'>
                <ContentHeader title='links' theme={this.props.theme}/>
                <div class='link'>
                    <div class='link-icon-container'>
                        <FigmaColorIcon class='link-icon-shadow'/>
                        <FigmaIcon class='link-icon'/>
                    </div>
                    <span class='link-text figma-color1'>F</span>
                    <span class='link-text figma-text figma-color2'>i</span>
                    <span class='link-text figma-text figma-color3'>g</span>
                    <span class='link-text figma-text figma-color4'>m</span>
                    <span class='link-text figma-text figma-color5'>a</span>
                </div>
                <div class='link'>
                    <div class='link-icon-container'>
                        <div class='github-box link-icon-shadow'>
                            <GithubIcon class='github-color'/>
                        </div>
                        <div class='github-box'>
                            <GithubIcon class='link-icon'/>
                        </div>
                    </div>
                    <span class='link-text github-color'>Github</span>
                </div>
                <div class='link'>
                <div class='link-icon-container'>
                    <div class='website-box link-icon-shadow'>
                        <WebsiteIcon class='website-color'/>
                    </div>
                    <div class='website-box'>
                        <WebsiteIcon class='link-icon'/>
                    </div>
                </div>
                    <span class='link-text website-color'>Website</span>
                </div>
            </div>
        );
    }
}