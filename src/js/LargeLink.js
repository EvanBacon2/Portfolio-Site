import { Component } from 'react';

import SvgButton from './SvgButton.js';
import FigmaButton from 'js/FigmaButton'

import '../css/LargeLink.css';

import {ReactComponent as GithubIcon} from '../svg/github.svg';
import {ReactComponent as WebsiteIcon} from '../svg/website.svg';
import {ReactComponent as AppStoreIcon} from '../svg/appstore.svg';
import {ReactComponent as LinkedinIcon} from '../svg/linkedin.svg';

export default class LargeLink extends Component {
    icon = (dest) => {
        switch (dest) {
            case 'github': return <SvgButton theme='github'><GithubIcon class='large-link-box github'/></SvgButton>
            case 'website': return <SvgButton theme='website'><WebsiteIcon class='large-link-box website'/></SvgButton>
            case 'appstore': return <SvgButton theme='appstore'><AppStoreIcon class='large-link-box appstore'/></SvgButton>
            case 'linkedin': return <SvgButton theme='linkedin'><LinkedinIcon class='large-link-box linkedin'/></SvgButton>
            case 'figma': return <FigmaButton boxClass='large-link-box figma'/>
        }
    }

    text = (dest) => {
        switch (dest) {
            case 'figma': return <div>
                <span class='link-text figma1'>F</span>
                <span class='link-text figma-text figma2'>i</span>
                <span class='link-text figma-text figma3'>g</span>
                <span class='link-text figma-text figma4'>m</span>
                <span class='link-text figma-text figma5'>a</span>
            </div>
            case 'appstore': return <span class={'link-text ' + dest}>App Store</span>
            default: return <span class={'link-text ' + dest}>{this.capitalized(dest)}</span>
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