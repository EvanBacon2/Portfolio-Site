import { React, Component } from 'react';

import 'css/ContentHeader.css';
import 'css/ColorClasses.css';

export default class ContentHeader extends Component {
    render() {
        return (
            <div class='HeaderContainer'>
                <div class='ExtraPadding'>
                    <h2 class={this.props.theme + 'Shadow2x2'}>{this.props.title}</h2>
                    <h3>{this.props.subTitle}</h3>
                </div>
                <hr class={this.props.theme + 'Color'}/>
            </div>
        );
    }
}