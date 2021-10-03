import React from 'react'

import { useState } from 'react'

import 'css/SvgButton.css'

const SvgButton = ({theme, layout, active, baseColor, children}) => {
    const [clickAnimation, setClickAnimation] = useState('')

    const injectStyle = (newClass) => {
        return React.Children.map(children, child => 
            React.cloneElement(child, { className: child.props.className + ' ' + newClass}))
    }

    const onClick = () => {
        setClickAnimation('')
        setClickAnimation('click-animation')
        setTimeout(() => setClickAnimation(''), 400)
    }
    
    return (
        <div className={'svg-button-box ' + layout + ' ' + active} onClick={onClick}>
            {injectStyle('svg-button-shadow ' + theme)}
            <div className={'svg-button-mover ' + clickAnimation}>
                {injectStyle('svg-button ' + baseColor)}
            </div>
        </div>
    ) 
}

export default SvgButton