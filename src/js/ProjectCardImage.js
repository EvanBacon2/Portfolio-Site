import { React, Component } from 'react';

import 'css/WebCard.css';

export default class ProjectCardImage extends Component {
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
            <div class={'CardImage ' + this.props.dimensions + 'Image ' + this.props.theme + 'Border'}
                     onMouseEnter={() => this.DisplayCover()} 
                     onMouseLeave={() => this.HideCover()}>
                    <div class={'Left CardImageCover ' + this.props.theme + 'Cover ' + this.state.coverState}></div>
                    <div class={'Right CardImageCover ' + this.props.theme + 'Cover ' + this.state.coverState}></div>
                    <div class='DescContainer'>
                        <div class={'CoverDesc ' + this.state.coverState}>{this.props.children}</div>
                        <a class={'LearnLink ' + this.props.theme + 'Link ' + this.state.coverState} href='https://github.com/EvanBacon2' 
                           target='_blank' rel='noreferrer'>
                            Learn More
                        </a>
                    </div>
            </div>
        );
    }
}