import ContentHeader from './ContentHeader.js';

import '../css/Links.css';
import '../css/ColorClasses.css'

export default function Links(props) {    
    return (
        <div class='links-container'>
            <ContentHeader title='Links' state={props.state} theme={props.theme} fadeAlignment='left'/>
            {props.children}
        </div>
    );
}