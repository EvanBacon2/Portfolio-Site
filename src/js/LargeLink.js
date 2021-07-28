import { Component } from 'react';

import SvgButton from './SvgButton.js';
import FigmaButton from 'js/FigmaButton'

import '../css/LargeLink.css';

import {ReactComponent as GithubIcon} from '../svg/github.svg';
import {ReactComponent as WebsiteIcon} from '../svg/website.svg';
import {ReactComponent as LinkedinIcon} from '../svg/linkedin.svg';

export default class LargeLink extends Component {
    icon = (dest) => {
        switch (dest) {
            case 'github': return <SvgButton theme='github'><GithubIcon class='github-box'/></SvgButton>
            case 'website': return <SvgButton theme='website'><WebsiteIcon class='website-box'/></SvgButton>
            case 'linkedin': return <SvgButton theme='linkedin'><LinkedinIcon class='linkedin-box'/></SvgButton>
            case 'figma': return <FigmaButton/>
        }
    }

    text = (dest) => {
        switch (dest) {
            case 'figma': return <div>
                <span class='link-text figma-color1'>F</span>
                <span class='link-text figma-text figma-color2'>i</span>
                <span class='link-text figma-text figma-color3'>g</span>
                <span class='link-text figma-text figma-color4'>m</span>
                <span class='link-text figma-text figma-color5'>a</span>
            </div>
            default: return <span class={'link-text ' + this.props.destination}>{this.capitalized(this.props.destination)}</span>
        }
    }

    capitalized = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }

    render() {
        return (
            <a class='link' href={this.props.url} target='_blank'>
                {this.icon(this.props.destination)}
                {this.text(this.props.destination)}
            </a>
        );
    }
}