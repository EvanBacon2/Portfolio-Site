import { Component } from 'react';

import ContentHeader from 'js/ContentHeader';
import { THEMES } from 'js/Themes';
import IosCard from 'js/IosCard';

import 'css/Projects.css';
import 'css/Structure.css';

import {ReactComponent as BackgroundTriangle} from 'svg/background-triangle.svg';
import {ReactComponent as BackgroundTrapezoid} from 'svg/background-trapezoid.svg';

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showcase: ''
        };
    }

    toggleShowcase = (theme) => {
        this.setState({ showcase: this.state.showcase === '' ? 'showcase ' + theme : ''})
    }

    render() {
        return(
            <div id='projects' class='content-grid-template'>
                <div id='projects-background'>
                    <div class='projects-triangle-box top left'>
                        <BackgroundTriangle class='projects-background-fill'/>
                    </div>
                    <div class='projects-triangle-box top right'>
                        <BackgroundTriangle class='projects-background-fill'/>
                    </div>
                    <div class='projects-triangle-box middle-top left'>
                        <BackgroundTriangle class='projects-background-fill'/>
                    </div>
                    <div class='projects-triangle-box middle-top right'>
                        <BackgroundTriangle class='projects-background-fill'/>
                    </div>
                    <div id='gallery-container' class='content-grid-template'>
                        <div id='gallery-box' class={this.state.showcase}>
                            <IosCard title='Calendex' theme='calendex' toggleShowcase={this.toggleShowcase}/>
                            <IosCard title='Calendex' theme='calendex' toggleShowcase={this.toggleShowcase}/>
                            <IosCard title='Calendex' theme='calendex' toggleShowcase={this.toggleShowcase}/>
                            <IosCard title='Calendex' theme='calendex' toggleShowcase={this.toggleShowcase}/>
                            <IosCard title='Calendex' theme='calendex' toggleShowcase={this.toggleShowcase}/>
                            <IosCard title='Calendex' theme='calendex' toggleShowcase={this.toggleShowcase}/>
                        </div>
                    </div>
                    <div class='projects-triangle-box middle-bottom left'>
                        <BackgroundTriangle class='projects-background-fill'/>
                    </div>
                    <div class='projects-triangle-box middle-bottom right'>
                        <BackgroundTriangle class='projects-background-fill'/>
                    </div>
                    
                    <div class='projects-triangle-box bottom left'>
                        <BackgroundTriangle class='projects-background-fill'/>
                    </div>
                    <div class='projects-triangle-box bottom right'>
                        <BackgroundTriangle class='projects-background-fill'/>
                    </div>
                </div>
                <div id='projects-content'>
                    <div class='center'>
                        <ContentHeader title='Projects' subTitle='' theme={THEMES.BRAND}/>
                    </div>
                </div>
            </div>
        );
    }
}