import { Component } from 'react';

import ContentHeader from 'js/ContentHeader';
import { THEMES } from 'js/Themes';
import IosCard from 'js/IosCard';

import 'css/Projects.css';
import 'css/Structure.css';

import {ReactComponent as BackgroundTriangle} from 'svg/background-triangle.svg';
import {ReactComponent as BackgroundTrapezoid} from 'svg/background-trapezoid.svg';

export default class Projects extends Component {
    render() {
        return(
            <div id='projects' class='content-grid-template'>
                <BackgroundTriangle/>
                {/*<div id='projects-content'>
                    <ContentHeader title='Projects' subTitle='' theme={THEMES.BRAND}/>
                    <div class='gallery'>
                        <IosCard title='calendex' theme='calendex' toggleOverlay={this.props.toggleOverlay}/>
                    </div>
                </div>*/}
            </div>
        );
    }
}