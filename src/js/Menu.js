import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuContext, Selections } from './MenuContext.js'

import 'css/Menu.css';

import {ReactComponent as AboutIcon} from 'svg/about.svg';
import {ReactComponent as AppleIcon} from 'svg/apple.svg';
import {ReactComponent as WebIcon} from 'svg/web.svg';
import {ReactComponent as UxIcon} from 'svg/ux.svg';

export default class Menu extends Component {
    render() {
        return (
            <div class='MenuContainer'>
                <Link to='/about'>
                    <AboutIcon class={'menuIcon ' + this.isSelected('about')} 
                               onClick={() => this.context.setSelection(Selections.ABOUT)}/>
                </Link>
                <Link to='/calendex'>
                    <AppleIcon class={'menuIcon ' + this.isSelected('apple')} 
                               onClick={() => this.context.setSelection(Selections.APPLE)}/>
                </Link>
                <WebIcon class={'menuIcon ' + this.isSelected('web')} onClick={() => this.context.setSelection(Selections.WEB)}/>
                <UxIcon class={'menuIcon ' + this.isSelected('ux')} onClick={() => this.context.setSelection(Selections.UX)}/>
            </div>
        );
    }

    isSelected(icon) {
        return (this.context.selection === icon ? 'selected' : '');
    }
}

Menu.contextType = MenuContext;