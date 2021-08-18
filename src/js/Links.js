import ContentHeader from './ContentHeader.js';

import '../css/Links.css';
import '../css/ColorClasses.css'

export default function Links(props) {    
    return (
        <div class='links-container'>
            {/*<div class='links-header'>*/}
                <ContentHeader title='Links' state={props.state} theme={props.theme} fadeAlignment='left'/>
            {/*</div>*/}
            <div class='links-list'>
                {props.children}
            </div>
        </div>
    );
}