import { React, Component } from 'react';

import PageIndex from 'js/PageIndex';

import '../css/IosShowcase.css'

import {ReactComponent as Chevron} from 'svg/chevron.svg';

export default class IosShowcase extends Component {
    imageCount = 4;

    constructor(props) {
        super(props);
        this.state = {
            imageListPage: 0
        }
    }

    shiftPage = (direction) => {
        const newPage = this.state.imageListPage + direction;
        if (newPage >= 0 && newPage < this.imageCount) {
            this.setState((prevState) => { return { imageListPage: prevState.imageListPage + direction } });
            document.getElementById('showcase-image-list').style.transform = 'translateX(-' + newPage * 8.125 + 'em)'
        }
    }

    render() {
        return (
            <div id='ios-showcase'>
                <div id='showcase-screen'>
                <Chevron class='showcase-chevron left' onClick={() => this.shiftPage(-1)}/>
                    <div class='showcase-border'>
                        <div id='showcase-image-list'>
                            <div class='photo-box'>
                                <img class='showcase-photo' src='grad_photo.png' alt='My face'/>
                            </div>
                            <div class='photo-box'>
                                <img class='showcase-photo' src='grad_photo.png' alt='My face'/>
                            </div>
                            <div class='photo-box'>
                                <img class='showcase-photo' src='grad_photo.png' alt='My face'/>
                            </div>
                            <div class='photo-box'>
                                <img class='showcase-photo' src='grad_photo.png' alt='My face'/>
                            </div>
                        </div>
                    </div>
                    <Chevron class='showcase-chevron right' onClick={() => this.shiftPage(1)}/>
                </div>
                <PageIndex captions={['View Blood Sugar', 'page 2', 'page 3', 'page 4']} currPage={this.state.imageListPage}/>
            </div>
        );
    }
}