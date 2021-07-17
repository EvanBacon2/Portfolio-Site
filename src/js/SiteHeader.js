import { React, Component } from 'react';

import 'css/SiteHeader.css';

export default class SiteHeader extends Component {
    render() {
        return (
        <div class={'CenterDiv ' + this.props.class}>
            <div class='HeaderContainer'>
                <h1 class='SiteTitle'>Evan Bacon</h1>
                <hr/>
                <ul class='SkillList'>
                    <li class='SkillItem'>&bull; ios development </li>
                    <li class='SkillItem'>&bull; web development </li>
                    <li class='SkillItem'>&bull; ui design</li>
                </ul>                
            </div>
        </div>)
    }
}