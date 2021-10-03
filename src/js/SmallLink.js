import * as React from 'react'

import 'css/SmallLink.css'

const SmallLink = ({ theme, url, children }) => {
    const injectStyle = (newClass) =>{
        return React.Children.map(children, child => 
            React.cloneElement(child, { className: child.props.className + ' ' + newClass}))
    }

    return (
        <a className={'small-link-box ' + theme} href={url} target='_blank' rel="noreferrer">
            {injectStyle('small-link ' + theme)}
        </a>
    )
}

export default SmallLink