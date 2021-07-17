import { Component } from 'react';

import ContentHeader from 'js/ContentHeader';
import { THEMES } from 'js/Themes';
import IosCard from 'js/IosCard';

import 'css/Projects.css';

export default class Projects extends Component {
    render() {
        return(
            <div class='Projects'>
                <ContentHeader title='Projects' subTitle='' theme={THEMES.BRAND}/>
                <div class='Gallery'>
                    <IosCard title='Calendex' theme='Calendex'></IosCard>
                </div>
            </div>
        );
    }
}