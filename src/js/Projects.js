import { Component } from 'react';

import ContentHeader from 'js/ContentHeader';
import CalendexProjectCard from './CalendexProjectCard';
import WebProjectCard from 'js/WebProjectCard';
import CalendexShowcase from 'js/CalendexShowcase';

import 'css/Projects.css';
import 'css/Structure.css';

import {ReactComponent as BackgroundTriangle} from 'svg/background-triangle.svg';

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showcase: '',
            theme: 'brand'
        };
    }

    toggleShowcase = (theme) => {
        this.setState((state) => {
            return { 
                showcase: state.showcase === '' ? 'showcase ' + theme : '',
                theme: state.showcase === '' ? theme : 'brand'
            }
        });
    }

    triangles(orientation) {
        return (
            <div class={'projects-triangle-container ' + orientation}>
                <div class='projects-triangle-box top left'>
                    <BackgroundTriangle class='projects-background-fill'/>
                </div>
                <div class='projects-triangle-box top right'>
                    <BackgroundTriangle class='projects-background-fill'/>
                </div>
                <div class='projects-triangle-box bottom left'>
                    <BackgroundTriangle class={'projects-background-fill dynamic-background ' + this.state.showcase}/>
                </div>
                <div class='projects-triangle-box bottom right'>
                    <BackgroundTriangle class={'projects-background-fill dynamic-background ' + this.state.showcase}/>
                </div>
            </div>
        );
    }

    render() {
        return(
            <div id='projects' class='content-grid-template' ref={this.props.refProp}>
                <div id='projects-background'>
                   {this.triangles('top')}
                    <div id='gallery-container' class={'content-grid-template ' + this.state.showcase}>
                        <div id='gallery-box' class={this.state.showcase}>
                            <WebProjectCard toggleShowcase={this.toggleShowcase}/>
                            <CalendexProjectCard toggleShowcase={this.toggleShowcase}/>
                        </div>
                        <CalendexShowcase showcase={this.state.showcase} toggleShowcase={this.toggleShowcase}/>
                    </div>
                    {this.triangles('bottom')}
                </div>
                <div id='projects-content'>
                    <div class='center hide'>
                        <ContentHeader title='Projects' subTitle='' theme={this.state.theme} 
                                       fadeAlignment='center'/>
                    </div>
                </div>
            </div>
        );
    }
}