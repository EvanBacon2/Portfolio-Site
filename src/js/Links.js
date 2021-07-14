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
            <div class='LinksContainer'>
                <ContentHeader title='Links' theme={this.props.theme}/>
                <div class='Link'>
                    <div class='LinkIconContainer'>
                        <FigmaColorIcon class='LinkIconShadow'/>
                        <FigmaIcon class='LinkIcon'/>
                    </div>
                    <span class='LinkText FigmaColor1'>F</span>
                    <span class='LinkText FigmaText FigmaColor2'>i</span>
                    <span class='LinkText FigmaText FigmaColor3'>g</span>
                    <span class='LinkText FigmaText FigmaColor4'>m</span>
                    <span class='LinkText FigmaText FigmaColor5'>a</span>
                </div>
                <div class='Link'>
                    <div class='LinkIconContainer'>
                        <GithubIcon class='LinkIconShadow GithubColor'/>
                        <GithubIcon class='LinkIcon'/>
                    </div>
                    <span class='LinkText GithubColor'>Github</span>
                </div>
                <div class='Link'>
                <div class='LinkIconContainer'>
                    <WebsiteIcon class='LinkIconShadow WebsiteColor'/>
                    <WebsiteIcon class='LinkIcon'/>
                </div>
                    <span class='LinkText WebsiteColor'>Website</span>
                </div>
            </div>
        );
    }
}