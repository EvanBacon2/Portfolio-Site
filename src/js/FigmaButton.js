import { useState } from 'react'

import 'stylesheets/SvgButton.css'

import {ReactComponent as FigmaIcon} from '../svg/figma.svg'
import {ReactComponent as FigmaColorIcon} from '../svg/figma-color.svg'

const FigmaButton = ({active, boxClass}) => {
    const [clickAnimation, setClickAnimation] = useState('')

    const onClick = () => {
        setClickAnimation('')
        setClickAnimation('click-animation')
        setTimeout(() => setClickAnimation(''), 400)
    }

    return (
        <div className={'svg-button-box ' + active} onClick={onClick}>
            <FigmaColorIcon className={'svg-button-shadow ' + boxClass}/>
            <div className={'svg-button-mover ' + clickAnimation}>
                <FigmaIcon className={'svg-button ' + boxClass}/>
            </div>
        </div>
    );
}

export default FigmaButton