import { React, Component } from 'react';

import 'css/WebCard.css';

export default class WebCardCover extends Component {
    render() {
        return (
            <div class='CardImage WebImage WebBorder'
                     onMouseEnter={() => this.DisplayCover()} 
                     onMouseLeave={() => this.HideCover()}>
                    <div class={'Left CardImageCover WebCover ' + this.state.coverState}></div>
                    <div class={'Right CardImageCover WebCover ' + this.state.coverState}></div>
                    <div class='DescContainer'>
                        <div class={'CoverDesc ' + this.state.coverState}>{this.props.children}}</div>
                        <a class={'LearnLink WebLink ' + this.state.coverState} href='https://github.com/EvanBacon2' 
                           target='_blank' rel='noreferrer'>
                            Learn More
                        </a>
                    </div>
            </div>
        );
    }
}