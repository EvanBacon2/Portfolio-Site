import { React, Component } from 'react';

import 'css/ProjectCardImage.css';

export default class ProjectCardImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coverState: ''
        }
    }

    displayCover() {
        this.setState({
            coverState: 'display-cover'
        });
    }

    hideCover() {
        this.setState({
            coverState: ''
        });
    }

    render() {
        return (
            <div class='card-image-container'>
                <div class={'card-image-border ' + this.props.theme + '-border'}/>
                <div class={'card-image'}
                     onMouseEnter={() => this.displayCover()} 
                     onMouseLeave={() => this.hideCover()}>
                    <div class={'card-image-cover ' + this.props.theme + '-cover ' + this.state.coverState}/>
                    <div class={'desc-container ' + this.state.coverState}>
                        <div class={'cover-desc'}>{this.props.children}</div>
                        <button class={'learn-link ' + this.props.theme + '-link'} 
                                onClick={() => this.props.toggleShowcase(this.props.theme)}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}