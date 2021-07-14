import { React, Component } from 'react';

import 'css/WebCard.css';

import {ReactComponent as WebIcon} from 'svg/web.svg';
import {ReactComponent as WebsiteIcon} from 'svg/website.svg';
import {ReactComponent as GithubIcon} from 'svg/github.svg';

export default class WebCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coverState: ''
        }
    }

    DisplayCover() {
        this.setState({
            coverState: 'DisplayCover'
        });
    }

    HideCover() {
        this.setState({
            coverState: ''
        });
    }

    render() {
        return (
            <div class='CardContainer WebContainer'>
                <div class='HeaderBox'>
                    <h1 class={'CardHeader WebShadow'}>{this.props.title}</h1>
                    <div class='WebSizer'>
                       <WebIcon class='CardIcon'/>
                    </div>
                </div>  
                
                <div class='CardImage WebImage WebBorder'
                     onMouseEnter={() => this.DisplayCover()} 
                     onMouseLeave={() => this.HideCover()}>
                    <div class={'Left CardImageCover WebCover ' + this.state.coverState}></div>
                    <div class={'Right CardImageCover WebCover ' + this.state.coverState}></div>
                    <div class='DescContainer'>
                        <div class={'CoverDesc ' + this.state.coverState}>A Website for my Portfolio</div>
                        <a class={'LearnLink WebLink ' + this.state.coverState} href='https://github.com/EvanBacon2' 
                           target='_blank' rel='noreferrer'>
                            Learn More
                        </a>
                    </div>
                </div>

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