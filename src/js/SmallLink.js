import * as React from 'react';

import 'css/SmallLink.css';

export default function SmallLink(props) {
    const injectStyle = (newClass) =>{
        return React.Children.map(props.children, child => 
            React.cloneElement(child, { class: child.props.class + ' ' + newClass}));
    }

    return (
        <a class={'small-link-box ' + props.theme} href={props.url} target='_blank' rel="noreferrer">
            {injectStyle('small-link ' + props.theme)}
        </a>
    );
}