import React from 'react'

import { useState } from 'react'

import 'css/SvgButton.css'

const SvgButton = ({theme, layoutClass, active, baseColor, children}) => {
    const [clickAnimation, setClickAnimation] = useState('')

    const injectStyle = (newClass) => {
        return React.Children.map(children, child => 
            React.cloneElement(child, { class: child.props.class + ' ' + newClass}))
    }

    const onClick = () => {
        setClickAnimation('')
        setClickAnimation('click-animation')
        setTimeout(() => setClickAnimation(''), 400)
    }
    
    return (
        <div class={'svg-button-box ' + layoutClass + ' ' + active} onClick={onClick}>
            {injectStyle('svg-button-shadow ' + theme)}
            <div class={'svg-button-mover ' + clickAnimation}>
                {injectStyle('svg-button ' + baseColor)}
            </div>
        </div>
    ) 
}

export default SvgButton