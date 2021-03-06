import * as React from 'react'

import 'stylesheets/SmallLink.css'

const SmallLink = ({ theme, size, url, children }) => {
    const injectStyle = (newClass) =>{
        return React.Children.map(children, child => 
            React.cloneElement(child, { className: child.props.className + ' ' + newClass}))
    }

    return (
        <a className={'small-link-box ' + theme + ' ' + size} href={url} target='_blank' rel="noreferrer">
            {injectStyle('small-link ' + theme)}
        </a>
    )
}

export default SmallLink