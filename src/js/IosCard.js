import { React, Component } from 'react';

import 'css/WebCard.css';

import {ReactComponent as AppleIcon} from 'svg/apple.svg';
import {ReactComponent as AppStoreIcon} from 'svg/appstore.svg';
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
            <div class='CardContainer IosContainer'>
                <div class='HeaderBox'>
                    <h1 class={'CardHeader CalendexShadow'}>{this.props.title}</h1>
                    <div class='AppleSizer'>
                       <AppleIcon class='CardIcon'/>
                   </div>
                </div>  
                
                <div class='CardImage IosImage CalendexBorder'
                     onMouseEnter={() => this.DisplayCover()} 
                     onMouseLeave={() => this.HideCover()}>
                    <div class={'Left CardImageCover CalendexCover ' + this.state.coverState}></div>
                    <div class={'Right CardImageCover CalendexCover ' + this.state.coverState}></div>
                    <div class='DescContainer'>
                        <div class={'CoverDesc ' + this.state.coverState}>An Ios app for my Portfolio</div>
                        <a class={'LearnLink CalendexLink ' + this.state.coverState} href='https://github.com/EvanBacon2' 
                           target='_blank' rel='noreferrer'>
                            Learn More
                        </a>
                    </div>
                </div>

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